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
        testFailure: file(relativePath: { eq: "testFailureLight.png" }) {
          childImageSharp {
            fluid(maxWidth: 458, quality: 100) {
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
          letterSpacing="wide"
          lineHeight="short"
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
          action="/success/"
          direction={["column", "column", "row"]}
          justify="center"
          alignItems="flex-end"
          name="request-beta-1"
          data-netlify="true"
          method="post"
          data-netlify-honeypot="bot-field"
          mb={12}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="request-beta-1" />
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
        <Flex
          as="form"
          action="/success/"
          direction={["column", "column", "row"]}
          justify="center"
          alignItems="flex-end"
          name="request-beta-2"
          data-netlify="true"
          method="post"
          data-netlify-honeypot="bot-field"
          mb={12}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="request-beta-2" />
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
            Request beta access
          </Button>
        </Flex>
      </SingleSection>

      <DoubleSection
        badge="Step 1"
        heading="GitHub authorization"
        text="In less time than it takes to drink a cup of coffee, authorize GitHub, choose a repo to test, and choose your base configuration."
      >
        <Img fluid={data.authorize.childImageSharp.fluid} />
      </DoubleSection>

      <DoubleSection
        reverse={true}
        badge="Step 2"
        heading="Analyze and test your app"
        text="Confirm the spec we've auto-generated for your service is correct. Then run the targeted property-based tests automatically generated from that spec."
      >
        <Img fluid={data.test.childImageSharp.fluid} />
      </DoubleSection>

      <DoubleSection
        badge="Step 3"
        heading="Resolve conflicts"
        text="In a guided flow, mock any third-party dependencies that couldn’t be auto-mocked by Meeshkan, such as databases."
      >
        <Img fluid={data.resolution.childImageSharp.fluid} />
      </DoubleSection>

      <DoubleSection
        reverse={true}
        badge="Step 4"
        heading="Fix vulnerabilities in your app"
        text="When tests fail, your configuration can block a branch from merging and direct a developer to the point of failure. In the future, we’ll provide fix suggestions."
      >
        <Img fluid={data.vulnerability.childImageSharp.fluid} />
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
            as={GatsbyLink}
            to="/contact/"
            variantColor="red"
            fontWeight={900}
            rounded="sm"
          >
            Schedule a demo
          </Button>
        </Flex>
        <Box
          maxW="458px"
          pos="absolute"
          left={0}
          right={0}
          bottom={0}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          display={["none", "none", "none", "block"]}
        >
          <Img fluid={data.testFailure.childImageSharp.fluid} />
        </Box>
      </Box>
    </>
  )
}

export default IndexPage
