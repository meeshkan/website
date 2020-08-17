import React from "react"
import {
  SimpleGrid,
  Text,
  Heading,
  Stack,
  Flex,
  Icon,
  Button,
  Link as ChakraLink,
  Code,
  Box,
} from "@chakra-ui/core"
import { Card } from "../components/atoms/card"
import { UniversalLink } from "../components/atoms/UniversalLink"
import { SingleSection } from "../components/organisms/singleSection"
import Layout from "../components/templates/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import SEO from "../components/molecules/seo"

type RoadmapLink = {
  text: string
  url: string
}

type MachineLearningProps = {
  title: string
  blurb: string
  features: Array<RoadmapLink>
}

const MachineLearningCard = ({
  title,
  blurb,
  features,
}: MachineLearningProps) => (
  <Card>
    <Heading
      as="h3"
      color="gray.900"
      fontSize="2xl"
      fontWeight={900}
      mb={4}
      d="flex"
      justifyContent="center"
      alignItems="center"
    >
      {title}
    </Heading>
    <Text>{blurb}</Text>

    <Stack spacing={2} mt={4}>
      {features.map((feature, index) => (
        <Flex key={index} align="center">
          <ChakraLink
            // @ts-ignore
            as={Link}
            href={feature.url}
            color="blue.500"
          >
            <Text>{feature.text}</Text>
          </ChakraLink>
        </Flex>
      ))}
    </Stack>
  </Card>
)

const MachineLearningPage = () => {
  const { linear } = useStaticQuery(
    graphql`
      query LINEAR_PROJECTS {
        linear {
          projects {
            nodes {
              name
              description
              links {
                nodes {
                  label
                  url
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO
        pageTitle="Machine Learning Roadmap"
        pageDescription="The Meeshkan machine learning roadmap."
        pageUrl="https://meeshkan.com/ds/"
      />
      <SingleSection>
        <Heading
          as="h1"
          color="gray.900"
          fontSize="3xl"
          fontWeight={900}
          textAlign="center"
          mb={6}
          letterSpacing="wide"
          lineHeight="short"
        >
          Our machine learning roadmap
        </Heading>
        <Text fontSize="2xl" textAlign="center" mb={12} lineHeight="tall">
          At Meeshkan, we test software. Machine learning and data science are
          used to power our entire automated testing stack, from modeling
          software to generating reports to determining the severity of bugs.
          For a high-level overview of why we like machine learning, read our
          article
          <ChakraLink
            // @ts-ignore
            as={Link}
            href={"/blog/reverse-engineering-the-internet"}
            color="blue.500"
          >
            {" "}
            Reverse engineering the internet
          </ChakraLink>
          {"."}
        </Text>
        <SimpleGrid columns={3} spacing={8}>
          {linear.projects.nodes.map((project, index) => (
            <Card
              key={index}
              heading={project.name}
              body={project.description}
            />
          ))}
        </SimpleGrid>

        <SimpleGrid columns={3} spacing={8}>
          <MachineLearningCard
            title="Field classifier"
            blurb="Generating realistic fake data from APIs"
            features={[
              {
                text: "The business case",
                url: "/blog/field-classifier-business-case",
              },
              {
                text: "Our SPACeY field classifier",
                url: "/blog/word-embeddings/",
              },
              { text: "A heuristic in Python", url: "" },
              { text: "Flat-mapping fields", url: "" },
            ]}
          />
          <MachineLearningCard
            title="Grouping bugs"
            blurb="Extracting need-to-know information from 10,000 tests"
            features={[
              { text: "The business case", url: "" },
              { text: "A basic grouping algorithm", url: "" },
              { text: "The dao of grouping", url: "" },
              { text: "An ungrouped Meeshkan report", url: "" },
            ]}
          />
          <MachineLearningCard
            title="Quantifying priority"
            blurb="Automatically classifying the severity of bugs"
            features={[
              { text: "The business case", url: "" },
              { text: "A tale of two bugs: ranking failures", url: "" },
              {
                text: "An NLP-based approach to classifying bug severity",
                url: "",
              },
              { text: "Our priority taxonomy", url: "" },
            ]}
          />
          <MachineLearningCard
            title="Auto-CRUD"
            blurb="Linking API calls with underlying CRUD operations"
            features={[
              { text: "The business case", url: "" },
              { text: "CRUD, state, and property-based testing", url: "" },
              { text: "Features and one-hot vectors in CRUD-land", url: "" },
              { text: "Auto-CRUD in HMT", url: "" },
            ]}
          />
          <MachineLearningCard
            title="Smart fuzzing"
            blurb="Using spectral-graph theory to analyze code execution paths"
            features={[
              { text: "The business case", url: "" },
              {
                text: "The unreasonable effectiveness of spectral-graph theory",
                url: "",
              },
              { text: "Eigenvalues, eigenvectors and code", url: "" },
              {
                text: "A Jupyter notebook analyzing code paths using SGT",
                url: "",
              },
            ]}
          />
          <MachineLearningCard
            title="Collaborating with Meeshkan"
            blurb="Ways to learn from, partner with and even join our team"
            features={[
              { text: "Meeshkan on Kaggle", url: "" },
              { text: "Meeshkan on Udemy", url: "" },
              { text: "Working at Meeshkan", url: "" },
            ]}
          />
        </SimpleGrid>
        <Text fontSize="2xl" textAlign="center" mb={12} lineHeight="tall">
          Are you interested in learning more about how our ML-powered
          algorithms can find and help fix mission-critical bugs in your code
          base?
          <ChakraLink
            // @ts-ignore
            as={Link}
            color="blue.500"
          >
            {" "}
            Contact sales
          </ChakraLink>
          {" for a free demo."}
        </Text>
      </SingleSection>
    </Layout>
  )
}

export default MachineLearningPage
