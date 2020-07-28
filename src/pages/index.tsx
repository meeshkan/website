import React, { useState } from "react"
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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  SimpleGrid,
  Code,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionIcon,
  AccordionPanel,
  Grid,
} from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import { SingleSection } from "../components/organisms/singleSection"
import { DoubleSection } from "../components/organisms/doubleSection"
import Img from "gatsby-image"
import Layout from "../components/templates/layout"
import { Card } from "../components/atoms/card"
import { useForm } from "react-hook-form"
import GenerateTests from "../components/organisms/home/generateTests"
import PrioritizeTests from "../components/organisms/home/prioritizeTests"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        stack: file(relativePath: { eq: "stack.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        video: file(relativePath: { eq: "video.png" }) {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
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
        quality: file(relativePath: { eq: "authQuality.png" }) {
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
        authSpec: file(relativePath: { eq: "authSpec.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        continuous: file(relativePath: { eq: "continuousTests.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        premium: file(relativePath: { eq: "premiumTest.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
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

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { handleSubmit, register, formState } = useForm()
  const [formSubmit, setFormSubmit] = useState(false)

  function onSubmit(values) {
    let sendgridData = JSON.stringify({
      list_ids: ["065bb90b-9652-4905-85df-a6c49fb825cd"],
      contacts: [
        {
          email: values.email || values.email2,
        },
      ],
    })

    fetch("https://api.sendgrid.com/v3/marketing/contacts", {
      method: "PUT",
      body: sendgridData,
      headers: {
        authorization: `Bearer ${process.env.GATSBY_SENDGRID_API_KEY}`,
        "content-type": "application/json",
      },
    }).then(() => setFormSubmit(true))
  }

  const [showImage, setShowImage] = React.useState(
    data.stack.childImageSharp.fluid
  )

  return (
    <Layout>
      <SEO
        pageTitle="Home"
        pageDescription="Meeshkan is an automated testing workflow for your project and it's dependencies. We're currently in beta and accepting applications."
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
            MEESHKAN - BETA
          </Badge>
        </Flex>
        <Heading
          as="h1"
          fontSize={["3xl", "4xl", "5xl"]}
          mb={6}
          textAlign="center"
          color="gray.900"
          fontWeight={900}
          letterSpacing="wide"
          lineHeight="short"
        >
          Automated tests for your GraphQL APIs, dynamically generated
        </Heading>
        <Text
          textAlign="center"
          fontSize="2xl"
          lineHeight="short"
          mb={6}
          color="gray.700"
        >
          Stop feeling guilty for not writing tests. Meeshkan automatically
          executes and reports on a collection of generated tests that actually
          keep up with your GraphQL API. Using your schema and a touch of NLP,
          we test critical flows, guaranteed to give you confidence in your app.
          Every commit.
        </Text>
        <Flex
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          direction={["column", "column", "row"]}
          justify="center"
          alignItems="flex-end"
          mb={12}
        >
          <input
            type="hidden"
            name="formName"
            value="request-beta-1"
            ref={register}
          />
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
              ref={register}
              aria-label="Enter your business email"
              borderRadius="sm"
              placeholder="Your email"
              isDisabled={formSubmit}
              fontWeight={500}
            />
          </FormControl>
          <Button
            variantColor="red"
            borderRadius="sm"
            fontWeight={900}
            type="submit"
            isLoading={formState.isSubmitting}
            isDisabled={formSubmit}
            w={["100%", "100%", "auto"]}
          >
            {formSubmit ? "Submitted" : "Request access"}
          </Button>
        </Flex>
        <Box maxW="750px" mx="auto">
          <Card>
            <Flex
              justify={["center", "space-between"]}
              align="center"
              display={["block", "block", "flex"]}
            >
              <Box textAlign={["center", "center", "right"]} mr={[0, 0, 8]}>
                <Heading
                  as="h3"
                  fontSize="2xl"
                  fontWeight={900}
                  letterSpacing="wide"
                  mb={4}
                >
                  Watch this demo
                </Heading>
                <Text
                  fontWeight={500}
                  lineHeight="tall"
                  color="gray.700"
                  fontSize="lg"
                >
                  Let's explore how Meeshkan can help you squash killer bugs in
                  your backend services.
                </Text>
              </Box>
              <Box cursor="pointer" onClick={onOpen} mt={[4, 4, 0]}>
                <Img
                  fluid={data.video.childImageSharp.fluid}
                  style={{ width: 240, borderRadius: 2, margin: "0 auto" }}
                  alt="A screen grab from the demo video that pops up when you click it."
                />
              </Box>
              <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent backgroundColor="transparent">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ndMYYxP_Gzs?autoplay=1&cc_load_policy=1"
                    style={{ borderRadius: 2 }}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; allowfullscreen"
                  ></iframe>
                </ModalContent>
              </Modal>
            </Flex>
          </Card>
        </Box>
      </SingleSection>

      <DoubleSection
        heading="Keeping up with an ever-evolving API is a full-time job"
        text="Someone makes a change to your GraphQL schema, the existing tests become outdated and now you're stuck rewriting your tests. We know because we've been there. Meeshkan uses GraphQL introspection to dynamically generate tests based on your schema."
      >
        <GenerateTests />
      </DoubleSection>

      <DoubleSection
        // reverse={true}
        heading="Test generation falls short by focusing on the quanity of ‘bugs’ rather than"
        em="quality"
        anchor="#quality"
        text="Code coverage metrics aren't meaningful without the quality context of what's covered. Meeshkan prioritizes and sorts bugs so you know what to tackle first."
      >
        <PrioritizeTests />
      </DoubleSection>

      <SingleSection
        heading="Automate GraphQL testing of your backend with the Meeshkan webapp"
        text="By combining your existing schema introspection, property-based testing, and a touch of NLP, Meeshkan gives you the confidence that your backend service is working as expected."
      >
        <Flex
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          direction={["column", "column", "row"]}
          justify="center"
          alignItems="flex-end"
          mb={12}
        >
          <input
            type="hidden"
            name="formName"
            ref={register}
            value="request-beta-2"
          />
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
              name="email2"
              ref={register}
              aria-label="Enter your business email"
              borderRadius="sm"
              placeholder="Your email"
              isDisabled={formSubmit}
              fontWeight={500}
            />
          </FormControl>
          <Button
            variantColor="red"
            borderRadius="sm"
            fontWeight={900}
            isLoading={formState.isSubmitting}
            isDisabled={formSubmit}
            type="submit"
            w={["100%", "100%", "auto"]}
          >
            {formSubmit ? "Submitted" : "Request access"}
          </Button>
        </Flex>
        <Text textAlign="center" color="gray.500" mt={4}>
          Getting set up is as fast as authorizing GitHub.
        </Text>
      </SingleSection>

      <SingleSection>
        <Grid
          templateColumns={[
            "reapeat(auto-fill, 1fr)",
            "reapeat(auto-fill, 1fr)",
            "33% 66%",
          ]}
          gap={8}
        >
          <Box>
            <Heading
              as="h2"
              color="gray.900"
              fontSize={["3xl", "3xl", "3xl", "4xl"]}
              fontWeight={900}
              mb={6}
              letterSpacing="wide"
              lineHeight="short"
            >
              Key Features
            </Heading>
            <Accordion allowToggle>
              <AccordionItem
                border="none"
                borderRadius="sm"
                onClick={() => setShowImage(data.stack.childImageSharp.fluid)}
              >
                <AccordionHeader
                  roundedTop="sm"
                  fontSize="md"
                  fontWeight={600}
                  _expanded={{
                    color: "gray.900",
                    bg: "gray.50",
                    fontWeight: 900,
                  }}
                  _hover={{
                    bg: "gray.100",
                  }}
                >
                  <Box flex="1" textAlign="left">
                    REST Compatible
                  </Box>
                  <AccordionIcon color="gray.300" />
                </AccordionHeader>
                <AccordionPanel pb={4} bg="gray.50" roundedBottom="sm">
                  Meeshkan also works for your REST APIs by generating tests
                  with an OpenAPI specification and a little NLP. If you don't
                  have an OpenAPI spec, we'll point you to the resources to
                  create one.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                border="none"
                borderRadius="sm"
                onClick={() =>
                  setShowImage(data.continuous.childImageSharp.fluid)
                }
              >
                <AccordionHeader
                  roundedTop="sm"
                  fontSize="md"
                  fontWeight={600}
                  _expanded={{
                    color: "gray.900",
                    bg: "gray.50",
                    fontWeight: 900,
                  }}
                  _hover={{
                    bg: "gray.100",
                  }}
                >
                  <Box flex="1" textAlign="left">
                    Continuous testing
                  </Box>
                  <AccordionIcon color="gray.300" />
                </AccordionHeader>
                <AccordionPanel pb={4} bg="gray.50" roundedBottom="sm">
                  Every time you push a commit to GitHub, Meeshkan runs tests to
                  check for breaking changes. If something does fail, our GitHub
                  integration will notify you and details will be available in
                  the Meeshkan webapp.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                border="none"
                borderRadius="sm"
                onClick={() => setShowImage(data.premium.childImageSharp.fluid)}
              >
                <AccordionHeader
                  roundedTop="sm"
                  fontSize="md"
                  fontWeight={600}
                  _expanded={{
                    color: "gray.900",
                    bg: "gray.50",
                    fontWeight: 900,
                  }}
                  _hover={{
                    bg: "gray.100",
                  }}
                >
                  <Box flex="1" textAlign="left">
                    Premium audits
                  </Box>
                  <AccordionIcon color="gray.300" />
                </AccordionHeader>
                <AccordionPanel pb={4} bg="gray.50" roundedBottom="sm">
                  If you're on a Pro plan or higher, Meeshkan provides weekly
                  audit reports through the webapp. These audits include a full
                  catalog of the bugs found, the failing request, and suggested
                  fixes - all sorted by priority.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                border="none"
                borderRadius="sm"
                onClick={() =>
                  setShowImage(data.authSpec.childImageSharp.fluid)
                }
              >
                <AccordionHeader
                  roundedTop="sm"
                  fontSize="md"
                  fontWeight={600}
                  _expanded={{
                    color: "gray.900",
                    bg: "gray.50",
                    fontWeight: 900,
                  }}
                  _hover={{
                    bg: "gray.100",
                  }}
                >
                  <Box flex="1" textAlign="left">
                    Auth flows
                  </Box>
                  <AccordionIcon color="gray.300" />
                </AccordionHeader>
                <AccordionPanel pb={4} bg="gray.50" roundedBottom="sm">
                  Our Business plan gives you access to a breakdown of an auth
                  flow specification for your API. This enables you to visualize
                  and control who has access to certain queries and test those
                  endpoints accordingly.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box minW="300px">
            <Img
              fluid={showImage}
              alt="Meeshkan is framework agnostic testing. Showing logos of backend technologies supported such as python, django, elixir, scala, graphql, REST, node.js, ruby on rails, java and more."
            />
          </Box>
        </Grid>
      </SingleSection>

      <SingleSection heading="Test automation for your GraphQL app">
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

export default IndexPage
