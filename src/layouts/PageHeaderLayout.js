import React, { useState, useEffect } from 'react';
// React.useLayoutEffect = React.useEffect;

import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';
import styles from './PageHeaderLayout.less';

export default ({ children, wrapperClassName, top, ...restProps }) => (
  <div style={{ margin: '-24px -24px 0' }} className={wrapperClassName}>
    {top}
    <PageHeader {...restProps} linkElement={Link} />
    {
      children ? <div className={styles.content}>{children}</div> : null
    }
  </div>
);
