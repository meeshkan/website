import React from "react"
import SEO from "../components/seo"
import { Heading, Box, Input, Button, Stack, Text, Link } from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"

const IndexPage = () => (
  <>
    <SEO pageTitle="Home" />
    <Box maxW="1200px" mx="auto" mt={16} mb={12}>
      <Heading
        as="h1"
        fontSize="5xl"
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
          name="email"
          aria-describedby="email-helper-text"
          borderRadius="sm"
          maxW="400px"
          mr={4}
          placeholder="Business email"
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
    </Box>

    <Box maxW="1200px" mx="auto" py={12}>
      <Heading
        as="h2"
        color="gray.900"
        fontSize="3xl"
        fontWeight={900}
        textAlign="center"
        mb={12}
      >
        What does Meeshkan do?
      </Heading>
      <Stack isInline spacing={6}>
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
      </Stack>
    </Box>
    <Box maxW="1200px" mx="auto" py={12}>
      <Heading
        as="h2"
        color="gray.900"
        fontSize="3xl"
        fontWeight={900}
        textAlign="center"
        mb={12}
      >
        Where is the Meeshkan Algorithim used?
      </Heading>
      <Stack
        isInline
        spacing={6}
        backgroundColor="gray.50"
        borderRadius="sm"
        p={4}
      >
        <Box>
          <Heading
            as="h3"
            color="gray.900"
            fontSize="2xl"
            fontWeight={900}
            mb={4}
          >
            Meeshkan
          </Heading>
          <Text mb={4}>
            Building OpenAPI specifications from HTTP recordings and a place to
            store the HTTP traffic logs.
          </Text>
          <Link
            as={GatsbyLink}
            to="/meeshkan/"
            color="blue.500"
            fontWeight={600}
          >
            Learn more ->
          </Link>
        </Box>
        <Box>
          <Heading
            as="h3"
            color="gray.900"
            fontSize="2xl"
            fontWeight={900}
            mb={4}
          >
            Unmock
          </Heading>
          <Text mb={4}>
            Unmock helps you test API integrations by creating effective
            simulations of external APIs and microservices.
          </Text>
          <Link as={GatsbyLink} to="/unmock/" color="blue.500" fontWeight={600}>
            Learn more ->
          </Link>
        </Box>
        <Box>
          <Heading
            as="h3"
            color="gray.900"
            fontSize="2xl"
            fontWeight={900}
            mb={4}
          >
            Jaymock
          </Heading>
          <Text mb={4}>
            Tiny API mocking microservice for generating fake JSON data.
          </Text>
          <Link
            as={GatsbyLink}
            to="/jaymock/"
            color="blue.500"
            fontWeight={600}
          >
            Learn more ->
          </Link>
        </Box>
      </Stack>
    </Box>
  </>
)

export default IndexPage
