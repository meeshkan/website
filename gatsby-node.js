const { createFilePath } = require("gatsby-source-filesystem")
const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPost = path.resolve("src/components/templates/blogPost.tsx")

  return graphql(`
    {
      allMdx(
        filter: { frontmatter: { published: { eq: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        nodes {
          id
          excerpt(pruneLength: 140)
          frontmatter {
            title
            date
            slug
            published
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }

    const posts = result.data.allMdx.nodes

    // create page for each mdx file
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1]
      const next = index === 0 ? null : posts[index - 1]

      createPage({
        path: `/blog/${post.frontmatter.slug}/`,
        component: blogPost,
        context: {
          post,
          slug: post.frontmatter.slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    """
    RoadmapEpic entry
    """
    type RoadmapEpic @infer {
      title: String!
    }
  `
  createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    Query: {
      roadmap: {
        type: [`RoadmapEpic`],
        resolve: () => {
          return [
            {
              title: "My awesome roadmap epic",
            },
            {
              title: "Another roadmap epic",
            },
          ]
        },
      },
    },
  }
  createResolvers(resolvers)
}
