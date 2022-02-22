import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 64)
        }
      }
    }
  `);

  return (
    <Card className="w-full" title="プロフィール" bordered={false}>
      <div className="flex items-center">
        <GatsbyImage
          alt="プロフィール画像"
          className="block rounded-full"
          image={data.avatar.childImageSharp.gatsbyImageData}
        />
        <div className="flex-1 ml-3">
          <a
            className="flex items-center"
            href="https://twitter.com/h_sakano"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <TwitterOutlined className="text-xl text-twitter" />
            <span className="ml-2 text-coloredLink">@h_sakano</span>
          </a>
          <a
            className="flex items-center"
            href="https://github.com/h-sakano"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <GithubOutlined className="text-xl text-github" />
            <span className="ml-2 text-coloredLink">@h-sakano</span>
          </a>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
