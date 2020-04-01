import React from "react"
import { Heading } from "@chakra-ui/core"
import { Section } from "../components/organisims/section"

const BlogHome = () => (
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
  </>
)

export default BlogHome
