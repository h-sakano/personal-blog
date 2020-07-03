import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { PostsQuery } from '../../types/graphql-types';

interface Props {
  data: PostsQuery;
}

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div>
        {data.allMicrocmsPosts.edges.map((edge) => (
          <div key={edge.node.id}>
            <Link to={`/posts/${edge.node.id}`}>{edge.node.title}</Link>
          </div>
        ))}
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
    </Layout>
  );
};

export const query = graphql`
  query Posts {
    allMicrocmsPosts(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          body
          title
          tags {
            id
            name
          }
        }
      }
    }
  }
`;

export default IndexPage;
