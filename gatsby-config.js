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
    {
      resolve: "gatsby-plugin-less",
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            // https://ant.design/docs/react/customize-theme
            'primary-color': '#1890ff',
            'link-color': '#1890ff',
            'success-color': '#52c41a',
            'warning-color': '#faad14',
            'error-color': '#f5222d',
            'font-size-base': '14px',
            'heading-color': 'rgba(0, 0, 0, 0.85)',
            'text-color': 'rgba(0, 0, 0, 0.65)',
            'text-color-secondary': 'rgba(0, 0, 0, 0.45)',
            'disabled-color': 'rgba(0, 0, 0, 0.25)',
            'border-radius-base': '4px',
            'border-color-base': '#d9d9d9',
            'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      },
    },
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
        serviceId: 'h-sakano',
        apis: [{
          endpoint: 'posts',
        }],
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: 'h-sakano',
        apis: [{
          endpoint: 'tags',
        }],
      },
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
