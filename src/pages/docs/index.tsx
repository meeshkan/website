import React from "react"
import { Heading, Text, List, ListItem } from "@chakra-ui/core"
import Layout from "../../components/templates/docsLayout"
import { UniversalLink } from "../../components/atoms/UniversalLink"

const DocsHome = () => {
  return (
    <Layout>
      <Heading
        as="h1"
        fontSize={["3xl", "4xl", "5xl"]}
        textAlign="center"
        mb={12}
        color="gray.900"
        fontWeight={900}
      >
        Meeshkan Documentation
      </Heading>
      <Text mt={4} lineHeight="tall" fontWeight={500}>
        Hey there 👋 this is the beginning of the Meeshkan docs. If there is
        anything you're unsure of, you can reach out to our support,{" "}
        <UniversalLink to="/contact/" color="blue.500">
          here
        </UniversalLink>
        .
      </Text>
      <Text mt={4} lineHeight="tall" fontWeight={600}>
        Some useful links to get started:
      </Text>
      <List styleType="disc" my={4} spacing={2}>
        <ListItem>
          <UniversalLink
            to="https://github.com/apps/meeshkan/installations/new"
            color="blue.500"
          >
            Github installation
          </UniversalLink>
        </ListItem>
        <ListItem>
          <UniversalLink
            to="/docs/introduction/#what-happens-after-installation"
            color="blue.500"
          >
            What happens when I install?
          </UniversalLink>
        </ListItem>
      </List>
    </Layout>
  )
}

export default DocsHome
