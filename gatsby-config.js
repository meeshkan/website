require("dotenv").config({
  path: `.env.local`,
})

module.exports = {
  siteMetadata: {
    title: `Meeshkan Website`,
    description: `Meeshkan is an automated testing workflow for your project and it's dependencies. We're currently in private beta and accepting applications.`,
    baseOG: `https://media.graphcms.com/vdCWflSaePa3QyqMPUfQ`,
    siteUrl: `https://meeshkan.com`,
    siteLanguage: `en-US`,
    siteLocale: `en_us`,
    author: `@meeshkanML`,
  },
  mapping: {
    "Mdx.frontmatter.authors": "AuthorYaml",
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
        name: `posts`,
        path: `${__dirname}/src/blog/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/pages/docs/`,
      },
    },
    `gatsby-transformer-gitinfo`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`],
        rehypePlugins: [require("rehype-slug")],
        defaultLayouts: {
          default: require.resolve("./src/components/templates/docsLayout.tsx"),
        },
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
      resolve: `gatsby-plugin-algolia-docsearch`,
      options: {
        apiKey: process.env.ALGOLIA_SEARCH_API_KEY, // required
        indexName: "meeshkan", // required
        inputSelector: ".algolia-search-bar", // required
        debug: false, // (bool) Optional. Default `false`
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `${process.env.GOOGLE_ANALYTICS_TOKEN}`,
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Fira Code\:400,700`,
          `Inter\:100,200,300,400,500,600,700,800,900`,
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-plugin-intercom`,
      options: {
        appId: process.env.INTERCOM_APP_ID,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 650,
              quality: 80,
            },
          },
        ],
      },
    },
  ],
}
