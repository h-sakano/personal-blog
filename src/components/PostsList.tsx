import React from 'react';
import { List } from 'antd';
import { PostsQuery, TagQuery } from '../../types/graphql-types';
import PostsListItem from './PostsListItem';

interface Props {
  data: PostsQuery | TagQuery;
}

const PostsList: React.FC<Props> = ({ data }) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{ pageSize: 10 }}
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
    />
  );
};

export default PostsList;
