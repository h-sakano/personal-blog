import { List } from 'antd';
import React, { Fragment } from 'react';
import { isMicrocmsPost } from '../typeGuards';
import { PostType } from '../types';
import Pagination from './Pagination';
import PostsListItem from './PostsListItem';

interface Props {
  baseUrl: string;
  data: Array<PostType>;
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
        dataSource={data}
        itemLayout="vertical"
        size="large"
        renderItem={(item) => (
          <Fragment key={item.node.id}>
            {isMicrocmsPost(item) ? (
              <PostsListItem
                description={item.node.description}
                internalType={item.node.internal.type}
                postsId={item.node.postsId}
                publishedAt={item.node.publishedAt}
                publishedAtOnHatena={item.node.publishedAtOnHatena}
                tags={item.node.tags}
                thumbnail={item.node.thumbnail}
                title={item.node.title}
              />
            ) : (
              <PostsListItem
                description={item.node.contentSnippet}
                internalType={item.node.internal.type}
                link={item.node.link}
                publishedAt={item.node.isoDate}
                title={item.node.title}
              />
            )}
          </Fragment>
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
