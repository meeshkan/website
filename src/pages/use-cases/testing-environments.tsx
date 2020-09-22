import React from "react"
import { Heading, Text, Flex, Box, Button, Image } from "@chakra-ui/core"
import SEO from "../../components/molecules/seo"
import Layout from "../../components/templates/layout"
import { SingleSection } from "../../components/organisms/singleSection"
import { DoubleSection } from "../../components/organisms/doubleSection"
// @ts-expect-error
import testingEnvironment from "../../static/testingEnvironment.png"

const TestingEnvironmentPage = () => {
	return (
		<>
			<Layout>
				<SEO
					pageTitle="Testing Environments"
					pageDescription="Meeshkan is creates testing environments that are a ready-made sandbox. Tests, mock services, and mock data are dynamically generated based on the branch specified."
					pageUrl="https://meeshkan.com/testing-environments/"
				/>
				<SingleSection hero>
					<Flex direction={["column", "column", "row"]} mt={12}>
						<Box mr={[0, 0, 8]} mb={[8, 8, 0]}>
							<Heading
								as="h1"
								fontSize={["3xl", "4xl", "5xl"]}
								mb={6}
								color="gray.900"
								fontWeight={900}
								letterSpacing="wide"
								lineHeight="short"
							>
								Faster, cheaper staging environments for pre-release testing
							</Heading>
							<Text
								fontSize={["lg", "xl", "2xl"]}
								lineHeight="short"
								mb={6}
								color="gray.700"
							>
								Cut your manual testing time in half by instantly creating
								sandboxed staging environments from source control.
							</Text>
							<Button
								aria-label="Sign up"
								variantColor="red"
								borderRadius="sm"
								fontWeight={900}
								minW="fit-content"
							>
								Get started
							</Button>
						</Box>
						<Image src={testingEnvironment} minW={[300, 360, 400]} h="256px" />
					</Flex>
				</SingleSection>

				<DoubleSection
					heading="Test the cases that matter"
					text="Start your staging environment with 0, 1, or a million users. Meeshkan loads your staging environment in a state that reflects the acceptance criteria you are testing. Give Meeshkan a Gherkin spec, and it will create separate staging environments for each acceptance test."
				>
					<Box backgroundColor="gray.50" size="100%" />
				</DoubleSection>

				<DoubleSection
					reverse
					heading="Powered by Docker"
					text="Meeshkan builds upon a Docker image of your service, adding the data and integrations needed to simulate the case you are testing. Developers push a Dockerized version of your service to the Meeshkan container registry using prebuilt connectors from CircleCI, Azure DevOps and Jenkins. We take care of the rest."
				>
					<Box backgroundColor="gray.50" size="100%" />
				</DoubleSection>

				<DoubleSection
					heading="Cut your staging bill in half"
					text="Don't pay for staging environments you don't need. Meeshkan automatically tears down your staging environment when you're finished with your tests."
				>
					<Box backgroundColor="gray.50" size="100%" />
				</DoubleSection>
			</Layout>
		</>
	)
}

export default TestingEnvironmentPage
