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
  Tooltip,
  Tabs,
  TabPanels,
  TabPanel,
  TabList,
  Tab,
} from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import { SingleSection } from "../components/organisms/singleSection"
import { DoubleSection } from "../components/organisms/doubleSection"
import Img from "gatsby-image"
import Layout from "../components/templates/layout"
import { Card } from "../components/atoms/card"
import TestSnippet from "../components/organisms/home/testSnippet"
import { useForm } from "react-hook-form"

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

    // let hubspotData = JSON.stringify({
    //   properties: [
    //     {
    //       property: "email",
    //       value: values.email || values.email2,
    //     },
    //     {
    //       property: "lifecycle_stage",
    //       value: "Subscriber",
    //     },
    //     {
    //       property: "lead_status",
    //       value: "In progress",
    //     },
    //   ],
    // })

    fetch("https://api.sendgrid.com/v3/marketing/contacts", {
      method: "PUT",
      body: sendgridData,
      headers: {
        authorization: `Bearer ${process.env.GATSBY_SENDGRID_API_KEY}`,
        "content-type": "application/json",
      },
    }).then(() => setFormSubmit(true))

    // fetch(
    //   `https://api.hubapi.com/crm/v3/objects/contacts?hapikey=${process.env.GATSBY_HUBSPOT_API_KEY}`,
    //   {
    //     method: "POST",
    //     body: hubspotData,
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //   }
    // )
  }

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
          <span>
            <Tooltip
              label="with a server!"
              aria-label="with a server!"
              placement="top"
              hasArrow
              p={3}
              rounded="sm"
              backgroundColor="gray.900"
              color="white"
              fontSize="md"
              fontWeight={700}
            >
              *
            </Tooltip>
          </span>
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
        heading="Manually written tests are time consuming and fragile to code changes"
        text="Developers would agree that testing is important. Those same developers will say they should be testing more, but they’re waiting for the codebase to stabilize."
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
          fluid={data.quality.childImageSharp.fluid}
          alt="Shows a piece of the auth spec in the Meeshkan UI, stressing our focus on the quality of your app."
        />
      </DoubleSection>

      <SingleSection
        heading="Automate integration testing with the Meeshkan web app"
        text="Using stateful, property-based testing and mocking your app’s dependencies — Meeshkan gives you confidence in your app’s resilience."
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
        <Text textAlign="center" color="gray.500" mt={4} mb={12}>
          Getting set up is as fast as authorizing GitHub.
        </Text>
      </SingleSection>

      <SingleSection>
        <Tabs
          defaultIndex={0}
          display={["block", "block", "flex"]}
          w="100%"
          justifyContent="space-between"
          align="start"
          variant="unstyled"
        >
          <Box w="1/3">
            <Heading
              as="h2"
              color="gray.900"
              fontSize={["3xl", "3xl", "3xl", "4xl"]}
              fontWeight={900}
              textAlign="center"
              mb={6}
              letterSpacing="wide"
              lineHeight="short"
            >
              Key Features
            </Heading>
            <TabList d="block" borderBottom="none">
              <Tab
                h="auto"
                w="100%"
                fontSize="md"
                justifyContent="start"
                fontWeight={600}
                rounded="sm"
                _selected={{
                  color: "gray.900",
                  bg: "gray.50",
                  fontWeight: 900,
                }}
              >
                Framework agnostic
              </Tab>
              <Tab
                h="auto"
                w="100%"
                fontSize="md"
                justifyContent="start"
                fontWeight={600}
                rounded="sm"
                _selected={{
                  color: "gray.900",
                  bg: "gray.50",
                  fontWeight: 900,
                }}
              >
                Continous testing
              </Tab>
              <Tab
                h="auto"
                w="100%"
                fontSize="md"
                justifyContent="start"
                fontWeight={600}
                rounded="sm"
                _selected={{
                  color: "gray.900",
                  bg: "gray.50",
                  fontWeight: 900,
                }}
              >
                Premium audits
              </Tab>
              <Tab
                h="auto"
                w="100%"
                fontSize="md"
                justifyContent="start"
                fontWeight={600}
                rounded="sm"
                _selected={{
                  color: "gray.900",
                  bg: "gray.50",
                  fontWeight: 900,
                }}
              >
                Auth flows
              </Tab>
            </TabList>
          </Box>

          <TabPanels w="2/3">
            <TabPanel maxW="644px" w={["644px"]}>
              <Img
                fluid={data.stack.childImageSharp.fluid}
                alt="Meeshkan is framework agnostic testing. Showing logos of backend technologies supported such as python, django, elixir, scala, graphql, REST, node.js, ruby on rails, java and more."
              />
            </TabPanel>
            <TabPanel maxW="644px" w={["644px"]}>
              <Img
                fluid={data.continuous.childImageSharp.fluid}
                alt="A screenshot of the meeshkan continous testing workflow with github, and the bugs it points to when clicking details."
              />
            </TabPanel>
            <TabPanel maxW="644px" w={["644px"]}>
              <Img
                fluid={data.premium.childImageSharp.fluid}
                alt="A screenshot of a bug premium report"
              />
            </TabPanel>
            <TabPanel maxW="644px" w={["644px"]}>
              <Img
                fluid={data.authSpec.childImageSharp.fluid}
                alt="Auth specification UI. Gives a full overview of who can access and endpoint, and what is returned."
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </SingleSection>

      <Heading
        as="h2"
        fontSize={["3xl", "4xl", "5xl"]}
        mb={6}
        textAlign="center"
        color="gray.900"
        fontWeight={900}
        letterSpacing="wide"
        lineHeight="short"
      >
        How does Meeshkan work?
      </Heading>
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
          How would automated testing work for your organization?
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
