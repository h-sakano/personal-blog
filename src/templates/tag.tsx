import React from 'react';
import { graphql, Link } from 'gatsby';
import { Breadcrumb, Typography } from 'antd';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { TagQuery } from '../../types/graphql-types';
import { TagsPageContext } from '../gatsby-node';
import PostsList from '../components/PostsList';

interface Props {
  data: TagQuery;
  pageContext: TagsPageContext;
}

const Tag: React.FC<Props> = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.name} />
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">トップページ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{pageContext.name}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="content">
        <Typography.Title level={2}>
          「{pageContext.name}」についての投稿一覧
        </Typography.Title>
        <PostsList data={data} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query Tag($tagsId: String) {
    allMicrocmsPosts(
      filter: { tags: { elemMatch: { id: { eq: $tagsId } } } }
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

export default Tag;
