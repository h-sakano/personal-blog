import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { PostsQuery } from '../../types/graphql-types';
import PostsList from '../components/PostsList';

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
  query Posts {
    allMicrocmsPosts(sort: { fields: [createdAt], order: DESC }) {
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
        }
      }
    }
  }
`;

export default IndexPage;
