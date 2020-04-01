import React from "react"
import { Section } from "../organisims/section"
import { Heading } from "@chakra-ui/core"

const BlogPost = ({ title }) => {
  return (
    <Section>
      <Heading
        as="h1"
        fontSize={["3xl", "4xl", "5xl"]}
        textAlign="center"
        mb={12}
        color="gray.900"
      >
        {title || "Hello world"}
      </Heading>
    </Section>
  )
}

export default BlogPost
