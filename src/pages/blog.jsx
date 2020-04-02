import React from "react"
import { Heading, Grid, Avatar, Stack, Text } from "@chakra-ui/core"
import { Section } from "../components/organisims/section"
import { graphql } from "gatsby"
import { Card } from "../components/molecules/card"

const BlogHome = ({ data }) => {
  return (
    <>
      <Section>
        <Heading
          as="h1"
          fontSize={["3xl", "4xl", "5xl"]}
          textAlign="center"
          mb={12}
          color="gray.900"
        >
          We’re experts in Machine Learning and APIs. Why keep it to ourselves?
        </Heading>
        <Grid
          templateColumns={[
            "repeat(auto-fill, 1fr)",
            "reapeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={6}
        >
          {data.allMdx.nodes.map(({ excerpt, frontmatter, id }) => (
            <Card
              key={id}
              heading={frontmatter.title}
              body={excerpt}
              link={`/blog/${frontmatter.slug}/`}
              label={`Read the blog: ${frontmatter.title}.`}
            >
              <Stack isInline align="center" spacing={3} mt={4}>
                <Avatar
                  name={frontmatter.author.name}
                  src={frontmatter.author.avatar.childImageSharp.fluid.src}
                  size="sm"
                />
                <Text>{frontmatter.author.name}</Text>
              </Stack>
            </Card>
          ))}
        </Grid>
      </Section>
    </>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt(pruneLength: 80)
        frontmatter {
          title
          date(formatString: "Do MMM YYYY")
          slug
          author {
            avatar {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            name
          }
        }
      }
    }
  }
`

export default BlogHome
