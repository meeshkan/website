import React from "react"
import { SingleSection } from "../organisms/singleSection"
import {
  Heading,
  Stack,
  Button,
  Grid,
  Avatar,
  Text,
  Link as ChakraLink,
  Box,
} from "@chakra-ui/core"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import mdxComponents from "../molecules/mdxComponents"
import { Link } from "gatsby"
import SEO from "../molecules/seo"
import Layout from "./layout"

type BlogPostProps = {
  data: any // type of object errors 🤔
  pageContext: any // type of object errors 🤔
}

const BlogPost = ({ data, pageContext }: BlogPostProps) => {
  const { frontmatter, body } = data.mdx
  const { previous, next } = pageContext
  return (
    <Layout>
      <MDXProvider components={mdxComponents}>
        <SEO
          pageTitle={frontmatter.title}
          pageDescription={frontmatter.description}
          pageUrl={
            frontmatter.canonicalURL
              ? `${frontmatter.canonicalURL}`
              : `https://meeshkan.com/blog/${frontmatter.slug}/`
          }
          pageImage={frontmatter.pageImage}
        />
        <SingleSection>
          <Heading
            as="h1"
            fontSize={["3xl", "4xl", "5xl"]}
            textAlign="center"
            mb={12}
            color="gray.900"
          >
            {frontmatter.title}
          </Heading>
          <Grid
            display={["grid", "grid", "flex", "flex"]}
            justifyContent="center"
            gap={6}
            maxW={600}
            mb={6}
            mx="auto"
          >
            {frontmatter.authors.length > 1 ? (
              frontmatter.authors.map(author => (
                <Stack isInline align="center" spacing={4} mx={4}>
                  <Avatar
                    name={author.name}
                    src={author.avatar.childImageSharp.fluid.src}
                    size="md"
                  />
                  <Box>
                    <Text
                      as={ChakraLink}
                      href={author.authorLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      fontWeight={700}
                    >
                      {author.name}
                    </Text>
                    <Text>{author.bio}</Text>
                  </Box>
                </Stack>
              ))
            ) : (
              <Stack isInline align="center" justify="center" spacing={4}>
                <Avatar
                  name={frontmatter.authors[0].name}
                  src={frontmatter.authors[0].avatar.childImageSharp.fluid.src}
                  size="md"
                />
                <Box>
                  <Text
                    as={ChakraLink}
                    // @ts-ignore
                    href={frontmatter.authors[0].authorLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    fontWeight={700}
                  >
                    {frontmatter.authors[0].name}
                  </Text>
                  <Text>{frontmatter.authors[0].bio}</Text>
                </Box>
              </Stack>
            )}
          </Grid>
          <Text textAlign="center" color="red.500" fontWeight={700} mb={6}>
            {frontmatter.date}
          </Text>
          <MDXRenderer>{body}</MDXRenderer>

          <Stack isInline spacing={6} justify="center" mt={12} fontWeight="700">
            {next !== null ? (
              <Button
                as={Link}
                // @ts-ignore
                to={`/blog/${next.frontmatter.slug}/`}
                aria-label={`Read the blog: ${next.frontmatter.title}.`}
                leftIcon="arrow-back"
              >
                Newer post
              </Button>
            ) : (
              <Button isDisabled leftIcon="arrow-back">
                Newer post
              </Button>
            )}

            {previous !== null ? (
              <Button
                as={Link}
                // @ts-ignore
                to={`/blog/${previous.frontmatter.slug}/`}
                aria-label={`Read the blog: ${previous.frontmatter.title}.`}
                rightIcon="arrow-forward"
              >
                Older post
              </Button>
            ) : (
              <Button isDisabled rightIcon="arrow-forward">
                Older post
              </Button>
            )}
          </Stack>
        </SingleSection>
      </MDXProvider>
    </Layout>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      excerpt(pruneLength: 80)
      frontmatter {
        title
        description
        date(formatString: "Do MMM YYYY")
        pageImage
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
        canonicalURL
        slug
      }
    }
  }
`

export default BlogPost
