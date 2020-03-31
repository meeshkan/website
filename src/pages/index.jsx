import React from "react"
import SEO from "../components/seo"
import {
  Heading,
  Box,
  Input,
  Button,
  Text,
  Link,
  Grid,
  Flex,
} from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"
import { Card } from "../components/molecules/card"
import { Section } from "../components/organisims/section"

const IndexPage = () => (
  <>
    <SEO pageTitle="Home" />
    <Section>
      <Heading
        as="h1"
        fontSize={["3xl", "4xl", "5xl"]}
        textAlign="center"
        mb={12}
        color="gray.900"
      >
        We’ve built a Machine Learning Algorithim that helps you break and fix
        your apps.
      </Heading>
      <form
        style={{ display: "flex", justifyContent: "center" }}
        name="Schedule Demo Home"
        data-netlify="true"
        method="post"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="schedule-demo-home" />
        <Input
          type="email"
          aria-label="Enter your business email"
          borderRadius="sm"
          maxW="400px"
          mr={4}
          placeholder="Business email"
          isRequired
        />
        <Button
          variantColor="red"
          borderRadius="sm"
          fontWeight={900}
          type="submit"
        >
          Schedule a demo
        </Button>
      </form>
    </Section>

    <Section heading="What does Meeshkan do?">
      <Grid
        templateColumns={[
          "repeat(auto-fill, 1fr)",
          "reapeat(auto-fill, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={6}
      >
        <Box>
          <Heading
            as="h3"
            color="gray.900"
            fontSize="2xl"
            fontWeight={900}
            mb={4}
          >
            1. Record
          </Heading>
          <Text>
            First, collect data from recorded server traffic and/or OpenAPI
            specs.
          </Text>
        </Box>
        <Box>
          <Heading
            as="h3"
            color="gray.900"
            fontSize="2xl"
            fontWeight={900}
            mb={4}
          >
            2. Build
          </Heading>
          <Text>
            Then, build a schema that unifies these various data sources.
          </Text>
        </Box>
        <Box>
          <Heading
            as="h3"
            color="gray.900"
            fontSize="2xl"
            fontWeight={900}
            mb={4}
          >
            3. Mock
          </Heading>
          <Text>
            Finally, use this schema to create a mock server of an API.
          </Text>
        </Box>
      </Grid>
    </Section>

    <Section heading="Where is the Meeshkan Algorithim used?">
      <Grid
        templateColumns={[
          "repeat(auto-fill, 1fr)",
          "reapeat(auto-fill, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={6}
      >
        <Card heading="Meeshkan" link="/meeshkan/">
          <Text mb={4}>
            Building OpenAPI specifications from HTTP recordings and a place to
            store the HTTP traffic logs.
          </Text>
          <Link
            as={GatsbyLink}
            to="/meeshkan/"
            aria-label="Learn more about Meeshkan"
            aria-label="Learn more about Meeshkan"
            color="blue.500"
            fontWeight={600}
          >
            Learn more ->
          </Link>
        </Card>
        <Card heading="Unmock" link="/unmock/">
          <Text mb={4}>
            Unmock helps you test API integrations by creating effective
            simulations of external APIs and microservices.
          </Text>
          <Link as={GatsbyLink} to="/unmock/" aria-label="Learn more about Unmock" color="blue.500" fontWeight={600}>
            Learn more ->
          </Link>
        </Card>
        <Card heading="Jaymock" link="/jaymock/">
          <Text mb={4}>
            Tiny API mocking microservice for generating fake JSON data.
          </Text>
          <Link
            as={GatsbyLink}
            to="/jaymock/"
            aria-label="Learn more about jaymock"
            aria-label="Learn more about jaymock"
            color="blue.500"
            fontWeight={600}
          >
            Learn more ->
          </Link>
        </Card>
      </Grid>
    </Section>

    <Section>
      <Flex
        bg="gray.900"
        borderRadius="sm"
        justify="center"
        align="center"
        p={6}
      >
        <Text color="white" fontWeight={900} fontSize="xl" mr={6}>
          Think you have a better use-case?
        </Text>
        <Button
          as={GatsbyLink}
          to="/contact/"
          variantColor="red"
          fontWeight={900}
        >
          Get in touch
        </Button>
      </Flex>
    </Section>
  </>
)

export default IndexPage
