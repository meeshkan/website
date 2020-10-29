import React, { useState } from "react"
import {
	Box,
	Heading,
	Text,
	Stack,
	Input,
	Button,
	DarkMode,
	Icon,
	Flex,
	Badge,
	FormControl,
	FormLabel,
	Collapse,
} from "@chakra-ui/core"
import { useMixpanel } from "gatsby-plugin-mixpanel"
import SEO from "../components/molecules/seo"
import Layout from "../components/templates/layout"
import { SingleSection } from "../components/organisms/singleSection"
import { DoubleSection } from "../components/organisms/doubleSection"
import { useForm } from "react-hook-form"
import GenerateTests from "../components/organisms/home/generateTests"
import HowDoesMeeshkanWork from "../components/organisms/home/meeshkanWorks"
import Callout from "../components/organisms/callout"
import TestResults from "../components/organisms/testResults"

type ItemProp = {
	text: string
}

function ListItem({ text }: ItemProp) {
	return (
		<Stack isInline mt={6} alignItems="center" spacing={4}>
			<Icon name="checkmark" color="cyan.500" size="24px" />
			<Text fontWeight={500} color="gray.700">
				{text}
			</Text>
		</Stack>
	)
}

const TestGraphqlPage = () => {
	const [endpointSubmit, setEndpointSubmit] = useState(false)
	const [testing, setTesting] = useState(false)
	const [testResults, setTestResults] = useState(JSON)
	const { handleSubmit, register } = useForm()
	const [show, setShow] = React.useState(false)
	const mixpanel = useMixpanel()

	const onSubmit = (mixpanel) => (values) => {
		setTesting(true)
		let endpointData = JSON.stringify({
			endpoint: values.endpoint,
			headers: {
				cookie: values.cookie,
				authorization: values.authorization,
			},
		})
		mixpanel.track("Test a graphql endpoint", {
			to: "https://meeshkan.io/runr",
			from: "https://meeshkan.com/test-graphql/",
			c2a: "Test endpoint",
			payload: endpointData,
		})
		fetch("https://meeshkan.io/runr", {
			method: "POST",
			body: endpointData,
			headers: {
				"Api-Key": process.env.GATSBY_MINI_TESTER_AUTH,
			},
		})
			.then((res) => {
				setTesting(true)
				setEndpointSubmit(true)
				if (res.status !== 200) {
					console.log(
						"Looks like there was a problem. Status Code: " + res.status
					)
					return
				}

				res.json().then((data) => {
					console.log(data)
					setTestResults(data)
				})
				setTesting(false)
			})
			.catch((error) => {
				error.message
			})
	}

	return (
		<Layout>
			<SEO
				pageTitle="Testing GraphQL"
				pageDescription="Meeshkan is a GraphQL dedicated testing tool that automatically triggers on every commit."
				pageUrl="https://meeshkan.com/test-graphql/"
			/>
			<SingleSection>
				<Flex justify="center" mb={3} mt={12}>
					<Badge
						colorScheme="cyan"
						letterSpacing="widest"
						fontSize="14px"
						fontWeight={600}
						rounded="sm"
						padding="0px 4px"
						minH="auto"
					>
						TESTING GRAPHQL
					</Badge>
				</Flex>
				<Heading
					as="h1"
					fontSize={["3xl", "4xl", "5xl"]}
					mb={6}
					textAlign={["left", "left", "center"]}
					color="gray.900"
					fontWeight={900}
					letterSpacing="wide"
					lineHeight="short"
				>
					Your search for dynamic GraphQL testing ends here.
				</Heading>
				<Text
					textAlign={["left", "left", "center"]}
					fontSize={["lg", "xl", "2xl"]}
					lineHeight="short"
					mb={6}
					color="gray.700"
				>
					Meeshkan automatically writes, executes, and reports on a collection
					of user-mimicking tests, guaranteed to give you confidence in critical
					flows.
				</Text>
			</SingleSection>

			<Stack justifyContent="center">
				<Heading
					as="h2"
					color="gray.700"
					fontSize="2xl"
					fontWeight={900}
					my={4}
					letterSpacing="wide"
					lineHeight="short"
					textAlign="center"
				>
					Try it for yourself.
				</Heading>

				<Box
					mb={12}
					backgroundColor="gray.900"
					p={4}
					borderRadius="md"
					mx="auto"
					w={["full", "full", "600px"]}
				>
					<Stack as="form" onSubmit={handleSubmit(onSubmit(mixpanel))}>
						<Flex
							direction={["column", "column", "row"]}
							justify="center"
							alignItems="flex-end"
						>
							<DarkMode>
								<FormControl isRequired mr={[0, 0, 4]} mb={[4, 4, 0]} w="100%">
									<Flex align="baseline">
										<FormLabel fontWeight={700} color="white">
											Endpoint
										</FormLabel>
										<Text
											fontStyle="italic"
											color="gray.500"
											fontWeight={400}
											ml={2}
											fontSize="14px"
										>
											Don't test with production APIs
										</Text>
									</Flex>
									<Input
										name="endpoint"
										ref={register}
										type="url"
										borderColor="gray.500"
										aria-label="Your GraphQL Endpoint"
										borderRadius="sm"
										placeholder="Your GraphQL Endpoint"
										isDisabled={endpointSubmit}
										fontWeight={500}
										color="white"
									/>
								</FormControl>
							</DarkMode>
							<Button
								aria-label="Test Endpoint"
								colorScheme="red"
								borderRadius="sm"
								fontWeight={900}
								type="submit"
								isLoading={testing}
								loadingText="Testing"
								isDisabled={endpointSubmit}
								w={["100%", "100%", "auto"]}
								minW="fit-content"
							>
								Test Endpoint
							</Button>
						</Flex>
						<DarkMode>
							<Button
								size="sm"
								color="white"
								w="fit-content"
								mx="auto"
								borderRadius="sm"
								variant="ghost"
								onClick={() => setShow(!show)}
							>
								{show ? `Less` : `More`} options{" "}
								<Icon name={show ? "chevron-up" : "chevron-down"} ml={2} />
							</Button>
							<Collapse mt={4} isOpen={show}>
								<Flex
									direction={["column", "column", "row"]}
									justify="center"
									alignItems="flex-end"
								>
									<FormControl
										mr={[0, 0, 4]}
										mb={[4, 4, 0]}
										w="100%"
										maxW={["full", "full", "100%"]}
									>
										<FormLabel fontWeight={700} color="white">
											Cookie header
										</FormLabel>
										<Input
											name="cookie"
											ref={register}
											borderColor="gray.500"
											aria-label="Your GraphQL Endpoint cookie header"
											borderRadius="sm"
											isDisabled={endpointSubmit}
											fontWeight={500}
											color="white"
										/>
									</FormControl>
									<FormControl w="100%" maxW={["full", "full", "100%"]}>
										<FormLabel fontWeight={700} color="white">
											Authorization header
										</FormLabel>
										<Input
											name="authorization"
											ref={register}
											borderColor="gray.500"
											aria-label="Your GraphQL Endpoint authorization"
											borderRadius="sm"
											isDisabled={endpointSubmit}
											fontWeight={500}
											color="white"
										/>
									</FormControl>
								</Flex>
							</Collapse>
						</DarkMode>
					</Stack>
					{testing && (
						<Text
							d="block"
							color="cyan.400"
							mt={4}
							mx="auto"
							textAlign="center"
						>
							{testing === true
								? `Testing takes ~30 seconds`
								: endpointSubmit === true
								? `Your test results are listed below`
								: null}
						</Text>
					)}
				</Box>
				<Text
					color="gray.700"
					fontStyle="italic"
					maxW="500px"
					textAlign="center"
					mx="auto"
					mt={4}
				>
					Enter your GraphQL endpoint. We’ll return dynamically generated tests
					just for you.
				</Text>
			</Stack>

			{JSON.stringify(testResults).length > 2 ? (
				<TestResults
					// @ts-expect-error
					exchangeLength={testResults.commands[0].exchange.length}
					testResults={testResults}
					test={endpointSubmit}
				/>
			) : null}

			<DoubleSection
				heading="A GraphQL testing tool that is dynamic to Schema changes"
				text="Someone makes a change to your GraphQL schema, the existing tests become outdated and now you're stuck rewriting your tests. We know because we've been there. Meeshkan uses GraphQL introspection to dynamically generate tests based on your schema."
			>
				<GenerateTests />
			</DoubleSection>

			<DoubleSection
				reverse={true}
				heading="Built with the GraphQL community in mind."
				text="Meeshkan works particularly well if you’ve built your GraphQL API from scratch using tools like Prisma or Apollo. But it’s not limited to that. No matter how many tests you already have or what language your app is written in - Meeshkan fits right into your existing stack."
			>
				<Icon name="graphqlSnippet" size="100%" />
			</DoubleSection>

			<HowDoesMeeshkanWork />

			<SingleSection>
				<Box maxW="750px" mx="auto">
					<Heading
						fontFamily="Inter"
						fontWeight="900"
						fontSize="40px"
						lineHeight="140%"
						textAlign="center"
						letterSpacing="0.05em"
					>
						The best of automated testing tools - plus a little more.
					</Heading>
					<Box maxW="546px" mx="auto">
						<ListItem text="Weekly audit reports available in the Meeshkan webapp." />
						<ListItem
							text="Visualize auth flows and control who has access to certain
								queries."
						/>
						<ListItem text="Uncovered bugs sorted by priority." />
					</Box>
				</Box>
			</SingleSection>

			<Callout
				heading="Tired of API testing that doesn’t keep up? Get started with automated
					GraphQL testing today."
			/>
		</Layout>
	)
}

export default TestGraphqlPage
