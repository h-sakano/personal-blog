import React from 'react';
import { List, Tag, Typography } from 'antd';
import { Link } from 'gatsby';
import styles from './PostsListItem.module.css';
import PublishedAt from './PublishedAt';
import { MicrocmsPostsTags } from '../../types/graphql-types';

interface Props {
  postsId: string;
  publishedAt?: string;
  publishedAtOnHatena?: string;
  tags?: Pick<MicrocmsPostsTags, 'color' | 'id' | 'name'>[];
  title?: string;
}

const PostListItem: React.FC<Props> = ({
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
    {tags?.map((tag) => (
      <Tag color={tag.color} key={tag.id}>
        <Link to={`/tags/${tag.id}`}>{tag.name}</Link>
      </Tag>
    ))}
  </List.Item>
);

export default PostListItem;
