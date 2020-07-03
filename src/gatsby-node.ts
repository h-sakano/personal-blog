import { GatsbyNode } from 'gatsby';
import { CreatePagesFromMicroCmsQuery } from '../types/graphql-types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

export interface PostPageContext {
  id: string;
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
            id
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
      path: `/posts/${edge.node.id}`,
      component: path.resolve('./src/templates/post.tsx'),
      context: {
        id: edge.node.id,
      },
    });
  });
};
