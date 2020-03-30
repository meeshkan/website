import React from "react"
import SEO from "../components/seo"
import { Heading, Box, Input, Button } from "@chakra-ui/core"

const IndexPage = () => (
  <>
    <SEO pageTitle="Home" />
    <Box maxW="1200px" mx="auto" pt={16}>
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
  </>
)

export default IndexPage
