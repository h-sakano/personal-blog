import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { TagQuery } from '../../types/graphql-types';
import { TagsPageContext } from '../gatsby-node';
import PostsList from '../components/PostsList';

interface Props {
  data: TagQuery;
  pageContext: TagsPageContext;
}

const Post: React.FC<Props> = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.name} />
      <PostsList data={data} />
    </Layout>
  );
};

export const query = graphql`
  query Tag($tagsId: String) {
    allMicrocmsPosts(
      filter: { tags: { elemMatch: { id: { eq: $tagsId } } } }
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          id
          body
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

export default Post;
