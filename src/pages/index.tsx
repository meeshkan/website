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
  Link as ChakraLink,
} from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import { SingleSection } from "../components/organisms/singleSection"
import { DoubleSection } from "../components/organisms/doubleSection"
import Img from "gatsby-image"
import Layout from "../components/templates/layout"

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
        authorize: file(relativePath: { eq: "githubAuthorize.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        test: file(relativePath: { eq: "testLog.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        resolution: file(relativePath: { eq: "resolutionDialog.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        vulnerability: file(relativePath: { eq: "vulnerability.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        testFailure: file(relativePath: { eq: "testFailureDark.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO
        pageTitle="Home"
        pageDescription="Meeshkan is an automated testing workflow for your project and it's dependencies. We're currently in private beta and accepting applications."
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
            MEESHKAN - PRIVATE ALPHA
          </Badge>
        </Flex>
        <Heading
          as="h1"
          fontSize={["3xl", "4xl", "5xl"]}
          textAlign="center"
          mb={6}
          color="gray.900"
          fontWeight={900}
          letterSpacing="wide"
          lineHeight="short"
        >
          Automatic testing for any app
        </Heading>
        <Text
          textAlign="center"
          fontSize="2xl"
          lineHeight="short"
          mb={6}
          color="gray.700"
        >
          Stop feeling guilty for not writing tests. Meeshkan automatically
          writes, executes, and reports on a collection of tests guaranteed to
          squash bugs and improve your code.
        </Text>
        <Flex
          as="form"
          // @ts-ignore
          action="/success/"
          direction={["column", "column", "row"]}
          justify="center"
          alignItems="flex-end"
          name="request-alpha-1"
          data-netlify="true"
          method="post"
          data-netlify-honeypot="bot-field"
          mb={12}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="request-alpha-1" />
          <FormControl
            isRequired
            mr={[0, 0, 4]}
            mb={[4, 4, 0]}
            w="100%"
            maxW={["full", "full", "400px"]}
          >
            <FormLabel htmlFor="email" fontWeight={700}>
              Email
            </FormLabel>
            <Input
              type="email"
              name="email"
              aria-label="Enter your business email"
              borderRadius="sm"
              placeholder="Your email"
              fontWeight={500}
            />
          </FormControl>
          <Button
            variantColor="red"
            borderRadius="sm"
            fontWeight={700}
            type="submit"
            w={["100%", "100%", "auto"]}
          >
            Request alpha access
          </Button>
        </Flex>
        <Img
          fluid={data.dash.childImageSharp.fluid}
          alt="A dashboard screenshot of the Meeshkan web app."
        />
      </SingleSection>

      <DoubleSection
        heading="90% of the code used by your app isn’t written by your team"
        text="Third-party dependencies are the backbone of modern applications. The lack of testing these APIs is a vulnerability."
      >
        <Img
          fluid={data.map.childImageSharp.fluid}
          alt="A dependency map with logos of several companies showing how your app uses other code bases."
        />
      </DoubleSection>

      <DoubleSection
        reverse={true}
        heading="Increase the coverage that your developers test."
        text="Testing with Meeshkan covers parts of your app that aren’t reached with traditional testing infrastructure. QA devs can now be more confident in their coverage."
      >
        <Img
          fluid={data.coverage.childImageSharp.fluid}
          alt="2 compared bar graphs showing that using Meeshkan covers 95% of your app, and the traditional unit, integration, e2e covers 60%."
        />
      </DoubleSection>

      <SingleSection
        heading="Automate resiliency testing with the Meeshkan web app"
        text="Using targeted, property-based testing and mocking your app’s dependencies - Meeshkan gives you confidence in your app’s resilience."
      >
        <Text textAlign="center" color="gray.500" mb={4}>
          Getting set up is as fast as authorizing GitHub.
        </Text>
        <Flex
          as="form"
          // @ts-ignore
          action="/success/"
          direction={["column", "column", "row"]}
          justify="center"
          alignItems="flex-end"
          name="request-alpha-2"
          data-netlify="true"
          method="post"
          data-netlify-honeypot="bot-field"
          mb={12}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="request-alpha-2" />
          <FormControl
            isRequired
            mr={[0, 0, 4]}
            mb={[4, 4, 0]}
            w="100%"
            maxW={["full", "full", "400px"]}
          >
            <FormLabel htmlFor="email" fontWeight={700}>
              Email
            </FormLabel>
            <Input
              type="email"
              name="email"
              aria-label="Enter your business email"
              borderRadius="sm"
              placeholder="Your email"
              fontWeight={500}
            />
          </FormControl>
          <Button
            variantColor="red"
            borderRadius="sm"
            fontWeight={700}
            type="submit"
            w={["100%", "100%", "auto"]}
          >
            Request alpha access
          </Button>
        </Flex>
      </SingleSection>

      <DoubleSection
        badge="Step 1"
        heading="GitHub authorization"
        text="Authorize GitHub, choose a repo to test, and choose your base configuration. All in less time than it takes to drink a cup of coffee."
      >
        <Img
          fluid={data.authorize.childImageSharp.fluid}
          alt="A screenshot of authorizing Meeshkan with Github"
        />
      </DoubleSection>

      <DoubleSection
        reverse={true}
        badge="Step 2"
        heading="Analyze and test your app"
        text="Confirm the specification we've auto-generated for your service is correct. Then run the targeted property-based tests, automatically generated from that."
      >
        <Img
          fluid={data.test.childImageSharp.fluid}
          alt="An illustration of the test log using pieces of the Meeshkan web app."
        />
      </DoubleSection>

      <DoubleSection
        badge="Step 3"
        heading="Resolve conflicts"
        text="In a guided flow, mock any third-party dependencies that couldn’t be auto-mocked by Meeshkan, such as databases."
      >
        <Img
          fluid={data.resolution.childImageSharp.fluid}
          alt="A screenshot of the resolution dialog from the Meeshkan web app."
        />
      </DoubleSection>

      <DoubleSection
        reverse={true}
        badge="Step 4"
        heading="Fix vulnerabilities in your app"
        text="When tests fail, your configuration can block a branch from merging and direct a developer to the point of failure. In the future, we’ll provide fix suggestions."
      >
        <Img
          fluid={data.vulnerability.childImageSharp.fluid}
          alt="An illustration of a bug found using pieces of the Meeshkan web app."
        />
      </DoubleSection>

      <Box
        as="section"
        bg="gray.900"
        borderRadius="sm"
        my={16}
        mx="auto"
        maxW={1200}
        position="relative"
        px={6}
        py={12}
      >
        <Heading
          as="h2"
          color="white"
          fontSize="3xl"
          fontWeight={900}
          mb={6}
          lineHeight="short"
          letterSpacing="wide"
          ml={[0, 0, 0, 440, 522]}
          textAlign={["center", "center", "center", "end"]}
        >
          How would automated resiliency testing work for your organization?
        </Heading>
        <Flex justify={["center", "center", "center", "flex-end"]}>
          <Button
            as={ChakraLink}
            // @ts-ignore
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: "none", backgroundColor: "red.600" }}
            href="https://meetings.hubspot.com/makenna"
            aria-label="Schedule a demo with the Meeshkan team."
            variantColor="red"
            fontWeight={900}
            rounded="sm"
          >
            Schedule a demo
          </Button>
        </Flex>
        <Box
          maxW="550px"
          pos="absolute"
          left={0}
          right={0}
          bottom={0}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          display={["none", "none", "none", "block"]}
        >
          <Img
            fluid={data.testFailure.childImageSharp.fluid}
            alt="A screenshot of the test failure page in the Meeshkan website."
          />
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage
