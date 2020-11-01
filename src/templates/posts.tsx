import { graphql } from 'gatsby';
import React from 'react';
import { PostsQuery } from '../../types/graphql-types';
import Layout from '../components/Layout';
import PostsList from '../components/PostsList';
import SEO from '../components/SEO';
import { PostsPageContext } from '../gatsby-node';

interface Props {
  data: PostsQuery;
  pageContext: PostsPageContext;
}

const IndexPage: React.FC<Props> = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title="トップページ" />
      <PostsList
        baseUrl="/"
        data={data}
        limit={pageContext.limit}
        page={pageContext.page}
        totalCount={pageContext.totalCount}
      />
    </Layout>
  );
};

export const query = graphql`
  query Posts($limit: Int, $skip: Int) {
    allMicrocmsPosts(
      limit: $limit
      skip: $skip
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          id
          description
          postsId
          publishedAt
          publishedAtOnHatena
          title
          tags {
            color
            id
            name
          }
          thumbnail {
            url
          }
        }
      }
    }
  }
`;

export default IndexPage;
