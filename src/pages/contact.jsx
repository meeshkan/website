import React from "react"
import {
  Heading,
  FormLabel,
  Input,
  Textarea,
  InputGroup,
  InputLeftAddon,
  Button,
  Box,
} from "@chakra-ui/core"
import { Section } from "../components/organisims/section"

export const ContactPage = () => (
  <Section>
    <Heading
      as="h1"
      lineHeight="shorter"
      fontWeight={900}
      textAlign="center"
      mb={8}
    >
      Get in contact with us!
    </Heading>
    <form
      name="contact"
      data-netlify="true"
      method="post"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <Box>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input type="text" id="name" size="lg" mb={4} />
      </Box>
      <Box>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input type="email" id="email" size="lg" mb={4} is />
      </Box>
      <Box>
        <FormLabel htmlFor="message">Message</FormLabel>
        <Textarea id="message" resize="none" size="lg" mb={4} />
      </Box>
      <Box>
        <FormLabel htmlFor="website">Which company are you from?</FormLabel>
        <InputGroup mb={8} size="lg">
          <InputLeftAddon children="https://" />
          <Input
            roundedRight="md"
            roundedLeft="0"
            type="url"
            id="website"
            placeholder="company-site"
          />
        </InputGroup>
      </Box>
      <Button
        size="lg"
        fontWeight={600}
        variantColor="red"
        type="submit"
        isFullWidth
      >
        Submit
      </Button>
    </form>
  </Section>
)
