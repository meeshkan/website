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
import { SingleSection } from "../components/organisms/singleSection.tsx"
import SEO from "../components/molecules/seo"
import Layout from "../components/templates/layout"

const ContactPage = () => (
  <Layout>
    <SEO
      pageTitle="Contact"
      pageDescription="Get in contact with us!"
      pageUrl="https://meeshkan.com/contact/"
    />
    <SingleSection>
      <Heading
        as="h1"
        fontSize={["3xl", "4xl", "5xl"]}
        textAlign="center"
        mb={12}
        fontWeight={900}
        color="gray.900"
      >
        Get in contact with us!
      </Heading>
      <Box
        as="form"
        action="/success"
        maxW="750px"
        mx="auto"
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
          <Input type="text" name="name" id="name" mb={4} rounded="sm" />
        </FormControl>

        <FormControl isRequired w="100%">
          <FormLabel htmlFor="email" fontWeight={700}>
            Email
          </FormLabel>
          <Input type="email" name="email" id="email" mb={4} rounded="sm" />
        </FormControl>

        <FormControl w="100%">
          <FormLabel htmlFor="website" fontWeight={700}>
            Which company are you from?
          </FormLabel>
          <InputGroup mb={4}>
            <InputLeftAddon children="https://" rounded="sm" />
            <Input
              roundedRight="sm"
              roundedLeft="0"
              type="url"
              name="website"
              id="website"
              placeholder="company-site"
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="message" fontWeight={700}>
            Message
          </FormLabel>
          <Textarea
            id="message"
            name="message"
            resize="none"
            mb={4}
            rounded="sm"
          />
        </FormControl>

        <Button
          mt={4}
          fontWeight={700}
          variantColor="red"
          type="submit"
          rounded="sm"
          isFullWidth
        >
          Submit
        </Button>
      </Box>
    </SingleSection>
  </Layout>
)

export default ContactPage
