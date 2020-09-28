import React, { useState } from "react"
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
	Stack,
	DarkMode,
	IconButton,
	useDisclosure,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	FormControl,
	FormLabel,
	Input,
} from "@chakra-ui/core"
import SEO from "../../components/molecules/seo"
import Layout from "../../components/templates/layout"
import { SingleSection } from "../../components/organisms/singleSection"
import { DoubleSection } from "../../components/organisms/doubleSection"
import { useForm } from "react-hook-form"
import { navigate } from "gatsby"
// @ts-expect-error
import testingEnvironment from "../../static/testingEnvironment.png"
// @ts-expect-error
import devFlow from "../../static/devFlow.png"
import Test from "../../components/molecules/test"

type LightOrDark = "light" | "dark"

const TestingEnvironmentPage = () => {
	const startingColor: LightOrDark = "light"
	const [colorMode, setColorMode] = useState<LightOrDark>(startingColor)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { handleSubmit, register } = useForm({ mode: "onChange" })

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
			)
			.join("&")
	}

	const onSubmit = (data, e) => {
		e.preventDefault()
		// console.log(JSON.stringify(data))
		// e.target.submit()

		const form = e.target
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": "staging-signup",
				name: data.name,
				email: data.email,
			}),
		})
			.then((response) => {
				// reset()
				navigate(form.getAttribute("action"))
				console.log(response)
			})
			.catch((error) => {
				console.log(error)
			})

		// 	let formInfo = encode({
		// 		"form-name": "staging-signup",
		// 		name: values.name,
		// 		email: values.email,
		// 	})

		// 	fetch("/", {
		// 		method: "POST",
		// 		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		// 		body: formInfo,
		// 	})
		// 		.then(() => () => navigate("/success/"))
		// 		.catch((error) => alert(error))
	}
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
								onClick={onOpen}
							>
								Get started
							</Button>
						</Box>
						<Image src={testingEnvironment} w="400px" h="256px" mx="auto" />
					</Flex>
				</SingleSection>

				<Modal onClose={onClose} isOpen={isOpen} isCentered size="xl">
					<ModalOverlay />
					<ModalContent borderRadius="md">
						<ModalHeader fontWeight={900}>Sign up for access</ModalHeader>
						<ModalCloseButton />
						<Box
							as="form"
							// @ts-expect-error
							name="staging-signup"
							data-netlify="true"
							data-netlify-honeypot="bot-field"
							method="POST"
							action="/success/"
							id="staging-signup"
							onSubmit={handleSubmit(onSubmit)}
						>
							<ModalBody>
								<input type="hidden" name="bot-field" />
								<input type="hidden" name="form-name" value="staging-signup" />
								<FormControl mb={4} w="100%">
									<FormLabel htmlFor="name" fontWeight={700}>
										Name
									</FormLabel>
									<Input
										type="text"
										name="name"
										id="name"
										ref={register}
										borderRadius="sm"
										placeholder="Your name"
										fontWeight={500}
									/>
								</FormControl>
								<FormControl isRequired mb={4} w="100%">
									<FormLabel htmlFor="email" fontWeight={700}>
										Email
									</FormLabel>
									<Input
										type="email"
										name="email"
										id="email"
										ref={register}
										borderRadius="sm"
										placeholder="Your email"
										fontWeight={500}
									/>
								</FormControl>
							</ModalBody>
							<ModalFooter>
								<Button
									type="submit"
									aria-label="sign up"
									variantColor="red"
									borderRadius="sm"
									fontWeight={900}
									minW="fit-content"
								>
									Submit
								</Button>
							</ModalFooter>
						</Box>
					</ModalContent>
				</Modal>

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
						</TabPanel>
						<TabPanel>
							<DoubleSection
								heading="Ship a container and we'll take care of the rest"
								text="Meeshkan builds staging environments on top of a containerized version of your service, adding the data and integrations needed for PMs to conduct their acceptance tests. Integrates with AWS, Azure DevOps, CircleCI, Travis and Jenkins."
							>
								<Image src={devFlow} w="400px" h="256px" mx="auto" />
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

export default TestingEnvironmentPage
