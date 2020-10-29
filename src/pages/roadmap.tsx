import React from "react"
import {
	SimpleGrid,
	Text,
	Heading,
	Flex,
	Badge,
	Box,
	Code,
	Stack,
	List,
	ListItem,
	Button,
	FormControl,
	FormLabel,
	Input,
} from "@chakra-ui/core"
import { SingleSection } from "../components/organisms/singleSection"
import Layout from "../components/templates/layout"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/molecules/seo"
import { UniversalLink } from "../components/atoms/UniversalLink"

type LinkProps = {
	url: string
	label: string
}

type MilestoneProps = {
	title: string
	description: string
	state: string
	scope?: number
	completedScope?: number
	link?: Array<LinkProps>
}

const Milestone = ({
	title,
	description = "",
	state,
	scope,
	completedScope,
	link,
}: MilestoneProps) => {
	const complete = Math.round(
		((completedScope != null ? completedScope : 0) /
			(scope != null ? scope : 0)) *
			100
	)
	var circumference = Math.PI * (90 * 2)
	let completeAmount = Math.round(((100 - complete) / 100) * circumference)
	return (
		<Box
			backgroundColor="white"
			borderRadius="md"
			p={4}
			borderLeft="4px solid"
			borderLeftColor={
				state === "started"
					? "cyan.500"
					: state === "completed"
					? "red.500"
					: state === "planned"
					? "blue.500"
					: "gray.500"
			}
		>
			<Heading as="h3" fontSize="lg" color="gray.700" mb={2}>
				{title}
			</Heading>
			<Stack isInline mb={4} spacing={4} alignItems="center">
				<Code
					colorScheme={
						state === "started"
							? "cyan"
							: state === "completed"
							? "red"
							: state === "planned"
							? "blue"
							: "gray"
					}
					color={
						state === "started"
							? "cyan.600"
							: state === "completed"
							? "red.600"
							: state === "planned"
							? "blue.600"
							: "gray.600"
					}
					fontWeight={700}
					h="max-content"
				>
					{state === "started"
						? "In progress"
						: state === "completed"
						? "Completed"
						: state === "planned"
						? "Planned"
						: "Backlog"}
				</Code>
				{complete >= 1 && state !== "completed" ? (
					<Flex align="center" justify="center">
						<svg
							width="16"
							height="16"
							viewBox="0 0 200 200"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								r="90"
								cx="100"
								cy="100"
								fill="transparent"
								strokeDasharray="565.48"
								strokeDashoffset="0"
								style={{ stroke: "#E9FBF8", strokeWidth: "1em" }}
							></circle>
							<circle
								id="bar"
								r="90"
								cx="100"
								cy="100"
								fill="transparent"
								strokeDasharray="565.48"
								strokeDashoffset={`${completeAmount}px`}
								style={{ stroke: "#33CCAE", strokeWidth: "1em" }}
							></circle>
						</svg>
						<Text ml={2} color="gray.500">
							{complete}%
						</Text>
					</Flex>
				) : null}
			</Stack>
			<Text color="gray.500" mb={4}>
				{description}
			</Text>
			{link.length > 1 ? (
				<>
					<Heading as="h4" fontSize="md" mb={2}>
						Resources:
					</Heading>
					<List styleType="disc">
						{link.map((link, index) => (
							<ListItem key={index}>
								<UniversalLink to={link.url} color="blue.500">
									{link.label}
								</UniversalLink>
							</ListItem>
						))}
					</List>
				</>
			) : null}
		</Box>
	)
}

