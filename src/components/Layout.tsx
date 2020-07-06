/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Space } from 'antd';
import Header from './Header';
import styles from './Layout.module.css';
import Profile from './Profile';
import { SiteTitleQuery } from '../../types/graphql-types';
import './Layout.css';
import TwitterWidget from './TwitterWidget';

const Layout = ({ children }) => {
  const data = useStaticQuery<SiteTitleQuery>(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `);

  return (
    <div className={styles.wrapper}>
      <Header
        description={data.site.siteMetadata.description}
        siteTitle={data.site.siteMetadata.title}
      />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
        <aside className={styles.sider}>
          <Space direction="vertical">
            <Profile />
            <TwitterWidget />
          </Space>
        </aside>
      </div>
      <footer className={styles.footer}>
        ©&nbsp;2018-{new Date().getFullYear()}&nbsp;
        <a href="https://twitter.com/h_sakano">Hiroki&nbsp;Sakano(@h-sakano)</a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
