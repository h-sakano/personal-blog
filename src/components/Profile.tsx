import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Card } from 'antd';
import Img from 'gatsby-image';
import styles from './Profile.module.css';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fixed(width: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Card title="プロフィール" bordered={false}>
      <Img
        className={styles.avatar}
        fixed={data.placeholderImage.childImageSharp.fixed}
      />
    </Card>
  );
};

export default Profile;
