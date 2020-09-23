import React from "react"
import {
	Heading,
	Text,
	Flex,
	Box,
	Button,
	Image,
	Tabs,
	Tab,
	TabPanels,
	TabPanel,
	TabList,
} from "@chakra-ui/core"
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
								Cut your manual testing time and your cloud bill in half with
								quick-to-deploy staging environments.
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

				<Tabs variant="unstyled">
					<Heading
						textAlign="center"
						mb={4}
						as="h2"
						color="gray.700"
						fontSize={["3xl", "3xl", "3xl", "4xl"]}
						fontWeight={900}
						letterSpacing="wide"
						lineHeight="short"
					>
						Staging environments optimized
					</Heading>
					<TabList fontFamily="mono" justifyContent="center">
						<Tab
							backgroundColor="gray.50"
							py={2}
							px={4}
							borderRadius="md"
							_selected={{
								color: "cyan.900",
								bg: "cyan.100",
								fontWeight: 700,
							}}
							mr={4}
						>
							for Product managers
						</Tab>
						<Tab
							backgroundColor="gray.50"
							py={2}
							px={4}
							borderRadius="md"
							_selected={{
								color: "cyan.900",
								bg: "cyan.100",
								fontWeight: 700,
							}}
						>
							for Developers
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<DoubleSection
								heading="Test the cases that matter"
								text="Start your staging environment with 0, 1, or a million users. Meeshkan loads your staging environment in a state that reflects the acceptance criteria you are testing. When you're done testing, the staging environment is saved and stored, saving thousands of dollars on your cloud bill."
							>
								<Box backgroundColor="gray.50" size="100%" />
							</DoubleSection>
						</TabPanel>
						<TabPanel>
							<DoubleSection
								heading="Ship a container and we'll take care of the rest"
								text="Meeshkan builds upon a containerized image of your service, adding the data and integrations needed for PMs to simulate their test cases. Push a containerized version of your service to the Meeshkan container registry using prebuilt connectors from CircleCI, Azure DevOps and Jenkins. We'll take care of getting it ready for your PM's acceptance tests."
							>
								<Box backgroundColor="gray.50" size="100%" />
							</DoubleSection>
						</TabPanel>
					</TabPanels>
				</Tabs>

				<SingleSection>
					<Box
						backgroundColor="gray.900"
						p={8}
						borderRadius="md"
						textAlign="center"
					>
						<Heading
							mb={2}
							color="white"
							as="h2"
							fontSize={["3xl", "3xl", "3xl", "4xl"]}
							fontWeight={900}
							letterSpacing="wide"
							lineHeight="short"
						>
							Cut your staging bill in half
						</Heading>
						<Text mb={4} fontSize="2xl" lineHeight="short" color="gray.200">
							Don't pay for staging environments you don't need. Meeshkan
							automatically tears down your staging environment when you're
							finished with your tests.
						</Text>
						<Button
							aria-label="Sign up"
							variantColor="red"
							borderRadius="sm"
							fontWeight={900}
							minW="fit-content"
						>
							Create your environment
						</Button>
					</Box>
				</SingleSection>
			</Layout>
		</>
	)
}

export default TestingEnvironmentPage
