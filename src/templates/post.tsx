import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { PostQuery } from '../../types/graphql-types';
import PublishedAt from '../components/PublishedAt';

interface Props {
  data: PostQuery;
}

const Post: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.microcmsPosts.title} />
      <article>
        <PublishedAt
          publishedAt={data.microcmsPosts.publishedAt}
          publishedAtOnHatena={data.microcmsPosts.publishedAtOnHatena}
        />
        <h1>{data.microcmsPosts.title}</h1>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: data.microcmsPosts.body }}
        />
      </article>
    </Layout>
  );
};

export const query = graphql`
  query Post($postsId: String) {
    microcmsPosts(postsId: { eq: $postsId }) {
      id
      body
      publishedAt
      publishedAtOnHatena
      title
      tags {
        id
        name
      }
    }
  }
`;

export default Post;
