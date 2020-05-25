import React from "react"
import SEO from "../components/molecules/seo"
import { Heading, Text, Button, Flex } from "@chakra-ui/core"
import { SingleSection } from "../components/organisms/singleSection"
import { Link } from "gatsby"
import Layout from "../components/templates/layout"

const NotFoundPage = () => (
  <Layout>
    <SEO
      pageTitle="404: Not found"
      pageDescription="This is a path that doesn't exist on the Meeshkan website. Sorry!"
      pageUrl="https://meeshkan.com/404/"
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
        Not found.
      </Heading>
      <Text textAlign="center" mb={6}>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Text>
      <Flex justify="center">
        <Button
          as={Link}
          // @ts-ignore
          to="/"
          rounded="sm"
          variantColor="red"
          fontWeight={900}
        >
          Go back home
        </Button>
      </Flex>
    </SingleSection>
  </Layout>
)

export default NotFoundPage
