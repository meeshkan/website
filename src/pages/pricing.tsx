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
import { useMixpanel } from "gatsby-plugin-mixpanel"
import { UniversalLink } from "../components/atoms/UniversalLink"
import { SingleSection } from "../components/organisms/singleSection"
import Layout from "../components/templates/layout"
import { Link } from "gatsby"
import SEO from "../components/molecules/seo"

type PricingProps = {
  title: string
  subtitle?: string
  price: string
  yesFeatures?: Array<string>
  noFeatures?: Array<string>
  hasCTA: boolean
  mixpanel: any
}

const PricingCard = ({
  title,
  subtitle,
  price,
  yesFeatures,
  noFeatures,
  hasCTA,
  mixpanel,
}: PricingProps) => (
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
      <Code variantColor="blue" fontSize="md" ml={3}>
        {subtitle}
      </Code>
    </Heading>
    <Text textAlign="center" fontSize="xl" color="gray.700" fontWeight={600}>
      {price} <span style={{ color: "#616E7C", fontWeight: 400 }}>/month</span>
    </Text>

    <Stack spacing={2} mt={4}>
      {yesFeatures &&
        yesFeatures.map((feature, index) => (
          <Flex key={index} align="top">
            <Icon name="checkmark" color="cyan.500" mr={3} mt={2} />
            <Text>{feature}</Text>
          </Flex>
        ))}

      {noFeatures &&
        noFeatures.map((feature, index) => (
          <Flex key={index} align="center">
            <Icon name="xmark" color="red.500" mr={3} />
            <Text>{feature}</Text>
          </Flex>
        ))}
    </Stack>

    {hasCTA && (
      <Button
        as={UniversalLink}
        href="https://app.meeshkan.com"
        aria-label="Create a free account on Meeshkan."
        variantColor="red"
        borderRadius="sm"
        fontWeight={700}
        w="full"
        mt={8}
        onClick={() => {
          mixpanel.track("Clicked button", {
            to: "https://app.meeshkan.com",
            from: "https://meeshkan.com/pricing",
            c2a: `Create an account - ${title}`,
          })
        }}
      >
        Create a free account
      </Button>
    )}
  </Card>
)

const PricingPage = () => {
  const mixpanel = useMixpanel()
  return (
    <Layout>
      <SEO
        pageTitle="Pricing"
        pageDescription="Pricing tiers for using the automated testing tool, Meeshkan."
        pageUrl="https://meeshkan.com/pricing/"
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
          Meeshkan Pricing
        </Heading>
        <Text fontSize="2xl" textAlign="center" mb={12} lineHeight="tall">
          Quality assurance isn't all-or-nothing. Our pricing scales with your
          need, and we have a generous free tierthat integrates seamlessly into
          your day-to-day flow as a developer.
        </Text>
        <SimpleGrid columns={3} spacing={8}>
          <PricingCard
            title="Free"
            subtitle="for Individuals"
            price="$0"
            mixpanel={mixpanel}
            yesFeatures={[
              "Endpoint testing for REST and GraphQL services",
              "100 testing hours",
              "Basic reports",
              "GitHub integration",
            ]}
            // noFeatures={[
            //   "Concurrent tests",
            //   "GitLab & Bitbucket",
            //   "Test history",
            //   "Audit reports",
            // ]}
            hasCTA={true}
          />
          <PricingCard
            title="Pro"
            subtitle="for Teams"
            price="$99"
            mixpanel={mixpanel}
            yesFeatures={[
              "All free features",
              "Unlimited projects",
              "1000 testing hours",
              "3 concurrent tests",
              "Premium reports",
              "30 day history retention",
            ]}
            hasCTA={false}
          />
          <PricingCard
            title="Business"
            subtitle="starting at"
            mixpanel={mixpanel}
            price="$2000"
            yesFeatures={[
              "Unlimited projects",
              "Unlimited testing hours",
              "Unlimited history",
              "GitLab & Bitbucket import",
              "Custom build pipelines",
              "In-cluster testing for k8s",
              "Role based permissions",
              "Jira/Linear integration",
            ]}
            hasCTA={false}
          />
        </SimpleGrid>
      </SingleSection>
    </Layout>
  )
}

export default PricingPage
