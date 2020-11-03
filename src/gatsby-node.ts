import { GatsbyNode } from 'gatsby';
import {
  CreatePagesFromMicroCmsQuery,
  CreateTagPostsPagesFromMicroCmsQuery,
  CreateTagsPagesFromMicroCmsQuery,
} from '../types/graphql-types';
import { isMicrocmsPost } from './typeGuards';
import { PostType } from './types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

export interface TagsPageContext {
  limit: number;
  name: string;
  page: number;
  tagsId: string;
  totalCount: number;
}

export interface PostsPageContext {
  limit: number;
  page: number;
  posts: Array<PostType>;
  totalCount: number;
}

const ListLimit = 5;

const getPublishedAt = (post: PostType): Date =>
  isMicrocmsPost(post)
    ? new Date(post.node.publishedAtOnHatena ?? post.node.publishedAt)
    : new Date(post.node.isoDate);

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const result = await graphql<CreatePagesFromMicroCmsQuery>(`
    query CreatePagesFromMicroCms {
      allMicrocmsPosts(sort: { fields: [publishedAt], order: DESC }) {
        edges {
          node {
            id
            internal {
              type
            }
            description
            postsId
            publishedAt
            publishedAtOnHatena
            title
            tags {
              color
              id
              name
            }
            thumbnail {
              url
            }
          }
        }
      }
      allFeedQiitaPost {
        edges {
          node {
            contentSnippet
            id
            internal {
              type
            }
            isoDate
            link
            title
          }
        }
      }
      allFeedZennPost {
        edges {
          node {
            contentSnippet
            id
            internal {
              type
            }
            isoDate
            link
            title
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = [
    ...result.data.allMicrocmsPosts.edges,
    ...result.data.allFeedQiitaPost.edges,
    ...result.data.allFeedZennPost.edges,
  ].sort((a, b) => getPublishedAt(b).getTime() - getPublishedAt(a).getTime());
  const totalCount = posts.length;

  const pagesNum = Math.floor((totalCount - 1) / 5) + 1;
  for (let i = 0; i < pagesNum; i += 1) {
    const urlPath = i === 0 ? '/' : `/${i + 1}`;
    const skip = i * ListLimit;
    createPage({
      path: urlPath,
      component: path.resolve('./src/templates/posts.tsx'),
      context: {
        limit: ListLimit,
        page: i + 1,
        posts: posts.slice(skip, Math.min(totalCount, skip + ListLimit)),
        totalCount,
      },
    });
  }

  result.data.allMicrocmsPosts.edges.forEach((edge) => {
    createPage({
      path: `/posts/${edge.node.postsId}`,
      component: path.resolve('./src/templates/post.tsx'),
      context: {
        postsId: edge.node.postsId,
      },
    });
  });

  const tagsResult = await graphql<CreateTagsPagesFromMicroCmsQuery>(`
    query CreateTagsPagesFromMicroCms {
      allMicrocmsTags {
        edges {
          node {
            name
            tagsId
          }
        }
      }
    }
  `);

  const tagPostsResultsPromise = tagsResult.data.allMicrocmsTags.edges.map(
    (edge) => {
      const result = graphql<CreateTagPostsPagesFromMicroCmsQuery>(
        `
          query CreateTagPostsPagesFromMicroCms($tagsId: String) {
            allMicrocmsPosts(
              filter: { tags: { elemMatch: { id: { eq: $tagsId } } } }
            ) {
              totalCount
            }
          }
        `,
        { tagsId: edge.node.tagsId },
      );

      return result;
    },
  );

  const tagPostsResults = await Promise.all(tagPostsResultsPromise);
  tagPostsResults.forEach((result, index) => {
    const pagesNum =
      Math.floor((result.data.allMicrocmsPosts.totalCount - 1) / 5) + 1;
    const tagEdge = tagsResult.data.allMicrocmsTags.edges[index];

    for (let i = 0; i < pagesNum; i += 1) {
      let p = `/tags/${tagEdge.node.tagsId}`;
      if (i > 0) {
        p += `/${i + 1}`;
      }
      createPage({
        path: p,
        component: path.resolve('./src/templates/tag.tsx'),
        context: {
          limit: ListLimit,
          name: tagEdge.node.name,
          page: i + 1,
          skip: i * ListLimit,
          tagsId: tagEdge.node.tagsId,
          totalCount: result.data.allMicrocmsPosts.totalCount,
        },
      });
    }
  });
};
