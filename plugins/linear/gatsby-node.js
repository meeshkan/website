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
