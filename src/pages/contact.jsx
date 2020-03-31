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

const ContactPage = () => {
  return (
    <Box maxW="750px" mx="auto" py={16} px={[4, 4, 8, 12]}>
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
          <Input
            type="name"
            name="name"
            aria-describedby="name-helper-text"
            size="lg"
            mb={4}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            name="email"
            aria-describedby="email-helper-text"
            size="lg"
            mb={4}
            is
          />
        </Box>
        <Box>
          <FormLabel>Message</FormLabel>
          <Textarea
            type="message"
            name="message"
            resize="none"
            size="lg"
            mb={4}
          />
        </Box>
        <Box>
          <FormLabel>Which company are you from?</FormLabel>
          <InputGroup mb={8} size="lg">
            <InputLeftAddon children="https://" />
            <Input
              roundedRight="md"
              roundedLeft="0"
              type="webiste"
              name="website"
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
    </Box>
  )
}

export default ContactPage
