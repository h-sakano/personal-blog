import { List, Space, Tag, Typography } from 'antd';
import { Link } from 'gatsby';
import React from 'react';
import {
  MicrocmsPostsTags,
  MicrocmsPostsThumbnail,
} from '../../types/graphql-types';
import styles from './PostsListItem.module.css';
import PublishedAt from './PublishedAt';

interface Props {
  description?: string;
  postsId?: string;
  publishedAt?: string;
  publishedAtOnHatena?: string;
  tags?: Pick<MicrocmsPostsTags, 'color' | 'id' | 'name'>[];
  thumbnail?: Pick<MicrocmsPostsThumbnail, 'url'>;
  title?: string;
}

const PostListItem: React.FC<Props> = ({
  description,
  postsId,
  publishedAt,
  publishedAtOnHatena,
  tags,
  thumbnail,
  title,
}) => (
  <List.Item
    className={styles.item}
    extra={
      thumbnail?.url && (
        <Link to={`/posts/${postsId}`}>
          <img
            alt="thumbnail"
            className={styles.thumbnail}
            height={123}
            src={thumbnail?.url}
            width={200}
          />
        </Link>
      )
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
        <div>
          {tags?.map((tag) => (
            <Tag color={tag.color} key={tag.id}>
              <Link to={`/tags/${tag.id}`}>{tag.name}</Link>
            </Tag>
          ))}
        </div>
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
