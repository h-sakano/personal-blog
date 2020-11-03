import { List } from 'antd';
import React from 'react';
import { PostsQuery, TagQuery } from '../../types/graphql-types';
import Pagination from './Pagination';
import PostsListItem from './PostsListItem';

interface Props {
  baseUrl: string;
  data: PostsQuery | TagQuery;
  limit: number;
  page: number;
  totalCount: number;
}

const PostsList: React.FC<Props> = ({
  baseUrl,
  data,
  limit,
  page,
  totalCount,
}) => {
  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data.allMicrocmsPosts.edges}
        renderItem={(item) => (
          <PostsListItem
            description={item.node.description}
            key={item.node.id}
            postsId={item.node.postsId}
            publishedAt={item.node.publishedAt}
            publishedAtOnHatena={item.node.publishedAtOnHatena}
            tags={item.node.tags}
            thumbnail={item.node.thumbnail}
            title={item.node.title}
          />
        )}
        split={false}
      />
      <Pagination
        baseUrl={baseUrl}
        itemCount={totalCount}
        itemPerPage={limit}
        page={page}
      />
    </>
  );
};

export default PostsList;
