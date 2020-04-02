import React from "react"
import {
  Heading,
  FormLabel,
  Input,
  Textarea,
  InputGroup,
  InputLeftAddon,
  Button,
  FormControl,
  Box,
} from "@chakra-ui/core"
import { Section } from "../components/organisims/section"

const ContactPage = () => (
  <Section>
    <Heading
      as="h1"
      fontSize={["3xl", "4xl", "5xl"]}
      textAlign="center"
      mb={12}
      color="gray.900"
    >
      Get in contact with us!
    </Heading>
    <Box maxW="750px" mx="auto">
      <form
        name="contact"
        data-netlify="true"
        method="post"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />

        <FormControl isRequired>
          <FormLabel htmlFor="name" fontWeight={700}>
            Name
          </FormLabel>
          <Input type="text" id="name" mb={4} />
        </FormControl>

        <FormControl isRequired w="100%">
          <FormLabel htmlFor="email" fontWeight={700}>
            Email
          </FormLabel>
          <Input type="email" id="email" mb={4} />
        </FormControl>

        <FormControl w="100%">
          <FormLabel htmlFor="website" fontWeight={700}>
            Which company are you from?
          </FormLabel>
          <InputGroup mb={4}>
            <InputLeftAddon children="https://" />
            <Input
              roundedRight="md"
              roundedLeft="0"
              type="url"
              id="website"
              placeholder="company-site"
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="message" fontWeight={700}>
            Message
          </FormLabel>
          <Textarea id="message" resize="none" mb={4} />
        </FormControl>

        <Button
          mt={4}
          fontWeight={700}
          variantColor="red"
          type="submit"
          isFullWidth
        >
          Submit
        </Button>
      </form>
    </Box>
  </Section>
)

export default ContactPage
