import { List, Space, Tag, Typography } from 'antd';
import { Link } from 'gatsby';
import React from 'react';
import {
  MicrocmsPostsTags,
  MicrocmsPostsThumbnail,
} from '../../types/graphql-types';
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
    className="border-b border-gray-300"
    extra={
      thumbnail?.url && (
        <Link to={`/posts/${postsId}`}>
          <img
            alt="thumbnail"
            className="object-cover"
            height={123}
            src={thumbnail?.url}
            width={200}
          />
        </Link>
      )
    }
  >
    <article className="flex-1">
      <PublishedAt
        publishedAt={publishedAt}
        publishedAtOnHatena={publishedAtOnHatena}
      />
      <br />
      <h2 className="text-2xl">
        <Link to={`/posts/${postsId}`}>{title}</Link>
      </h2>
      <Space direction="vertical">
        <div>
          {tags?.map((tag) => (
            <Tag color={tag.color} key={tag.id}>
              <Link to={`/tags/${tag.id}`}>{tag.name}</Link>
            </Tag>
          ))}
        </div>
        <Typography.Paragraph
          className="whitespace-pre-wrap"
          ellipsis={{ rows: 2, symbol: 'more' }}
        >
          {description}
        </Typography.Paragraph>
      </Space>
    </article>
  </List.Item>
);

export default PostListItem;
