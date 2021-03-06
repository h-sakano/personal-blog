import { Breadcrumb, Menu, Tag, Typography } from 'antd';
import { Link, graphql } from 'gatsby';
import React from 'react';
import { PostQuery } from '../../types/graphql-types';
import Layout from '../components/Layout';
import PublishedAt from '../components/PublishedAt';
import SEO from '../components/SEO';
import './post.css';

interface Props {
  data: PostQuery;
}

const Post: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <SEO
        description={data.microcmsPosts.description}
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
      <article className="mt-5">
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
        <div className="post-body leading-7 mt-5">
          {data.microcmsPosts.contents?.map((content) => (
            <React.Fragment key={content.fieldId}>
              {content.richEditor && (
                <div
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: content.richEditor }}
                />
              )}
              {content.html && (
                <div
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: content.html }}
                />
              )}
            </React.Fragment>
          ))}
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: data.microcmsPosts.body }}
          />
        </div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query Post($postsId: String) {
    microcmsPosts(postsId: { eq: $postsId }) {
      id
      body
      contents {
        fieldId
        html
        richEditor
      }
      description
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
