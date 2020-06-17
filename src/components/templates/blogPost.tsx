import React from "react"
import { SingleSection } from "../organisms/singleSection"
import {
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Stack,
  Button,
  Grid,
  Avatar,
  Text,
  Link as ChakraLink,
  Box,
  DarkMode,
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
          <Box
            maxW="1000px"
            mx="auto"
            backgroundColor="gray.900"
            mt={16}
            p={8}
            rounded="sm"
          >
            <Heading
              as="h3"
              fontSize="3xl"
              textAlign="center"
              fontWeight={900}
              mb={4}
              color="white"
              letterSpacing="0.1px"
            >
              Don’t miss the next post!
            </Heading>
            <Flex
              as="form"
              // @ts-ignore
              action="/success/"
              direction={["column", "column", "row"]}
              justify="center"
              alignItems="flex-end"
              name="newsletter"
              data-netlify="true"
              method="post"
              data-netlify-honeypot="bot-field"
              mb={4}
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="newsletter" />
              <DarkMode>
                <FormControl
                  isRequired
                  mr={[0, 0, 4]}
                  mb={[4, 4, 0]}
                  w="100%"
                  maxW={["full", "full", "400px"]}
                >
                  <FormLabel htmlFor="email" fontWeight={700} color="gray.50">
                    Email
                  </FormLabel>
                  <Input
                    type="email"
                    name="email"
                    aria-label="Enter your business email"
                    borderRadius="sm"
                    placeholder="Your email"
                    fontWeight={500}
                    color="white"
                    borderColor="gray.500"
                  />
                </FormControl>
              </DarkMode>
              <Button
                variantColor="red"
                borderRadius="sm"
                fontWeight={900}
                letterSpacing="wide"
                type="submit"
                w={["100%", "100%", "auto"]}
              >
                Join our mailing list
              </Button>
            </Flex>
            <Text textAlign="center" color="gray.200">
              Absolutely no spam. Unsubscribe anytime.
            </Text>
          </Box>
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
