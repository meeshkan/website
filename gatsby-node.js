const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPost = path.resolve("src/components/templates/blogPost.jsx")

  return graphql(`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMdx.nodes

    // create page for each mdx file
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1]
      const next = index === 0 ? null : posts[index - 1]

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          slug: post.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `/${value}/`,
    })

    createNodeField({
      name: `editLink`,
      node,
      value: `https://github.com/meeshkan/website/edit/authoring${node.fileAbsolutePath.replace(
        __dirname,
        ""
      )}`,
    })
  }
}
