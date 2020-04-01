import React from "react"
import { Section } from "../organisims/section"
import { Heading } from "@chakra-ui/core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

const BlogPost = ({ data /*pageContext*/ }) => {
  const { frontmatter, body } = data.mdx
  // const { previous, next } = pageContext
  return (
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
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </Section>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`

export default BlogPost
