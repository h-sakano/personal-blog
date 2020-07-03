import React from 'react';
import { graphql } from 'gatsby';
import { List } from 'antd';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { PostsQuery } from '../../types/graphql-types';
import PostListItem from '../components/PostListItem';

interface Props {
  data: PostsQuery;
}

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <SEO title="トップページ" />
      <List
        itemLayout="vertical"
        size="large"
        pagination={{ pageSize: 10 }}
        dataSource={data.allMicrocmsPosts.edges}
        renderItem={(item) => (
          <PostListItem
            key={item.node.id}
            id={item.node.id}
            publishedAt={item.node.publishedAt}
            publishedAtOnHatena={item.node.publishedAtOnHatena}
            title={item.node.title}
          />
        )}
      />
    </Layout>
  );
};

export const query = graphql`
  query Posts {
    allMicrocmsPosts(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          body
          publishedAt
          publishedAtOnHatena
          title
          tags {
            id
            name
          }
        }
      }
    }
  }
`;

export default IndexPage;
