import React from "react"
import {
	Box,
	Code,
	Heading,
	Text,
	Stack,
	List,
	ListItem,
	useColorModeValue,
} from "@chakra-ui/react"

type ChangelogItemProps = {
	version: string
	date: string
	title?: string
	intro: string
	updates: Array<string>
}

const ChangelogItem = ({
	version,
	date,
	title,
	intro,
	updates,
}: ChangelogItemProps) => {
	return (
		<Stack
			as="article"
			direction="row"
			spacing={12}
			maxW="800px"
			mt={16}
			pb={16}
			mx="auto"
			_notLast={{
				borderBottom: "1px solid",
				borderBottomColor: useColorModeValue("gray.200", "gray.700"),
			}}
		>
			<Box>
				<Code
					colorScheme="cyan"
					fontWeight="700"
					p={2}
					borderRadius="md"
					mb={2}
				>
					v{version}
				</Code>
				<Text>{date}</Text>
			</Box>

			<Box flex="1">
				{title ? (
					<Heading as="h2" pb={3}>
						{title}
					</Heading>
				) : (
					<Heading as="h2" pb={3}>
						Release v{version}
					</Heading>
				)}

				<Text>{intro}</Text>
				<List
					spacing={4}
					pt={6}
					listStylePosition="outside"
					colorScheme="cyan"
					listStyleType="lower-roman"
				>
					{updates.map((item) => (
						<ListItem lineHeight="1.6">{item}</ListItem>
					))}
				</List>
			</Box>
		</Stack>
	)
}

export default ChangelogItem
