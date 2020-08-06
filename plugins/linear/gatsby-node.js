const { request, gql } = require("graphql-request")

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

exports.createResolvers = ({ createResolvers }, pluginOptions) => {
  const query = gql`
    {
      Movie(title: "Inception") {
        releaseDate
        actors {
          name
        }
      }
    }
  `

  request("https://api.graph.cool/simple/v1/movies", query).then((data) => {
    console.log(data)
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
  })
}
