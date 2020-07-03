import React from 'react';
import { Link, graphql } from 'gatsby';
import format from 'date-fns/format';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { PostQuery } from '../../types/graphql-types';

interface Props {
  data: PostQuery;
}

const Post: React.FC<Props> = ({ data }) => {
  const publishedAt =
    data.microcmsPosts.publishedAtOnHatena ?? data.microcmsPosts.publishedAt;
  return (
    <Layout>
      <SEO title={data.microcmsPosts.title} />
      <article>
        <h1>{data.microcmsPosts.title}</h1>
        {publishedAt && (
          <div>{format(new Date(publishedAt), 'yyyy年MM月dd日')}</div>
        )}
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: data.microcmsPosts.body }}
        />
      </article>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export const query = graphql`
  query Post($id: String!) {
    microcmsPosts(id: { eq: $id }) {
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
