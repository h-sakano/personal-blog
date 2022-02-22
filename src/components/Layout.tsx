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
import SourceCode from './SourceCode';
import TwitterWidget from './TwitterWidget';
import '../styles/tailwind.css';

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
    <div className="font-blog flex flex-col mx-auto max-w-screen-lg min-h-screen p-2 pt-5">
      <Header
        description={data.site.siteMetadata.description}
        siteTitle={data.site.siteMetadata.title}
      />
      <div className="md:flex">
        <main className="mt-3 w-full md:flex-1">{children}</main>
        <aside className="mt-3 md:ml-2 w-full md:w-64">
          <div className="w-full flex flex-col items-center">
            <Profile />
            <div className="mt-2">
              <iframe
                frameBorder="0"
                height="365"
                scrolling="no"
                src="https://camp-fire.jp/projects/540880/widget"
                title="クラウドファンディング"
                width="245"
              />
            </div>
            <div className="mt-2 w-full">
              <SourceCode />
            </div>
            <div className="mt-2 w-full">
              <TwitterWidget />
            </div>
          </div>
        </aside>
      </div>
      <footer className="mt-auto text-center">
        <div className="mt-3">
          ©&nbsp;2018-{new Date().getFullYear()}&nbsp;
          <a
            className="text-coloredLink"
            href="https://twitter.com/h_sakano"
            rel="nofollow noopener noreferrer"
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
