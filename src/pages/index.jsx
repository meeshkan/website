import React from "react"
import SEO from "../components/molecules/seo"
import {
  Heading,
  Input,
  Button,
  Text,
  Flex,
  Badge,
  FormControl,
  FormLabel,
  Box,
} from "@chakra-ui/core"
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby"
import { SingleSection } from "../components/organisims/singleSection"
import { DoubleSection } from "../components/organisims/doubleSection"
import Img from "gatsby-image"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        dash: file(relativePath: { eq: "dashboardDark.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        map: file(relativePath: { eq: "dependencyMap.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        coverage: file(relativePath: { eq: "coverage.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <>
      <SEO
        pageTitle="Home"
        pageDescription="Meeshkan has built a Machine Learning Algorithm that helps you break and fix
        your apps."
        pageUrl="https://meeshkan.com/"
      />
      <SingleSection>
        <Flex justify="center" mb={3}>
          <Badge
            variantColor="cyan"
            letterSpacing="widest"
            fontSize="14px"
            fontWeight={600}
            rounded="sm"
            padding="0px 4px"
            minH="auto"
          >
            MEESHKAN - PRIVATE BETA
          </Badge>
        </Flex>
        <Heading
          as="h1"
          fontSize={["3xl", "4xl", "5xl"]}
          textAlign="center"
          mb={6}
          color="gray.900"
          fontWeight={900}
        >
          Automatic testing for any app.
        </Heading>
        <Text
          textAlign="center"
          fontSize="2xl"
          lineHeight="short"
          mb={6}
          color="gray.700"
        >
          Stop feeling guilty for not writing tests. Meeshkan automatically
          writes, executes, and reports on a collection of highly impactful
          tests that are guaranteed to squash bugs and improve your code.
        </Text>
        <Flex
          as="form"
          action="/success"
          direction={["column", "column", "row"]}
          justify="center"
          name="request-beta-1"
          data-netlify="true"
          method="post"
          data-netlify-honeypot="bot-field"
          mb={12}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="request-beta-1" />
          <Input
            type="email"
            name="email"
            aria-label="Enter your business email"
            borderRadius="sm"
            mr={[0, 0, 4]}
            mb={[4, 4, 0]}
            placeholder="Your email"
            fontWeight={500}
            maxW={["full", "full", "400px"]}
            isRequired
          />
          <Button
            variantColor="red"
            borderRadius="sm"
            fontWeight={900}
            type="submit"
          >
            Request beta access
          </Button>
        </Flex>
        <Img fluid={data.dash.childImageSharp.fluid} />
      </SingleSection>

      <DoubleSection
        heading="90% of the code used by your app isn’t written by your team"
        text="3rd party dependencies are the backbone of modern applications. The lack of testing these APIs like the rest of your app is a vulnerability."
      >
        <Img fluid={data.map.childImageSharp.fluid} />
      </DoubleSection>

      <DoubleSection
        reverse={true}
        heading="Increase the coverage that your QA devs test."
        text="Testing with Meeshkan reaches parts of your app that aren’t reached with traditional testing infrastructure. QA devs can now be more confident in their coverage."
      >
        <Img fluid={data.coverage.childImageSharp.fluid} />
      </DoubleSection>

      <SingleSection
        heading="Automate resiliency testing with the Meeshkan web app"
        text="Using targeted, stateful, model-based property-based testing, and mocking your app’s dependencies - Meeshkan gives you confidence in your app’s resilience."
      >
        <Text textAlign="center" color="gray.500" mb={4}>
          Getting set up is as fast as authorizing GitHub.
        </Text>
        <Box
          as="form"
          action="/success"
          direction={["column", "column", "row"]}
          justify="center"
          name="request-beta-2"
          data-netlify="true"
          method="post"
          data-netlify-honeypot="bot-field"
          mb={12}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="request-beta-2" />
          <FormControl isRequired>
            <FormLabel htmlFor="email" fontWeight={700}>
              Email
            </FormLabel>
            <Input
              type="email"
              name="email"
              aria-label="Enter your business email"
              borderRadius="sm"
              mr={[0, 0, 4]}
              mb={[4, 4, 0]}
              placeholder="Your email"
              fontWeight={500}
              maxW={["full", "full", "400px"]}
            />
          </FormControl>
          <Button
            variantColor="red"
            borderRadius="sm"
            fontWeight={700}
            type="submit"
          >
            Request beta access
          </Button>
        </Box>
      </SingleSection>

      <SingleSection>
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
      </SingleSection>
    </>
  )
}

export default IndexPage
