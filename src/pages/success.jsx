import React from "react"
import SEO from "../components/molecules/seo"
import { Heading, Text, Button, Flex } from "@chakra-ui/core"
import { SingleSection } from "../components/organisims/singleSection"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" pageUrl="https://meeshkan.com/404/" />
    <SingleSection>
      <Heading
        as="h1"
        fontSize={["3xl", "4xl", "5xl"]}
        textAlign="center"
        mb={12}
        fontWeight={900}
        color="gray.900"
      >
        Success!
      </Heading>
      <Text textAlign="center" mb={6}>
        We've recieved your form submission and will be back to you, shortly!
      </Text>
      <Flex justify="center">
        <Button
          as={Link}
          to="/"
          rounded="sm"
          variantColor="red"
          fontWeight={900}
        >
          Go back home
        </Button>
      </Flex>
    </SingleSection>
  </>
)

export default NotFoundPage
