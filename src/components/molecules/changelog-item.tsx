import React from "react"
import {
	Box,
	Code,
	Heading,
	Text,
	Stack,
	List,
	ListItem,
} from "@chakra-ui/react"

type ChangelogItemProps = {
	version: string
	intro: string
	updates: [string]
}

const ChangelogItem = ({ version, intro, updates }: ChangelogItemProps) => {
	return (
		<Stack
			as="article"
			direction="row"
			spacing={12}
			maxW="800px"
			my={16}
			mx="auto"
		>
			<Box>
				<Code colorScheme="cyan" fontWeight="700" p={2} borderRadius="md">
					v0.5.1
				</Code>
				<Text>Feb 18, 2021</Text>
			</Box>

			<Box flex="1">
				<Heading as="h2" pb={3}>
					Release v{version}
				</Heading>
				<Text>{intro}</Text>
				<List
					spacing={2}
					pt={6}
					listStylePosition="outside"
					colorScheme="cyan"
					listStyleType="hebrew"
				>
					{updates.map((item) => (
						<ListItem lineHeight="1.6">{item}</ListItem>
					))}
					<ListItem lineHeight="1.6">
						Add filtering and sorting to the user stories table
					</ListItem>
					<ListItem lineHeight="1.6">
						Update styling of user stories page to be consistent with test runs
					</ListItem>
					<ListItem lineHeight="1.6">
						Add the project picker into settings sidebar for context of the
						project you're in. Especially helpful if you have several projects.
					</ListItem>
					<ListItem lineHeight="1.6">
						New user story description field is added. Use this to add context
						to the outcome of an individual user story, or documentation for
						what to watch for with it.
					</ListItem>
				</List>
			</Box>
		</Stack>
	)
}

export default ChangelogItem
