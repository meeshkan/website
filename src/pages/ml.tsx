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
} from "@chakra-ui/core"
import { Card } from "../components/atoms/card"
import { UniversalLink } from "../components/atoms/UniversalLink"
import { SingleSection } from "../components/organisms/singleSection"
import Layout from "../components/templates/layout"
import { Link } from "gatsby"
import SEO from "../components/molecules/seo"

type MachineLearningProps = {
  title: string
  blurb: string
  features: Array<string>
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
            color="blue.500"
          >
            <Text>{feature}</Text>
          </ChakraLink>
        </Flex>
      ))}
    </Stack>
  </Card>
)

const MachineLearningPage = () => {
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
            color="blue.500"
          >
            {" "}
            Reverse engineering the internet
          </ChakraLink>
          {"."}
        </Text>
        <SimpleGrid columns={3} spacing={8}>
          <MachineLearningCard
            title="Field classifier"
            blurb="Generating realistic fake data from APIs"
            features={[
              "The business case",
              "Our SPACeY field classifier",
              "A heuristic in Python",
              "Flat-mapping fields",
            ]}
          />
          <MachineLearningCard
            title="Grouping bugs"
            blurb="Extracting need-to-know information from 10,000 tests"
            features={[
              "The business case",
              "A basic grouping algorithm",
              "The dao of grouping",
              "An ungrouped Meeshkan report",
            ]}
          />
          <MachineLearningCard
            title="Quantifying priority"
            blurb="Automatically classifying the severity of bugs"
            features={[
              "The business case",
              "A tale of two bugs: ranking failures",
              "An NLP-based approach to classifying bug severity",
              "Our priority taxonomy",
            ]}
          />
          <MachineLearningCard
            title="Auto-CRUD"
            blurb="Linking API calls with underlying CRUD operations"
            features={[
              "The business case",
              "CRUD, state, and property-based testing",
              "Features and one-hot vectors in CRUD-land",
              "Auto-CRUD in HMT",
            ]}
          />
          <MachineLearningCard
            title="Smart fuzzing"
            blurb="Using spectral-graph theory to analyze code execution paths"
            features={[
              "The business case",
              "The unreasonable effectiveness of spectral-graph theory",
              "Eigenvalues, eigenvectors and code",
              "A Jupyter notebook analyzing code paths using SGT",
            ]}
          />
          <MachineLearningCard
            title="Collaborating with Meeshkan"
            blurb="Ways to learn from, partner with and even join our team"
            features={[
              "Meeshkan on Kaggle",
              "Meeshkan on Udemy",
              "Working at Meeshkan",
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
