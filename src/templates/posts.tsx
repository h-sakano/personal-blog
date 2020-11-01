import { graphql } from 'gatsby';
import React from 'react';
import { PostsQuery } from '../../types/graphql-types';
import Layout from '../components/Layout';
import PostsList from '../components/PostsList';
import SEO from '../components/SEO';

interface Props {
  data: PostsQuery;
}

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <SEO title="トップページ" />
      <PostsList data={data} />
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
