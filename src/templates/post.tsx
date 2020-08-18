import React from 'react';
import { Link, graphql } from 'gatsby';
import { Breadcrumb, Menu, Tag, Typography } from 'antd';
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
      <SEO
        image={data.microcmsPosts.thumbnail?.url}
        title={data.microcmsPosts.title}
      />
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">トップページ</Link>
        </Breadcrumb.Item>
        {data.microcmsPosts.tags && data.microcmsPosts.tags.length > 0 && (
          <Breadcrumb.Item
            overlay={
              data.microcmsPosts.tags.length > 1 && (
                <Menu>
                  {data.microcmsPosts.tags.map((tag) => (
                    <Menu.Item key={tag.id}>
                      <Link to={`/tags/${tag.id}`}>{tag.name}</Link>
                    </Menu.Item>
                  ))}
                </Menu>
              )
            }
          >
            <Link to={`/tags/${data.microcmsPosts.tags[0].id}`}>
              {data.microcmsPosts.tags[0].name}
            </Link>
          </Breadcrumb.Item>
        )}
        <Breadcrumb.Item>{data.microcmsPosts.title}</Breadcrumb.Item>
      </Breadcrumb>
      <article className="content">
        <PublishedAt
          publishedAt={data.microcmsPosts.publishedAt}
          publishedAtOnHatena={data.microcmsPosts.publishedAtOnHatena}
        />
        <br />
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
      thumbnail {
        url
      }
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
