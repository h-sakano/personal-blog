import { GatsbyNode } from 'gatsby';
import {
  CreatePagesFromMicroCmsQuery,
  CreateTagsPagesFromMicroCmsQuery,
} from '../types/graphql-types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

export interface TagsPageContext {
  name?: string;
}

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
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
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

  tagsResult.data.allMicrocmsTags.edges.forEach((edge) => {
    createPage({
      path: `/tags/${edge.node.tagsId}`,
      component: path.resolve('./src/templates/tag.tsx'),
      context: {
        name: edge.node.name,
        tagsId: edge.node.tagsId,
      },
    });
  });
};
