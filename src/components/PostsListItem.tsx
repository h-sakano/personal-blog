import { ExportOutlined } from '@ant-design/icons';
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
  internalType?: string;
  link?: string;
  postsId?: string;
  publishedAt?: string;
  publishedAtOnHatena?: string;
  tags?: Pick<MicrocmsPostsTags, 'color' | 'id' | 'name'>[];
  thumbnail?: Pick<MicrocmsPostsThumbnail, 'url'>;
  title?: string;
}

const PostListItem: React.FC<Props> = ({
  description,
  internalType,
  link,
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
        {link ? (
          <a href={link} target="_blank" rel="nofollow noopener noreferrer">
            <ExportOutlined className="inline-flex mr-2" />
            {title}
          </a>
        ) : (
          <Link to={`/posts/${postsId}`}>{title}</Link>
        )}
      </h2>
      <Space direction="vertical">
        <div>
          {internalType === 'FeedQiitaPost' && <Tag color="#00CA00">Qiita</Tag>}
          {internalType === 'FeedZennPost' && <Tag color="#3ea8ff">Zenn</Tag>}
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
