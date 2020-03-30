require("dotenv").config({
  path: `.env.local`,
})

module.exports = {
  siteMetadata: {
    title: `Meeshkan Website`,
    description: `The website supporting meeshkan as a project`,
    author: `@meeshkanML`,
    ogImage: ``,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `meeshkan-website`,
        short_name: `meeshkan`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#DC1853`,
        display: `minimal-ui`,
        icon: `src/static/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${process.env.GOOGLE_ANALYTICS_TOKEN}`,
        head: true,
        anonymize: true,
        pageTransitionDelay: 0,
      },
    },
  ],
}
