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
	useDisclosure,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Select,
	Checkbox,
	LightMode,
} from "@chakra-ui/core"
import { Card } from "../../components/atoms/card"
import { useForm } from "react-hook-form"
import SEO from "../../components/molecules/seo"
import Test from "../../components/molecules/test"
import { SingleSection } from "../../components/organisms/singleSection"
import { DoubleSection } from "../../components/organisms/doubleSection"
import Layout from "../../components/templates/layout"
// @ts-expect-error
import testingEnvironment from "../../static/testingEnvironment.png"
// @ts-expect-error
import devFlow from "../../static/devFlow.png"

type FeatureProps = {
	children: Object
}

const FeatureCard = ({ children }: FeatureProps) => {
	return (
		<Card shadow padding={4}>
			<Stack isInline spacing={4} align="center" h="100%">
				{children}
			</Stack>
		</Card>
	)
}

type LightOrDark = "light" | "dark"

const StagingEnvironmentPage = () => {
	const startingColor: LightOrDark = "light"
	const [colorMode, setColorMode] = useState<LightOrDark>(startingColor)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { handleSubmit, register, formState } = useForm()
	const [formSubmit, setFormSubmit] = useState(false)

	function onSubmit(values) {
		let requestAccessData = JSON.stringify({
			text: `${values.name} has requested access to *pre-release testing* Meeshkan. \n You can reach them at: _*${values.email}*_. \n They are the _*${values.position}*_ at their company.`,
		})

		fetch(
			"https://hooks.slack.com/services/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",
			{
				method: "POST",
				// mode: "no-cors",
				body: requestAccessData,
				headers: { "Content-type": "application/json" },
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok")
				}
				setFormSubmit(true)
			})
			.catch((error) => {
				console.error("Error:", error)
			})
	}

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
								Faster &amp; cheaper staging environments for pre-release testing
							</Heading>
							<Text
								fontSize={["lg", "xl", "2xl"]}
								lineHeight="short"
								mb={6}
								color="gray.700"
							>
								Cut your manual testing time and cloud bill in half with
								quick-to-deploy staging environments.
							</Text>
						</Box>
						<Image
							src={testingEnvironment}
							w={["400px", "auto"]}
							h={["auto", "256px"]}
							mx="auto"
							mb={[8, 8, 0]}
						/>
					</Flex>
					<Button
						aria-label="Request access"
						variantColor="red"
						borderRadius="sm"
						fontWeight={900}
						type="submit"
						w={["100%", "100%", "auto"]}
						minW="fit-content"
						onClick={onOpen}
					>
						Request access
					</Button>
				</SingleSection>

				{/* modal start */}
				<Modal onClose={onClose} isOpen={isOpen} isCentered>
					<ModalOverlay />
					<ModalContent
						backgroundColor="gray.900"
						color="white"
						borderRadius="md"
						p={4}
					>
						<DarkMode>
							<ModalHeader fontWeight={900} px="0">
								Request access to Meeshkan
							</ModalHeader>
							<ModalCloseButton />
							<ModalBody px="0">
								{formSubmit ? (
									<Stack
										spacing={4}
										as="form"
										onSubmit={handleSubmit(onSubmit)}
									>
										<FormControl>
											<FormLabel htmlFor="name" fontWeight={700}>
												Name
											</FormLabel>
											<Input
												type="text"
												name="name"
												ref={register}
												aria-label="Enter your name"
												borderRadius="sm"
												placeholder="Janet"
												isDisabled={formSubmit}
												fontWeight={500}
												backgroundColor="gray.800"
												_hover={{
													backgroundColor: "gray.700",
												}}
											/>
										</FormControl>
										<FormControl isRequired>
											<FormLabel htmlFor="email" fontWeight={700}>
												Email
											</FormLabel>
											<Input
												type="email"
												name="email"
												ref={register}
												aria-label="Enter your business email"
												borderRadius="sm"
												placeholder="you@company.com"
												isDisabled={formSubmit}
												fontWeight={500}
												backgroundColor="gray.800"
												_hover={{
													backgroundColor: "gray.700",
												}}
											/>
										</FormControl>
										<FormControl isRequired>
											<FormLabel htmlFor="position" fontWeight={700}>
												What is your title?
											</FormLabel>
											<Select
												name="position"
												placeholder="i.e. CTO, Product manager, etc"
												backgroundColor="gray.800"
												_hover={{
													backgroundColor: "gray.700",
												}}
												ref={register}
											>
												<option value="CTO / Technical manager">
													CTO / Technical manager
												</option>
												<option value="Product Manager">Product manager</option>
												<option value="Developer">Developer</option>
												<option value="Other">Other</option>
											</Select>
										</FormControl>

										<LightMode>
											<Button
												aria-label="Request access"
												variantColor="red"
												borderRadius="sm"
												fontWeight={900}
												type="submit"
												minW="fit-content"
												w="full"
												mt={8}
												isLoading={formState.isSubmitting}
												loadingText="submitting"
												isDisabled={formSubmit}
											>
												Submit
											</Button>
										</LightMode>
									</Stack>
								) : (
									<Text>hey</Text>
								)}
							</ModalBody>
						</DarkMode>
					</ModalContent>
				</Modal>
				{/* modal end */}

				<Box backgroundColor="gray.50" borderRadius={4} my={12}>
					<SingleSection heading="Designed for the smoothest release cycle you've ever experienced">
						<SimpleGrid
							spacing={8}
							columns={[1, 2, 3]}
							px={4}
							mt={12}
							fontWeight={500}
						>
							<FeatureCard>
								<Icon name="activity" color="red.700" w="24px" h="24px" />
								<Text>Health metrics dashboard</Text>
							</FeatureCard>
							<FeatureCard>
								<Icon name="server" color="red.700" w="24px" h="24px" />
								<Text>Full stack staging</Text>
							</FeatureCard>
							<FeatureCard>
								<Icon name="zap" color="red.700" w="24px" h="24px" />
								<Text>Dynamically generated tests</Text>
							</FeatureCard>
							<FeatureCard>
								<Icon name="crosshair" color="red.700" w="24px" h="24px" />
								<Text>Pinpoint bug introductions</Text>
							</FeatureCard>
							<FeatureCard>
								<Icon name="github-octocat" color="red.700" w="24px" h="24px" />
								<Text>GitHub checks integration</Text>
							</FeatureCard>
							<FeatureCard>
								<Icon name="share" color="red.700" w="24px" h="24px" />
								<Text>Unique URLs for sharing</Text>
							</FeatureCard>
						</SimpleGrid>
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
							for Product Managers
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
								text="Start your staging environment with zero, ten, or a million users. Meeshkan loads your staging environment in a state that reflects your testing acceptance criteria. When you're done testing, the staging environment is saved and stored, saving thousands of dollars off your cloud bill."
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
								<Box w="100%" h={256} backgroundColor="gray.50" />
							</DoubleSection>

							<DoubleSection
								heading="Inactive environments shut themselves off"
								text="When you're focused on shipping as fast as you can, you shouldn't have to look back. Set up an inactive threshold and don't pay for unused environments."
							>
								<Box w="100%" h={256} backgroundColor="gray.50" />
							</DoubleSection>
						</TabPanel>
						<TabPanel>
							<DoubleSection
								heading="Ship a container and we'll take care of the rest"
								text="Meeshkan builds staging environments on top of a containerized version of your service, adding the data and integrations needed for PMs to conduct their acceptance tests. Integrates with AWS, Azure DevOps, CircleCI, Travis and Jenkins."
							>
								<Image src={devFlow} mx="auto" />
							</DoubleSection>

							<DoubleSection
								reverse
								heading="Instantly generate environment data"
								text="Setting up data that can be tested with is repetitive and inefficient. Meeshkan creates a sandbox around your database schema, auto-populating environments with test data."
							>
								<Box w="100%" h={256} backgroundColor="gray.50" />
							</DoubleSection>

							<DoubleSection
								heading="Run defined and generated test cases on every commit"
								text="Remove the risk of sloppy regression bugs from slipping through. Using Machine Learning, Meeshkan generates 10,000+ test cases for the stateful logic of your app. You can also pre-define specific test cases that are run on every commit."
							>
								<Box w="100%" h={256} backgroundColor="gray.50" />
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
							type="submit"
							w={["100%", "100%", "auto"]}
							minW="fit-content"
							onClick={onOpen}
						>
							Create your environment
						</Button>
					</Box>
				</SingleSection>
			</Layout>
		</>
	)
}

export default StagingEnvironmentPage
