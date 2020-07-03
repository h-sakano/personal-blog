import React from 'react';
import { List, Tag, Typography } from 'antd';
import { Link } from 'gatsby';
import styles from './PostListItem.module.css';
import PublishedAt from './PublishedAt';
import { MicrocmsPostsTags } from '../../types/graphql-types';

interface Props {
  id: string;
  publishedAt?: string;
  publishedAtOnHatena?: string;
  tags?: Pick<MicrocmsPostsTags, 'color' | 'id' | 'name'>[];
  title?: string;
}

const PostListItem: React.FC<Props> = ({
  id,
  publishedAt,
  publishedAtOnHatena,
  tags,
  title,
}) => (
  <List.Item
    extra={
      <Link to={`/posts/${id}`}>
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
      <Link className={styles.title} to={`/posts/${id}`}>
        {title}
      </Link>
    </Typography.Title>
    {tags?.map((tag) => (
      <Tag color={tag.color} key={tag.id}>
        {tag.name}
      </Tag>
    ))}
  </List.Item>
);

export default PostListItem;
