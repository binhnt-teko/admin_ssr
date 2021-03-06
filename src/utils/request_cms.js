import axios from 'axios';
import moment from 'moment';
import { history } from 'react-router-dom';
import { stringify, parse } from 'qs';
import { notification } from 'antd';

import store, { storeKeys } from './persistent-store';

let refreshTimeout;
let lastAccessTime;

export const baseURL = '/cms';

export const contentType = {
  form: 'application/x-www-form-urlencoded',
  json: 'application/json',
};

export const headerKeys = {
  ContentType: 'Content-Type',
  Authorization: 'Authorization',
};

export const methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
  HEAD: 'HEAD',
  OPTIONS: 'OPTIONS',
};

// Get access token
export function getAccessToken() {
  const token = store.get(storeKeys.AccessToken);
  if (!token) {
    return '';
  }
  return token.access_token;
  return '';
}

// Wrap the URL with the token
export function wrapURLWithToken(url) {
  const ss = url.split('?');
  const query = parse(ss[1]);
  query.accessToken = getAccessToken();
  return `${ss[0]}?${stringify(query)}`;
}

// Sign out
export function logout() {
  if (refreshTimeout) {
    clearTimeout(refreshTimeout);
  }

  store.remove(storeKeys.AccessToken);
  const { redirect } = parse(window.location.href.split('?')[1]);
  if (window.location.pathname !== '/login' && !redirect) {
    window.location = '/login';
    // window.history.replace({
    //   pathname: '/user/login',
    //   search: stringify({
    //     redirect: window.location.href,
    //   }),
    // });
  }
}

// request Interceptor
function requestInterceptors(c) {
  const config = { ...c };
  const token = store.get(storeKeys.AccessToken);
  if (token) {
    config.headers[headerKeys.Authorization] = `${token.token_type} ${token.access_token}`;
  }
  return config;
}

// ajax request
export default function request(url, options = {}) {
  // console.log('request_cms.request: AccessToken: ', storeKeys.AccessToken);
  const oldToken = store.get(storeKeys.AccessToken);
  // console.log("oldToken: ", oldToken);
  if (oldToken && oldToken.expires_at - lastAccessTime <= 0) {
    if (refreshTimeout) {
      clearTimeout(refreshTimeout);
    }
    logout();
    // eslint-disable-next-line compat/compat
    return Promise.reject(new Error('The token has expired'));
  }
  lastAccessTime = moment().unix();

  const opts = { ...options };
  let showNotify = true;
  if (opts.hideNotify) {
    showNotify = false;
    delete opts.hideNotify;
  }

  const config = {
    method: methods.GET,
    baseURL,
    headers: {},
    transformRequest: (data, headers) => {
      switch (headers[headerKeys.ContentType]) {
        case contentType.json:
          return JSON.stringify(data);
        case contentType.form:
          return stringify(data);
        default:
          return data;
      }
    },
    paramsSerializer: params => {
      return stringify(params);
    },
    timeout: 60000,
    ...opts,
  };

  if (
    !(config.headers && config.headers[headerKeys.ContentType]) &&
    [methods.POST, methods.PUT, methods.PATCH].indexOf(config.method) > -1
  ) {
    config.headers[headerKeys.ContentType] = contentType.json;
  }

  const instance = axios.create(config);
  instance.interceptors.request.use(requestInterceptors);

  return instance
    .request({ url })
    .then(res => {
      const { data } = res;
      // console.log('request_cms.request: Data', data);
      return data;
    })
    .catch(error => {
      const { response } = error;
      const { status, data } = response;

      if (status === 401 && data.error && data.error.code === 9999) {
        logout();
        return response;
      }

      if (showNotify) {
        let msg = 'Request error';
        if (status === 504) {
          msg = 'Not connected to server';
        } else if (data && data.error) {
          msg = data.error.message;
        }

        notification.error({
          message: `${config.baseURL}${url}`,
          description: msg,
        });
      }
      return response;
    });
}

// Put in the access token
export function setToken(token) {
  lastAccessTime = token.expires_at;
  store.set(storeKeys.AccessToken, token);
  if (refreshTimeout) {
    clearTimeout(refreshTimeout);
  }

  // Renew the token 10 minutes in advance
  const timeout = token.expires_at - moment().unix() - 10;
  if (timeout > 0) {
    refreshTimeout = setTimeout(() => {
      const oldToken = store.get(storeKeys.AccessToken);
      if (oldToken && oldToken.expires_at - lastAccessTime <= 0) {
        if (refreshTimeout) {
          clearTimeout(refreshTimeout);
        }
        return;
      }

      request('/v1/pub/refresh-token', {
        method: methods.POST,
      }).then(res => {
        setToken(res);
      });
    }, timeout * 1000);
  }
}
