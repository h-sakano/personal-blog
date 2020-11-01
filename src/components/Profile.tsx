import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';
import { Card, Space } from 'antd';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fixed(width: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Card className={styles.profile} title="プロフィール" bordered={false}>
      <div className={styles.avatarContainer}>
        <Img
          alt="プロフィール画像"
          className={styles.avatar}
          fixed={data.avatar.childImageSharp.fixed}
        />
        <div className={styles.profileText}>
          <a
            className={styles.snsContainer}
            href="https://twitter.com/h_sakano"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Space>
              <TwitterOutlined className={styles.twitter} />
              @h_sakano
            </Space>
          </a>
          <a
            className={styles.snsContainer}
            href="https://github.com/h-sakano"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Space>
              <GithubOutlined className={styles.github} />
              @h-sakano
            </Space>
          </a>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
