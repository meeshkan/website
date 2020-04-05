import React from "react"
import { Section } from "../organisims/section"
import { Heading, Stack, Button, Flex, Avatar, Text } from "@chakra-ui/core"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import mdxComponents from "../molecules/mdxComponents"
import { Link } from "gatsby"
import SEO from "../molecules/seo"

const BlogPost = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx
  const { previous, next } = pageContext
  return (
    <MDXProvider components={mdxComponents}>
      <SEO
        pageTitle={frontmatter.title}
        pageDescription={frontmatter.excerpt}
        pageUrl={`/blog/${frontmatter.slug}/`}
      />
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
          maxW={448}
          mb={6}
          mx="auto"
        >
          {frontmatter.authors.map(author => (
            <Stack isInline align="center" spacing={4}>
              <Avatar
                name={author.name}
                src={author.avatar.childImageSharp.fluid.src}
                size="sm"
              />
              <Text fontWeight={700}>{author.name}</Text>
            </Stack>
          ))}
        </Flex>
        <Text textAlign="center" color="red.500" fontWeight={700} mb={6}>
          {frontmatter.date}
        </Text>
        <MDXRenderer>{body}</MDXRenderer>

        <Stack isInline spacing={6} justify="center" mt={12} fontWeight="700">
          {next !== null ? (
            <Button
              as={Link}
              to={`/blog/${next.frontmatter.slug}/`}
              aria-label={`Read the blog: ${next.frontmatter.title}.`}
              leftIcon="arrow-back"
            >
              Newer post
            </Button>
          ) : (
            <Button isDisabled leftIcon="arrow-back">
              Older post
            </Button>
          )}

          {previous !== null ? (
            <Button
              as={Link}
              to={`/blog/${previous.frontmatter.slug}/`}
              aria-label={`Read the blog: ${previous.frontmatter.title}.`}
              rightIcon="arrow-forward"
            >
              Newer post
            </Button>
          ) : (
            <Button isDisabled rightIcon="arrow-forward">
              Older post
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
      excerpt(pruneLength: 80)
      frontmatter {
        title
        date(formatString: "Do MMM YYYY")
        authors {
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
