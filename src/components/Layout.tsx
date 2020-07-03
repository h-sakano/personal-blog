/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';
import styles from './Layout.module.css';
import { SiteTitleQuery } from '../../types/graphql-types';
import './Layout.css';

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
      <main className={styles.main}>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
