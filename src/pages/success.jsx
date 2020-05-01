import React from "react"
import SEO from "../components/molecules/seo"
import { Heading, Text, Button, Flex } from "@chakra-ui/core"
import { SingleSection } from "../components/organisms/singleSection.tsx"
import { Link } from "gatsby"
import Layout from "../components/templates/layout"

const SuccessPage = () => (
  <Layout>
    <SEO title="Success" pageUrl="https://meeshkan.com/success/" />
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
  </Layout>
)

export default SuccessPage
