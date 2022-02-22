import React from 'react';
import Layout from '../components/Layout';
import PostsList from '../components/PostsList';
import SEO from '../components/SEO';
import { PostsPageContext } from '../gatsby-node';

interface Props {
  pageContext: PostsPageContext;
}

const IndexPage: React.FC<Props> = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="トップページ" />
      <PostsList
        baseUrl="/"
        data={pageContext.posts}
        limit={pageContext.limit}
        page={pageContext.page}
        totalCount={pageContext.totalCount}
      />
    </Layout>
  );
};

export default IndexPage;
