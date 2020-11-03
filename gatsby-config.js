require('dotenv').config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    title: `Web系エンジニアのアウトプット練習場`,
    description: `エンジニアリングと書評が中心。たまに全然関係無い話もします。`,
    author: `@h_sakano`,
    siteUrl: 'https://blog.h-sakano.dev/',
  },
  plugins: [
    'gatsby-plugin-antd',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-css-modules-typings`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Web系エンジニアのアウトプット練習場`,
        short_name: `Web系エンジニアのアウトプット練習場`,
        start_url: `/`,
        background_color: `#1da1f2`,
        theme_color: `#1da1f2`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: process.env.MICROCMS_SERVICE_ID,
        apis: [{
          endpoint: 'posts',
        }],
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: process.env.MICROCMS_SERVICE_ID,
        apis: [{
          endpoint: 'tags',
        }],
      },
    },
    {
      resolve: 'gatsby-source-rss-feed',
      options: {
        url: 'https://qiita.com/h-sakano/feed',
        name: 'QiitaPost',
      }
    },
    {
      resolve: 'gatsby-source-rss-feed',
      options: {
        url: 'https://zenn.dev/h_sakano/feed',
        name: 'ZennPost',
      }
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-128039682-1",
      },
    },
    `gatsby-plugin-offline`,
  ],
}
