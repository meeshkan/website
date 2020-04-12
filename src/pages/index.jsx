import React from "react"
import SEO from "../components/molecules/seo"
import {
  Heading,
  Input,
  Button,
  Text,
  Grid,
  Flex,
  Badge,
} from "@chakra-ui/core"
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby"
import { Card } from "../components/atoms/card"
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
          direction={["column", "column", "row"]}
          justify="center"
          name="schedule-demo-home"
          data-netlify="true"
          method="post"
          data-netlify-honeypot="bot-field"
          mb={12}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="schedule-demo-home" />
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
        heading="Where is the Meeshkan Algorithm used?"
        anchor="projects"
      >
        <Grid
          templateColumns={[
            "repeat(auto-fill, 1fr)",
            "reapeat(auto-fill, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={6}
        >
          <Card
            heading="Meeshkan"
            link="https://github.com/meeshkan/meeshkan"
            label="Learn more about Meeshkan"
            body="Building OpenAPI specifications from HTTP recordings and a place to
            store the HTTP traffic logs."
          >
            <Text color="blue.500" mt={4} fontWeight={600}>
              Learn more ->
            </Text>
          </Card>

          <Card
            heading="Unmock"
            link="https://github.com/meeshkan/unmock-js"
            body="A library that helps fuzz test external APIs and microservices."
            label="Learn more about Unmock"
          >
            <Text
              color="blue.500"
              mt={4}
              fontWeight={600}
              pos="absolute"
              bottom={6}
              right={6}
              left={6}
            >
              Learn more ->
            </Text>
          </Card>

          <Card
            heading="Jaymock"
            link="https://github.com/meeshkan/jaymock/"
            body="Tiny API mocking microservice for generating fake JSON data."
            label="Learn more about jaymock"
          >
            <Text
              color="blue.500"
              mt={4}
              fontWeight={600}
              pos="absolute"
              bottom={6}
              right={6}
              left={6}
            >
              Learn more ->
            </Text>
          </Card>
        </Grid>
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
