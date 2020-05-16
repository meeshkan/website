import React from "react"
import {
  SimpleGrid,
  Text,
  Heading,
  Stack,
  Flex,
  Icon,
  Button,
  Input,
  FormControl,
} from "@chakra-ui/core"
import { Card } from "../components/atoms/card"
import { SingleSection } from "../components/organisms/singleSection"
import Layout from "../components/templates/layout"

type PricingProps = {
  title: string
  price: string
  yesFeatures?: Array<string>
  noFeatures?: Array<string>
  hasCTA: boolean
  CTAlink?: string
}

const PricingCard = ({
  title,
  price,
  yesFeatures,
  noFeatures,
  hasCTA,
  CTAlink,
}: PricingProps) => (
  <Card>
    <Heading
      as="h3"
      color="gray.900"
      fontSize="2xl"
      fontWeight={900}
      mb={4}
      textAlign="center"
    >
      {title}
    </Heading>
    <Text textAlign="center" fontSize="xl" color="gray.700" fontWeight={500}>
      {price}
    </Text>

    <Stack spacing={2} mt={4}>
      {yesFeatures &&
        yesFeatures.map((feature, index) => (
          <Flex key={index} align="center">
            <Icon name="checkmark" color="cyan.500" mr={3} />
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
      <FormControl
        as="form"
        // @ts-ignore
        action="/success/"
        name="request-alpha-1"
        data-netlify="true"
        method="post"
        data-netlify-honeypot="bot-field"
        mt={8}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="pricing-request-alpha" />
        <Input
          type="email"
          name="email"
          aria-label="Enter your business email"
          borderRadius="sm"
          placeholder="Your email"
          fontWeight={500}
          bg="transparent"
          mb={4}
        />
        <Button
          variantColor="red"
          borderRadius="sm"
          fontWeight={700}
          type="submit"
          w="full"
        >
          Request alpha access
        </Button>
      </FormControl>
    )}
  </Card>
)

const PricingPage = () => {
  return (
    <Layout>
      <SingleSection
        heading="Meeshkan Pricing"
        text="While we are still in private alpha, Meeshkan is free to use. If you need larger limits, please reach out to explore a custom solution."
      >
        <SimpleGrid columns={2} spacing={8}>
          <PricingCard
            title="Personal"
            price="$0"
            yesFeatures={[
              "Public GitHub repositories",
              "1 test per day",
              "5 teammates",
            ]}
            noFeatures={["GitLab & Bitbucket", "Mock  & test history"]}
            hasCTA={true}
          />
          <PricingCard
            title="Professional"
            price="Coming soon!"
            yesFeatures={[
              "Private GitHub repositories",
              "Unlimited tests",
              "Unlimited teammates",
              "GitLab & Bitbucket",
              "Mock  & test history",
            ]}
            hasCTA={false}
          />
        </SimpleGrid>
      </SingleSection>
    </Layout>
  )
}

export default PricingPage
