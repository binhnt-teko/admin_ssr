_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [24],
  {
    '97Is': function(e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/404',
        function() {
          return a('w2l6');
        },
      ]);
    },
    w2l6: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('q1tI'),
        i = a.n(n),
        s = a('YFqc'),
        c = a('wx14'),
        o = (a('MaXC'), a('4IMT')),
        l = a.n(o),
        r = a('Ff2n'),
        m = a('TSYQ'),
        d = a.n(m),
        g = {
          403: {
            img: '/background/403.svg',
            title: '403',
            desc: 'Sorry, you do not have permission to access this page',
          },
          404: {
            img: '/background/404.svg',
            title: '404',
            desc: 'Sorry, you do not have permission to access this page',
          },
          500: {
            img: '/background/500.svg',
            title: '500',
            desc: 'Sorry, something went wrong with the server',
          },
        },
        u = a('7CJS'),
        p = a.n(u),
        w = i.a.createElement,
        h = function(e) {
          var t = e.className,
            a = e.linkElement,
            i = void 0 === a ? 'a' : a,
            s = e.type,
            o = e.title,
            m = e.desc,
            u = e.img,
            h = e.actions,
            v = Object(r.a)(e, [
              'className',
              'linkElement',
              'type',
              'title',
              'desc',
              'img',
              'actions',
            ]),
            N = s in g ? s : '404',
            k = d()(p.a.exception, t);
          return w(
            'div',
            Object(c.a)({ className: k }, v),
            w(
              'div',
              { className: p.a.imgBlock },
              w('div', {
                className: p.a.imgEle,
                style: { backgroundImage: 'url('.concat(u || g[N].img, ')') },
              })
            ),
            w(
              'div',
              { className: p.a.content },
              w('h1', null, o || g[N].title),
              w('div', { className: p.a.desc }, m || g[N].desc),
              w(
                'div',
                { className: p.a.actions },
                h ||
                  Object(n.createElement)(
                    i,
                    { to: '/', href: '/' },
                    w(l.a, { type: 'primary' }, 'Back to homepage')
                  )
              )
            )
          );
        },
        v = i.a.createElement;
      t.default = function() {
        return v(h, { type: '404', style: { minHeight: 500, height: '80%' }, linkElement: s.Link });
      };
    },
  },
  [['97Is', 0, 2, 1, 3, 4, 8, 7, 9]],
]);