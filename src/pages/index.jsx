import React from "react"
import SEO from "../components/molecules/seo"
import { Heading, Box, Input, Button, Text, Grid, Flex } from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"
import { Card } from "../components/atoms/card"
import { Section } from "../components/organisims/section"

const IndexPage = () => (
  <>
    <SEO
      pageTitle="Home"
      pageDescription="Meeshkan has built a Machine Learning Algorithm that helps you break and fix
        your apps."
      pageUrl="https://meeshkan.com/"
    />
    <Section>
      <Heading
        as="h1"
        fontSize={["3xl", "4xl", "5xl"]}
        textAlign="center"
        mb={12}
        color="gray.900"
      >
        We’ve built a Machine Learning Algorithm that helps you break and fix
        your apps.
      </Heading>
      <Flex
        as="form"
        direction={["column", "column", "row"]}
        justify="center"
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
          mr={[0, 0, 4]}
          mb={[4, 4, 0]}
          placeholder="Business email"
          maxW={["full", "full", "400px"]}
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
      </Flex>
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

    <Section heading="Where is the Meeshkan Algorithm used?" anchor="projects">
      <Grid
        templateColumns={[
          "repeat(auto-fill, 1fr)",
          "reapeat(auto-fill, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={6}
      >
        <Card
          heading="Meeshkan"
          link="https://github.com/meeshkan/meeshkan"
          label="Learn more about Meeshkan"
          body="Building OpenAPI specifications from HTTP recordings and a place to
            store the HTTP traffic logs."
        >
          <Text color="blue.500" mt={4} fontWeight={600}>
            Learn more ->
          </Text>
        </Card>

        <Card
          heading="Unmock"
          link="https://github.com/meeshkan/unmock-js"
          body="A library that helps fuzz test external APIs and microservices."
          label="Learn more about Unmock"
        >
          <Text
            color="blue.500"
            mt={4}
            fontWeight={600}
            pos="absolute"
            bottom={6}
            right={6}
            left={6}
          >
            Learn more ->
          </Text>
        </Card>

        <Card
          heading="Jaymock"
          link="https://github.com/meeshkan/jaymock/"
          body="Tiny API mocking microservice for generating fake JSON data."
          label="Learn more about jaymock"
        >
          <Text
            color="blue.500"
            mt={4}
            fontWeight={600}
            pos="absolute"
            bottom={6}
            right={6}
            left={6}
          >
            Learn more ->
          </Text>
        </Card>
      </Grid>
    </Section>

    <Section>
      <Flex
        bg="gray.900"
        direction={["column", "column", "row"]}
        borderRadius="sm"
        justify="center"
        align="center"
        p={6}
      >
        <Text
          color="white"
          fontWeight={900}
          fontSize="xl"
          mr={[0, 0, 6]}
          mb={[6, 6, 0]}
          textAlign="center"
        >
          Think you have a better use case?
        </Text>
        <Button
          as={GatsbyLink}
          to="/contact/"
          variantColor="red"
          fontWeight={900}
          rounded="sm"
        >
          Get in touch
        </Button>
      </Flex>
    </Section>
  </>
)

export default IndexPage
