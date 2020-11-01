import { GatsbyNode } from 'gatsby';
import {
  CreatePagesFromMicroCmsQuery,
  CreateTagPostsPagesFromMicroCmsQuery,
  CreateTagsPagesFromMicroCmsQuery,
} from '../types/graphql-types';

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
  totalCount: number;
}

const ListLimit = 5;

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const result = await graphql<CreatePagesFromMicroCmsQuery>(`
    query CreatePagesFromMicroCms {
      allMicrocmsPosts {
        edges {
          node {
            postsId
          }
        }
        totalCount
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const pagesNum = (result.data.allMicrocmsPosts.totalCount - 1) / 5;
  for (let i = 0; i < pagesNum; i += 1) {
    const p = i === 0 ? '/' : `/${i + 1}`;
    createPage({
      path: p,
      component: path.resolve('./src/templates/posts.tsx'),
      context: {
        limit: ListLimit,
        page: i + 1,
        skip: i * ListLimit,
        totalCount: result.data.allMicrocmsPosts.totalCount,
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
    const pagesNum = (result.data.allMicrocmsPosts.totalCount - 1) / 5;
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
