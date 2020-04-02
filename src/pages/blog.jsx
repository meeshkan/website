import React from "react"
import { Heading } from "@chakra-ui/core"
import { Section } from "../components/organisims/section"
import { Card } from "../components/molecules/card"

const BlogHome = () => {
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
      </Section>
      {/* <Section>
        {data.allMdx.nodes.map(({ excerpt, frontmatter }) => (
          <Card>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
          </Card>
        ))}
      </Section> */}
    </>
  )
}

export default BlogHome
