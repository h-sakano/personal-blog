import React from 'react';
import { List, Space, Tag, Typography } from 'antd';
import { Link } from 'gatsby';
import styles from './PostsListItem.module.css';
import PublishedAt from './PublishedAt';
import { MicrocmsPostsTags } from '../../types/graphql-types';

interface Props {
  description?: string;
  postsId?: string;
  publishedAt?: string;
  publishedAtOnHatena?: string;
  tags?: Pick<MicrocmsPostsTags, 'color' | 'id' | 'name'>[];
  title?: string;
}

const PostListItem: React.FC<Props> = ({
  description,
  postsId,
  publishedAt,
  publishedAtOnHatena,
  tags,
  title,
}) => (
  <List.Item
    extra={
      <Link to={`/posts/${postsId}`}>
        <img
          width={272}
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        />
      </Link>
    }
  >
    <article>
      <PublishedAt
        publishedAt={publishedAt}
        publishedAtOnHatena={publishedAtOnHatena}
      />
      <br />
      <Typography.Title level={2}>
        <Link className={styles.title} to={`/posts/${postsId}`}>
          {title}
        </Link>
      </Typography.Title>
      <Space direction="vertical">
        {tags?.map((tag) => (
          <Tag color={tag.color} key={tag.id}>
            <Link to={`/tags/${tag.id}`}>{tag.name}</Link>
          </Tag>
        ))}
        <Typography.Paragraph
          className={styles.description}
          ellipsis={{ rows: 2, symbol: 'more' }}
        >
          {description}
        </Typography.Paragraph>
      </Space>
    </article>
  </List.Item>
);

export default PostListItem;
