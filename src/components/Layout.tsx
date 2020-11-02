/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { useStaticQuery, graphql } from 'gatsby';
import React, { ReactNode } from 'react';
import { SiteTitleQuery } from '../../types/graphql-types';
import Header from './Header';
import Profile from './Profile';
import TwitterWidget from './TwitterWidget';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
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
    <div className="flex flex-col mx-auto max-w-screen-lg min-h-screen p-2 pt-5">
      <Header
        description={data.site.siteMetadata.description}
        siteTitle={data.site.siteMetadata.title}
      />
      <div className="md:flex">
        <main className="mt-3 w-full md:flex-1">{children}</main>
        <aside className="mt-3 md:ml-2 w-full md:w-64">
          <div className="w-full">
            <Profile />
            <div className="mt-2">
              <TwitterWidget />
            </div>
          </div>
        </aside>
      </div>
      <footer className="mt-auto text-center">
        <div className="mt-3">
          ©&nbsp;2018-{new Date().getFullYear()}&nbsp;
          <a
            href="https://twitter.com/h_sakano"
            rel="noreferrer noopener"
            target="_blank"
          >
            Hiroki&nbsp;Sakano(@h_sakano)
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
