import React from 'react';
import { Link, graphql } from 'gatsby';
import { Tag, Typography } from 'antd';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { PostQuery } from '../../types/graphql-types';
import PublishedAt from '../components/PublishedAt';
import styles from './post.module.css';

interface Props {
  data: PostQuery;
}

const Post: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.microcmsPosts.title} />
      <article>
        <PublishedAt
          publishedAt={data.microcmsPosts.publishedAt}
          publishedAtOnHatena={data.microcmsPosts.publishedAtOnHatena}
        />
        <Typography.Title>{data.microcmsPosts.title}</Typography.Title>
        {data.microcmsPosts.tags?.map((tag) => (
          <Tag color={tag.color} key={tag.id}>
            <Link to={`/tags/${tag.id}`}>{tag.name}</Link>
          </Tag>
        ))}
        <div
          className={styles.body}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: data.microcmsPosts.body }}
        />
      </article>
    </Layout>
  );
};

export const query = graphql`
  query Post($postsId: String) {
    microcmsPosts(postsId: { eq: $postsId }) {
      id
      body
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
`;

export default Post;
