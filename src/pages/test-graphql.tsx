import React from "react"
import {
  Box,
  Heading,
  Text,
  Stack,
  Input,
  Button,
  DarkMode,
  SimpleGrid,
  Code,
  Icon,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/core"
import SEO from "../components/molecules/seo"
import Layout from "../components/templates/layout"
import { SingleSection } from "../components/organisms/singleSection"
import { DoubleSection } from "../components/organisms/doubleSection"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const TestGraphqlPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        authorize: file(relativePath: { eq: "githubAuthorize.png" }) {
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
        test: file(relativePath: { eq: "testLog.png" }) {
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
    <Layout>
      <SEO
        pageTitle="Contact"
        pageDescription="Get in contact with us!"
        pageUrl="https://meeshkan.com/contact/"
      />
      {/* put your code */}
      <SingleSection>
        <Stack isInline justify="space-between" spacing={64} mt={12}>
          <Box maxW="750px">
            <Heading
              as="h1"
              fontSize={["3xl", "4xl", "5xl"]}
              mb={6}
              color="gray.900"
              fontWeight={900}
              letterSpacing="wide"
              lineHeight="short"
            >
              Your search for dynamic GraphQL testing ends here.
            </Heading>
            <Text fontSize={["lg", "xl", "2xl"]} lineHeight="short">
              Meeshkan automatically writes, executes, and reports on a
              collection of user-mimicking tests, guaranteed to give you
              confidence in critical flows.
            </Text>
          </Box>
          <Box backgroundColor="gray.50" w="186px" h="268px" />
        </Stack>
      </SingleSection>
      <Stack justifyContent="center">
        <Heading
          as="h2"
          color="gray.900"
          fontSize="2xl"
          fontWeight={900}
          mb={4}
          letterSpacing="wide"
          lineHeight="short"
          textAlign="center"
          color="gray.700"
        >
          Try it for yourself.
        </Heading>
        <Box
          backgroundColor="gray.800"
          w="600px"
          p={4}
          borderRadius="5px"
          mx="auto"
          mt={4}
        >
          <Stack isInline>
            <DarkMode>
              <Input
                placeholder="Your GraphQL Endpoint"
                size="md"
                mr={8}
                maxW="383px"
                color="white"
              />
            </DarkMode>
            <Button
              aria-label="Test Endpoint"
              variantColor="red"
              borderRadius="sm"
              fontWeight={900}
              w={["100%", "100%", "auto"]}
            >
              Test Endpoint
            </Button>
          </Stack>
        </Box>
        <Text
          color="gray.700"
          fontStyle="italic"
          maxW="500px"
          textAlign="center"
          mx="auto"
          mt={4}
        >
          Enter your GraphQL endpoint. We’ll return dynamically generated tests
          just for you.
        </Text>
      </Stack>

      <DoubleSection
        heading="A GraphQL testing tool that is dynamic to Schema changes"
        text="Someone makes a change to your GraphQL schema, the existing tests become outdated and now you're stuck rewriting your tests. We know because we've been there. Meeshkan uses GraphQL introspection to dynamically generate tests based on your schema."
      >
        <Box backgroundColor="gray.50" h="266px" w="400px" />
      </DoubleSection>

      <DoubleSection
        reverse={true}
        heading="Built with the GraphQL community in mind."
        text="Meeshkan works particularly well if you’ve built your GraphQL API from scratch using tools like Prisma or Apollo. But it’s not limited to that. No matter how many tests you already have or what language your app is written in - Meeshkan fits right into your existing stack."
      >
        <Box backgroundColor="gray.50" h="266px" w="400px" />
      </DoubleSection>

      <SingleSection heading="How does Meeshkan work?">
        <SimpleGrid columns={[1, 1, 3]} gridGap={8} flexWrap="wrap">
          <Box>
            <Img
              fluid={data.authorize.childImageSharp.fluid}
              alt="A screenshot of authorizing Meeshkan with Github"
            />
            <Code
              variantColor="cyan"
              fontSize="14px"
              fontWeight={600}
              rounded="sm"
              padding="0px 4px"
              minH="auto"
              mb={2}
              mt={4}
            >
              Step 1
            </Code>
            <Heading
              as="h2"
              color="gray.900"
              fontSize="2xl"
              fontWeight={900}
              mb={4}
              letterSpacing="wide"
              lineHeight="short"
            >
              GitHub authorization via our webapp
            </Heading>
            <Text fontSize={["md", "md", "lg"]} lineHeight="tall">
              Authorize GitHub, choose a repository to test, and set up your
              base configuration. All in less time than it takes to drink a cup
              of coffee.
            </Text>
          </Box>
          <Box>
            <Img
              fluid={data.test.childImageSharp.fluid}
              alt="An illustration of the test log using pieces of the Meeshkan web app."
            />
            <Code
              variantColor="cyan"
              fontSize="14px"
              fontWeight={600}
              rounded="sm"
              padding="0px 4px"
              minH="auto"
              mb={2}
              mt={4}
            >
              Step 2
            </Code>
            <Heading
              as="h2"
              color="gray.900"
              fontSize="2xl"
              fontWeight={900}
              mb={4}
              letterSpacing="wide"
              lineHeight="short"
            >
              Continuous testing with every commit
            </Heading>
            <Text fontSize={["md", "md", "lg"]} lineHeight="tall">
              Meeshkan naturally fits into your existing workflow by testing as
              you push commits to GitHub. Imagine Netlify, but for automated
              testing.
            </Text>
          </Box>
          <Box>
            <Img
              fluid={data.vulnerability.childImageSharp.fluid}
              alt="An illustration of a bug found using pieces of the Meeshkan web app."
            />
            <Code
              variantColor="cyan"
              fontSize="14px"
              fontWeight={600}
              rounded="sm"
              padding="0px 4px"
              minH="auto"
              mb={2}
              mt={4}
            >
              Step 3
            </Code>
            <Heading
              as="h2"
              color="gray.900"
              fontSize="2xl"
              fontWeight={900}
              mb={4}
              letterSpacing="wide"
              lineHeight="short"
            >
              Fix vulnerabilities in your app
            </Heading>
            <Text fontSize={["md", "md", "lg"]} lineHeight="tall">
              When tests fail, your configuration can block a branch from
              merging and direct you to the point of failure. In the future,
              we’ll provide fix suggestions.
            </Text>
          </Box>
        </SimpleGrid>
      </SingleSection>
      <SingleSection>
        <Box maxW="750px" mx="auto">
          <Heading
            fontFamily="Inter"
            fontWeight="900"
            fontSize="40px"
            lineHeight="140%"
            textAlign="center"
            letterSpacing="0.05em"
          >
            The best of automated testing tools - plus a little more.
          </Heading>
          <Box maxW="546px" mx="auto">
            <Stack isInline mt={6} alignItems="center" spacing={4}>
              <Icon name="checkmark" color="cyan.500" size="24px" />
              <Text fontWeight={500} color="gray.700">
                Weekly audit reports available in the Meeshkan webapp.
              </Text>
            </Stack>
            <Stack isInline mt={6} alignItems="center" spacing={4}>
              <Icon name="checkmark" color="cyan.500" size="24px" />
              <Text fontWeight={500} color="gray.700">
                Visualize auth flows and control who has access to certain
                queries.
              </Text>
            </Stack>
            <Stack isInline mt={6} alignItems="center" spacing={4}>
              <Icon name="checkmark" color="cyan.500" size="24px" />
              <Text fontWeight={500} color="gray.700">
                Uncovered bugs sorted by priority.
              </Text>
            </Stack>
          </Box>
        </Box>
      </SingleSection>

      <Box
        as="section"
        bg="gray.900"
        borderRadius="6px"
        my={16}
        mx="auto"
        maxW={1200}
        position="relative"
        px={8}
        py={8}
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
          How can Meeshkan's automated GraphQL testing save your organization
          hours of bug fixing?
        </Heading>
        <Flex justify={["center", "center", "center", "flex-end"]}>
          <Button
            as={ChakraLink}
            // @ts-ignore
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: "none", backgroundColor: "red.600" }}
            href="https://meetings.hubspot.com/makenna/consultation-with-meeshkan"
            aria-label="Schedule a demo with the Meeshkan team."
            variantColor="red"
            fontWeight={900}
            letterSpacing="wide"
            borderRadius="sm"
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

export default TestGraphqlPage
