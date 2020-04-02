import React from "react"
import { Section } from "../organisims/section"
import { Heading, Stack, Button, Flex, Avatar, Text } from "@chakra-ui/core"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import mdxComponents from "../organisims/mdxComponents"
import { Link } from "gatsby"

const BlogPost = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx
  const { previous, next } = pageContext
  return (
    <MDXProvider components={mdxComponents}>
      <Section>
        <Heading
          as="h1"
          fontSize={["3xl", "4xl", "5xl"]}
          textAlign="center"
          mb={12}
          color="gray.900"
        >
          {frontmatter.title}
        </Heading>
        <Flex
          align="center"
          justify="space-between"
          mb={6}
          maxW="500px"
          mx="auto"
        >
          <Stack isInline align="center" spacing={4}>
            <Avatar
              name={frontmatter.author.name}
              src={frontmatter.author.avatar.childImageSharp.fluid.src}
              size="sm"
            />
            <Text fontWeight={700}>{frontmatter.author.name}</Text>
          </Stack>

          <Text>{frontmatter.date}</Text>
        </Flex>
        <MDXRenderer>{body}</MDXRenderer>

        <Stack isInline spacing={6} justify="center" mt={12} fontWeight="700">
          {next !== null ? (
            <Button
              as={Link}
              to={`/blog/${next.frontmatter.slug}/`}
              aria-label={`Read the blog: ${next.frontmatter.title}.`}
              leftIcon="arrow-back"
            >
              Next post
            </Button>
          ) : (
            <Button isDisabled leftIcon="arrow-back">
              Next post
            </Button>
          )}

          {previous !== null ? (
            <Button
              as={Link}
              to={`/blog/${previous.frontmatter.slug}/`}
              aria-label={`Read the blog: ${previous.frontmatter.title}.`}
              rightIcon="arrow-forward"
            >
              Previous post
            </Button>
          ) : (
            <Button isDisabled rightIcon="arrow-forward">
              Previous post
            </Button>
          )}
        </Stack>
      </Section>
    </MDXProvider>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "Do MMM YYYY")
        author {
          avatar {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          name
          bio
          authorLink
        }
      }
    }
  }
`

export default BlogPost
