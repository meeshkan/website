import React, { useState } from "react"
import {
	Heading,
	Text,
	Flex,
	Box,
	Button,
	SimpleGrid,
	Image,
	Tabs,
	Tab,
	TabPanels,
	TabPanel,
	TabList,
	Stack,
	DarkMode,
	Icon,
	IconButton,
	FormControl,
	FormLabel,
	Input,
} from "@chakra-ui/core"
import SEO from "../../components/molecules/seo"
import Layout from "../../components/templates/layout"
import { SingleSection } from "../../components/organisms/singleSection"
import { DoubleSection } from "../../components/organisms/doubleSection"
// @ts-expect-error
import testingEnvironment from "../../static/testingEnvironment.png"
// @ts-expect-error
import devFlow from "../../static/devFlow.png"
import Test from "../../components/molecules/test"
import { Card } from "../../components/atoms/card"

type LightOrDark = "light" | "dark"

const StagingEnvironmentPage = () => {
	const startingColor: LightOrDark = "light"
	const [colorMode, setColorMode] = useState<LightOrDark>(startingColor)
	return (
		<>
			<Layout>
				<SEO
					pageTitle="Staging Environments"
					pageDescription="Meeshkan is creates staging environments that are a ready-made sandbox. Tests, mock services, and mock data are dynamically generated based on the branch specified."
					pageUrl="https://meeshkan.com/staging-environments/"
				/>
				<SingleSection hero>
					<Flex
						direction={[
							"column-reverse",
							"column-reverse",
							"column-reverse",
							"row",
						]}
						mt={12}
					>
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
						</Box>
						<Image
							src={testingEnvironment}
							w="400px"
							h="256px"
							mx="auto"
							mb={[8, 8, 0]}
						/>
					</Flex>
					<Flex
						as="form"
						// @ts-expect-error
						name="staging-signup"
						data-netlify="true"
						data-netlify-honeypot="bot-field"
						method="POST"
						action="/success/"
						id="staging-signup"
						align="flex-end"
						w={["full", "full", 600]}
						direction={["column", "column", "row"]}
						mx="auto"
					>
						<input type="hidden" name="bot-field" />
						<input type="hidden" name="form-name" value="staging-signup" />
						<FormControl isRequired mr={[0, 0, 4]} mb={[4, 4, 0]} w="100%">
							<FormLabel htmlFor="email" fontWeight={700}>
								Email
							</FormLabel>
							<Input
								type="email"
								name="email"
								borderRadius="sm"
								fontWeight={500}
							/>
						</FormControl>
						<Button
							aria-label="Sign up"
							variantColor="red"
							borderRadius="sm"
							fontWeight={900}
							type="submit"
							w={["100%", "100%", "auto"]}
							minW="fit-content"
						>
							Get started
						</Button>
					</Flex>
				</SingleSection>

				<Box backgroundColor="gray.50" borderRadius={4} my={12}>
					<SingleSection heading="Designed for the smoothest release cycle you've ever experienced">
						<Box m="auto">
							<SimpleGrid
								spacing={8}
								columns={[1, 2, 3]}
								px={4}
								mt={12}
								fontWeight={500}
							>
								<Card feature>
									<Icon name="activity" color="red.700" w="24px" h="24px" />
									<Text ml={4}>Health metrics dashboard</Text>
								</Card>
								<Card feature>
									<Icon name="server" color="red.700" w="24px" h="24px" />
									<Text ml={4}>Full stack staging</Text>
								</Card>
								<Card feature>
									<Icon name="zap" color="red.700" w="24px" h="24px" />
									<Text ml={4}>Dynamically generated tests</Text>
								</Card>
								<Card feature>
									<Icon name="crosshair" color="red.700" w="24px" h="24px" />
									<Text ml={4}>Pinpoint bug introductions</Text>
								</Card>
								<Card feature>
									<Icon
										name="github-octocat"
										color="red.700"
										w="24px"
										h="24px"
									/>
									<Text ml={4}>GitHub checks integration</Text>
								</Card>
								<Card feature>
									<Icon name="share" color="red.700" w="24px" h="24px" />
									<Text ml={4}>Unique URLs for sharing</Text>
								</Card>
							</SimpleGrid>
						</Box>
					</SingleSection>
				</Box>

				<Tabs variant="unstyled">
					<Heading
						textAlign="center"
						mt={8}
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
								<Stack
									w={[300, 360, 460]}
									h={380}
									backgroundColor={
										colorMode === "light" ? "gray.50" : "gray.800"
									}
									borderRadius="md"
									p={4}
									spacing={4}
								>
									<Heading
										fontSize="xl"
										fontWeight={900}
										color={colorMode === "light" ? "gray.700" : "white"}
									>
										Test cases
									</Heading>
									<Test
										testCase="Subscription upgrade triggered free trial"
										success={true}
										colorMode={colorMode}
									/>
									<Test
										testCase="`Admin` can edit billing"
										success={false}
										colorMode={colorMode}
									/>
									<Test
										testCase="Account successfully deleted"
										success={false}
										colorMode={colorMode}
									/>
									<Test
										testCase="`Guest` does not have access to team settings"
										success={true}
										colorMode={colorMode}
									/>
									<DarkMode>
										<IconButton
											mt={4}
											borderRadius="sm"
											aria-label="color mode icon"
											icon={colorMode === "light" ? "moon" : "sun"}
											color={colorMode === "light" ? "gray.900" : "white"}
											backgroundColor={
												colorMode === "light" ? "white" : "gray.900"
											}
											_hover={
												colorMode === "light"
													? { backgroundColor: "gray.100" }
													: { backgroundColor: "gray.700" }
											}
											onClick={() => {
												const newColorMode: LightOrDark =
													colorMode === "light" ? "dark" : "light"
												setColorMode(newColorMode)
											}}
										/>
									</DarkMode>
								</Stack>
							</DoubleSection>

							<DoubleSection
								reverse
								heading="UI first generation"
								text="Staging environments are important for business stakeholders for product learning and manual testing. Meeshkan allows you to spin-up environments on demand, and define test cases — all in the User Interface."
							>
								<Box w={400} h={256} backgroundColor="gray.50" />
							</DoubleSection>

							<DoubleSection
								heading="Inactive environments shut themselves off"
								text="When you're focused on shipping as fast as you can, you shouldn't have to look back. Set up an inactive threshold and don't pay for unused environments."
							>
								<Box w={400} h={256} backgroundColor="gray.50" />
							</DoubleSection>
						</TabPanel>
						<TabPanel>
							<DoubleSection
								heading="Ship a container and we'll take care of the rest"
								text="Meeshkan builds staging environments on top of a containerized version of your service, adding the data and integrations needed for PMs to conduct their acceptance tests. Integrates with AWS, Azure DevOps, CircleCI, Travis and Jenkins."
							>
								<Image src={devFlow} w="400px" h="256px" mx="auto" />
							</DoubleSection>

							<DoubleSection
								reverse
								heading="Instantly generate environment data"
								text="Setting up data that can be tested with is repetitive and inefficient. Meeshkan creates a sandbox around your database schema, auto-populating environments with test data."
							>
								<Box w={400} h={256} backgroundColor="gray.50" />
							</DoubleSection>

							<DoubleSection
								heading="Run defined and generated test cases, every commit"
								text="Remove the risk of sloppy regression bugs from slipping through. Using Machine Learning, Meeshkan generates 10,000+ test cases for the stateful logic of your app. You can also pre-define specific test cases that are run every commit."
							>
								<Box w={400} h={256} backgroundColor="gray.50" />
							</DoubleSection>
						</TabPanel>
					</TabPanels>
				</Tabs>

				<SingleSection>
					<Box backgroundColor="gray.900" p={8} borderRadius="md">
						<Heading
							mb={2}
							color="white"
							as="h2"
							fontSize={["3xl", "3xl", "3xl", "4xl"]}
							fontWeight={900}
							letterSpacing="wide"
							lineHeight="short"
							textAlign="center"
						>
							Cut your staging bill in half
						</Heading>
						<Text
							mb={4}
							fontSize="2xl"
							lineHeight="short"
							color="gray.200"
							textAlign="center"
						>
							Don't pay for staging environments you don't need. Meeshkan
							automatically tears down your staging environment when you're
							finished with your tests.
						</Text>
						<Flex
							as="form"
							// @ts-expect-error
							name="staging-signup-2"
							data-netlify="true"
							data-netlify-honeypot="bot-field"
							method="POST"
							action="/success/"
							id="staging-signup-2"
							align="flex-end"
							w={["full", "full", 600]}
							direction={["column", "column", "row"]}
							mx="auto"
						>
							<input type="hidden" name="bot-field" />
							<input type="hidden" name="form-name" value="staging-signup-2" />
							<DarkMode>
								<FormControl isRequired mr={[0, 0, 4]} mb={[4, 4, 0]} w="100%">
									<FormLabel htmlFor="email" fontWeight={700} color="white">
										Email
									</FormLabel>
									<Input
										type="email"
										name="email"
										id="email"
										borderRadius="sm"
										fontWeight={500}
										color="gray.100"
									/>
								</FormControl>
							</DarkMode>
							<Button
								aria-label="Sign up"
								variantColor="red"
								borderRadius="sm"
								fontWeight={900}
								type="submit"
								w={["100%", "100%", "auto"]}
								minW="fit-content"
							>
								Create your environment
							</Button>
						</Flex>
					</Box>
				</SingleSection>
			</Layout>
		</>
	)
}

export default StagingEnvironmentPage
