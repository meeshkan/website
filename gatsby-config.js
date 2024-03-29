require("dotenv").config({
	path: `.env.local`,
})

module.exports = {
	siteMetadata: {
		title: `Meeshkan Website`,
		description: `Meeshkan is an automated testing service for your GraphQL API that executes and reports on a collection of dynamically generated tests. Create a free account today!`,
		baseOG: `https://media.graphcms.com/vdCWflSaePa3QyqMPUfQ`,
		siteUrl: `https://meeshkan.com`,
		siteLanguage: `en-US`,
		siteLocale: `en_us`,
		author: `@meeshkan`,
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
				name: `changelog`,
				path: `${__dirname}/src/changelog/`,
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				defaultLayouts: {
					default: require.resolve("./src/components/templates/layout-mdx.tsx"),
				},
				extensions: [`.mdx`],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: "gatsby-plugin-mixpanel",
			options: {
				apiToken: process.env.MIXPANEL_TOKEN, // required
			},
		},
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
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
					`${process.env.GOOGLE_ANALYTICS_TOKEN}`, // Google Analytics / GA
					`${process.env.GOOGLE_ADWORDS_TOKEN}`, // Google Ads / Adwords / AW
				],
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: true,
					// Setting this parameter is also optional
					respectDNT: true,
				},
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`JetBrains mono\:400,700`,
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
		{
			resolve: "gatsby-source-graphql",
			options: {
				// Arbitrary name for the remote schema Query type
				typeName: "Linear",
				// Field under which the remote schema will be accessible. You'll use this in your Gatsby query
				fieldName: "linear",
				// Url to query from
				url: "https://api.linear.app/graphql",
				// headers
				headers: {
					Authorization: process.env.LINEAR_TOKEN,
				},
			},
		},
		{
			resolve: `gatsby-plugin-hotjar`,
			options: {
				includeInDevelopment: true,
				id: 1099928,
				sv: 6,
			},
		},
		{
			resolve: `@meeshkanml/gatsby-plugin-meeshkan-recorder`,
			options: {
				clientId: "ckkp89za900yv07l66yxw1jb6",
			},
		},
	],
}