const Roadmap = () => {
	const { linear } = useStaticQuery(
		graphql`
			query LINEAR_PROJECTS {
				linear {
					team(id: "e8fdda78-0d24-4610-8a79-da08cf64afb6") {
						projects {
							nodes {
								name
								description
								state
								targetDate
								scopeHistory
								completedScopeHistory
								teams {
									nodes {
										name
									}
								}
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
			}
		`
	)

	const Q3 = linear.team.projects.nodes.filter((project) =>
		project.name.startsWith("Q3 ")
	)
	const Q4 = linear.team.projects.nodes.filter((project) =>
		project.name.startsWith("Q4 ")
	)
	const Q1 = linear.team.projects.nodes.filter((project) =>
		project.name.startsWith("Q1 ")
	)
	const backlog = linear.team.projects.nodes.filter(
		(project) =>
			project.name.startsWith("Q3 ") === false &&
			project.name.startsWith("Q4 ") === false &&
			project.name.startsWith("Q1 ") === false &&
			project.state !== "completed" &&
			project.name !== "Improve testing"
	)

	return (
		<Layout>
			<SEO
				pageTitle="Meeshkan Roadmap"
				pageDescription="The Meeshkan roadmap communicating where we are headed as a product."
				pageUrl="https://meeshkan.com/roadmap/"
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
						MEESHKAN - ROADMAP
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
					We’ve got a lot planned!
				</Heading>
				<Text
					textAlign={["left", "left", "center"]}
					fontSize={["lg", "xl", "2xl"]}
					lineHeight="short"
					mb={4}
					color="gray.700"
				>
					This roadmap is directly connected to our project management software.
					Our roadmap is serious, not just for show!
				</Text>

				<Flex
					as="form"
					action="/success/"
					name="roadmap-updates"
					data-netlify="true"
					method="post"
					data-netlify-honeypot="bot-field"
					direction={["column", "column", "row"]}
					justify="center"
					alignItems="flex-end"
				>
					<input type="hidden" name="bot-field" />
					<input type="hidden" name="form-name" value="roadmap-updates" />
					<FormControl
						isRequired
						mr={[0, 0, 4]}
						mb={[4, 4, 0]}
						w="100%"
						maxW={["full", "full", "400px"]}
					>
						<FormLabel htmlFor="email" fontWeight={700}>
							Email
						</FormLabel>
						<Input
							type="email"
							name="email"
							aria-label="Enter your business email"
							borderRadius="sm"
							placeholder="Your email"
							fontWeight={500}
						/>
					</FormControl>
					<Button
						colorScheme="red"
						borderRadius="sm"
						fontWeight={900}
						type="submit"
						w={["100%", "100%", "auto"]}
					>
						Recieve updates
					</Button>
				</Flex>
			</SingleSection>

			<SingleSection>
				<Box padding={8} backgroundColor="gray.50" borderRadius="4px" mb={8}>
					<Heading
						as="h2"
						fontSize="2xl"
						mb={4}
						fontFamily="mono"
						color="gray.500"
					>
						Q3 2020
					</Heading>
					<SimpleGrid columns={[1, 1, 2]} spacing={8}>
						{Q3.map((project, index) => (
							<Milestone
								key={index}
								title={project.name.slice(3)}
								description={project.description}
								state={project.state}
								scope={project.scopeHistory.slice(-1)[0]}
								completedScope={project.completedScopeHistory.slice(-1)[0]}
								link={project.links.nodes}
							/>
						))}
					</SimpleGrid>
				</Box>

				<Box padding={8} backgroundColor="gray.50" borderRadius="4px" mb={8}>
					<Heading
						as="h2"
						fontSize="2xl"
						mb={4}
						fontFamily="mono"
						color="gray.500"
					>
						Q4 2020
					</Heading>
					<SimpleGrid columns={[1, 1, 2]} spacing={8}>
						{Q4.map((project, index) => (
							<Milestone
								key={index}
								title={project.name.slice(3)}
								description={project.description}
								state={project.state}
								scope={project.scopeHistory.slice(-1)[0]}
								completedScope={project.completedScopeHistory.slice(-1)[0]}
								link={project.links.nodes}
							/>
						))}
					</SimpleGrid>
				</Box>

				<Box padding={8} backgroundColor="gray.50" borderRadius="4px" mb={8}>
					<Heading
						as="h2"
						fontSize="2xl"
						mb={4}
						fontFamily="mono"
						color="gray.500"
					>
						Q1 2021
					</Heading>
					<SimpleGrid columns={[1, 1, 2]} spacing={8}>
						{Q1.map((project, index) => (
							<Milestone
								key={index}
								title={project.name.slice(3)}
								description={project.description}
								state={project.state}
								scope={project.scopeHistory.slice(-1)[0]}
								completedScope={project.completedScopeHistory.slice(-1)[0]}
								link={project.links.nodes}
							/>
						))}
					</SimpleGrid>
				</Box>

				<Box padding={8} backgroundColor="gray.50" borderRadius="4px" mb={8}>
					<Heading
						as="h2"
						fontSize="2xl"
						mb={4}
						fontFamily="mono"
						color="gray.500"
					>
						Backlog
					</Heading>
					<SimpleGrid columns={[1, 1, 2]} spacing={8}>
						{backlog.map((project, index) => (
							<Milestone
								key={index}
								title={project.name}
								description={project.description}
								state={project.state}
								scope={project.scopeHistory.slice(-1)[0]}
								completedScope={project.completedScopeHistory.slice(-1)[0]}
								link={project.links.nodes}
							/>
						))}
					</SimpleGrid>
				</Box>
			</SingleSection>
		</Layout>
	)
}

export default Roadmap
