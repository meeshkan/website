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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import { SingleSection } from "../components/organisms/singleSection"
import { DoubleSection } from "../components/organisms/doubleSection"
import Img from "gatsby-image"
import Layout from "../components/templates/layout"
import { Card } from "../components/atoms/card"
import TestSnippet from "../components/organisms/home/testSnippet"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
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

  const { isOpen, onOpen, onClose } = useDisclosure()

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
            MEESHKAN - PRIVATE BETA
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
          writes, executes, and reports on a collection of user-mimicking tests,
          guaranteed to give you confidence in critical flows.
        </Text>
        <Flex
          as="form"
          // @ts-ignore
          action="/success/"
          direction={["column", "column", "row"]}
          justify="center"
          alignItems="flex-end"
          name="request-beta-1"
          data-netlify="true"
          method="post"
          data-netlify-honeypot="bot-field"
          mb={16}
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
        <Box maxW="750px" mx="auto">
          <Card>
            <Flex justify="space-between" align="center">
              <Box textAlign="right" mr={8}>
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
                  Directly showing where, how, and what Meeshkan does for your
                  codebase.
                </Text>
              </Box>
              <Box cursor="pointer" onClick={onOpen}>
                <Img
                  fluid={data.video.childImageSharp.fluid}
                  style={{ width: 240, borderRadius: 2 }}
                  alt="A dependency map with logos of several companies showing how your app uses other code bases."
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
        heading="Manually written tests are time consuming and often fragile to code changes"
        text="Most developers would agree that testing is important. Those same developers will say they should be testing more, but they’re waiting for the codebase to stabilize."
      >
        <TestSnippet />
      </DoubleSection>

      <DoubleSection
        reverse={true}
        heading="Test generation falls short by focusing on quanity of ‘bugs’ rather than"
        em="quality"
        anchor="#quality"
        text="‘Code coverage’ test metrics are useless. Meeshkan focuses on logic heavy parts of your app such as transactions and auth flows. Confidence not anxiety."
      >
        <Img
          fluid={data.coverage.childImageSharp.fluid}
          alt="2 compared bar graphs showing that using Meeshkan covers 95% of your app, and the traditional unit, integration, e2e covers 60%."
        />
      </DoubleSection>

      <SingleSection
        heading="Automate integration testing with the Meeshkan web app"
        text="Using stateful, property-based testing and mocking your app’s dependencies — Meeshkan gives you confidence in your app’s resilience."
      >
        <Flex
          as="form"
          // @ts-ignore
          action="/success/"
          direction={["column", "column", "row"]}
          justify="center"
          alignItems="flex-end"
          name="request-beta-2"
          data-netlify="true"
          method="post"
          data-netlify-honeypot="bot-field"
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
            fontWeight={900}
            letterSpacing="wide"
            type="submit"
            w={["100%", "100%", "auto"]}
          >
            Request beta access
          </Button>
        </Flex>
        <Text textAlign="center" color="gray.500" mt={4} mb={12}>
          Getting set up is as fast as authorizing GitHub.
        </Text>
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
        heading="Commit and continuously test"
        text="Meeshkan slots into your natural code lifecycle by testing as you push commits to GitHub. The checks link to detailed reports."
      >
        <Img
          fluid={data.test.childImageSharp.fluid}
          alt="An illustration of the test log using pieces of the Meeshkan web app."
        />
      </DoubleSection>

      <DoubleSection
        badge="Step 3"
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
