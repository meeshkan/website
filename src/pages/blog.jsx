import React from "react"
import { Heading, Grid, Avatar, AvatarGroup, Text, Flex } from "@chakra-ui/core"
import { SingleSection } from "../components/organisims/singleSection"
import { graphql } from "gatsby"
import { Card } from "../components/atoms/card"
import SEO from "../components/molecules/seo"

const BlogHome = ({ data }) => {
  return (
    <>
      <SEO
        pageTitle="Blog"
        pageDescription="We’re experts in Machine Learning and APIs. Why keep it to ourselves?"
        pageUrl="https://meeshkan.com/blog/"
      />
      <SingleSection>
        <Heading
          as="h1"
          fontSize={["3xl", "4xl", "5xl"]}
          textAlign="center"
          mb={12}
          color="gray.900"
          fontWeight={900}
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
          {data.allMdx.nodes.map(({ frontmatter, id }) => (
            <Card
              key={id}
              heading={frontmatter.title}
              body={frontmatter.description}
              link={`/blog/${frontmatter.slug}/`}
              label={`Read the blog: ${frontmatter.title}.`}
            >
              <Flex
                align="center"
                justify="space-between"
                mt={4}
                mx="auto"
                pos="absolute"
                bottom={4}
                right={6}
                left={6}
              >
                {frontmatter.authors.length >= 1 ? (
                  <AvatarGroup max={2} size="sm">
                    {frontmatter.authors.map(author => (
                      <Avatar
                        name={author.name}
                        src={author.avatar.childImageSharp.fluid.src}
                        size="sm"
                      />
                    ))}
                  </AvatarGroup>
                ) : (
                  <Avatar
                    name={frontmatter.authors[0].name}
                    src={
                      frontmatter.authors[0].avatar.childImageSharp.fluid.src
                    }
                    size="sm"
                  />
                )}

                <Text>{frontmatter.date}</Text>
              </Flex>
            </Card>
          ))}
        </Grid>
      </SingleSection>
    </>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          description
          date(formatString: "Do MMM")
          slug
          authors {
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
