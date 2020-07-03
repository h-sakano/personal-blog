require('dotenv').config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    title: `Web系エンジニアのアウトプット練習場`,
    description: `エンジニアリングと書評が中心。たまに全然関係無い話もします。`,
    author: `@h-sakano`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-less",
      options: {
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: 'h-sakano',
        endpoint: 'posts',
      },
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
