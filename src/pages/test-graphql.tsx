import React, { useState } from "react"
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
  Badge,
  FormControl,
  FormLabel,
} from "@chakra-ui/core"
import SEO from "../components/molecules/seo"
import Layout from "../components/templates/layout"
import { SingleSection } from "../components/organisms/singleSection"
import { DoubleSection } from "../components/organisms/doubleSection"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { useForm } from "react-hook-form"

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

  const [endpointSubmit, setEndpointSubmit] = useState(false)
  const [testResults, setTestResults] = useState({})
  const { handleSubmit, register, formState } = useForm()

  function onSubmit(values) {
    let endpointData = JSON.stringify({
      endpoint: values.endpoint,
      // headers: {
      //   cookie: "cookie_header_value",
      //   authorization: "authorization_header_value",
      // },
    })
    fetch("http://35.228.132.158/runr", {
      method: "POST",
      body: endpointData,
      headers: {
        "Api-Key": process.env.GATSBY_MINI_TESTER_AUTH,
      },
    }).then(res => {
      setEndpointSubmit(true)
      setTestResults(res)
    })
  }

  return (
    <Layout>
      <SEO
        pageTitle="Testing GraphQL"
        pageDescription="Meeshkan is a GraphQL dedicated testing tool that automatically triggers on every commit."
        pageUrl="https://meeshkan.com/test-graphql/"
      />
      <SingleSection>
        <Flex justify="center" mb={3} mt={12}>
          <Badge
            variantColor="cyan"
            letterSpacing="widest"
            fontSize="14px"
            fontWeight={600}
            rounded="sm"
            padding="0px 4px"
            minH="auto"
          >
            TESTING GRAPHQL
          </Badge>
        </Flex>
        <Heading
          as="h1"
          fontSize={["3xl", "4xl", "5xl"]}
          mb={6}
          textAlign={["left", "left", "center"]}
          color="gray.900"
          fontWeight={900}
          letterSpacing="wide"
          lineHeight="short"
        >
          Your search for dynamic GraphQL testing ends here.
        </Heading>
        <Text
          textAlign={["left", "left", "center"]}
          fontSize={["lg", "xl", "2xl"]}
          lineHeight="short"
          mb={6}
          color="gray.700"
        >
          Meeshkan automatically writes, executes, and reports on a collection
          of user-mimicking tests, guaranteed to give you confidence in critical
          flows.
        </Text>
      </SingleSection>

      <Stack justifyContent="center">
        <Heading
          as="h2"
          color="gray.700"
          fontSize="2xl"
          fontWeight={900}
          mb={4}
          letterSpacing="wide"
          lineHeight="short"
          textAlign="center"
        >
          Try it for yourself.
        </Heading>

        <Flex
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          direction={["column", "column", "row"]}
          justify="center"
          alignItems="flex-end"
          mb={12}
          backgroundColor="gray.900"
          p={4}
          borderRadius="md"
          mx="auto"
          w={["full", "full", "600px"]}
        >
          <DarkMode>
            <FormControl
              isRequired
              mr={[0, 0, 4]}
              mb={[4, 4, 0]}
              w="100%"
              maxW={["full", "full", "383px"]}
            >
              <FormLabel fontWeight={700} color="white">
                Endpoint
              </FormLabel>
              <Input
                name="endpoint"
                ref={register}
                aria-label="Your GraphQL Endpoint"
                borderRadius="sm"
                placeholder="Your GraphQL Endpoint"
                isDisabled={endpointSubmit}
                fontWeight={500}
                color="white"
              />
            </FormControl>
          </DarkMode>
          <Button
            aria-label="Test Endpoint"
            variantColor="red"
            borderRadius="sm"
            fontWeight={900}
            type="submit"
            isLoading={formState.isSubmitting}
            loadingText="Testing"
            isDisabled={endpointSubmit}
            w={["100%", "100%", "auto"]}
          >
            Test Endpoint
          </Button>
        </Flex>
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

      {testResults && (
        <pre>
          <code>{JSON.stringify(testResults)}</code>
        </pre>
      )}

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
              Choose a repository
            </Heading>
            <Text fontSize={["md", "md", "lg"]} lineHeight="tall">
              Authorize Meeshkan on GitHub, choose a repository to test, and set
              up your base configuration. That’s all you need to do to get
              started. Test runs will be triggered on every commit!
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
              merging, direct a developer to the point of failure, and see the
              highlight the highest priority bugs to tackle first.
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
          Tired of API testing that doesn’t keep up? Get started with automated
          GraphQL testing today.
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
          borderBottomLeftRadius="4px"
          overflow="hidden"
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
