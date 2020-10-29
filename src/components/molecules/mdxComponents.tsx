import React from "react"
import {
	Heading,
	Text,
	Image,
	List,
	ListItem,
	Box,
	Divider,
	Code,
	Alert,
} from "@chakra-ui/core"
import CodeBlock from "./codeBlock"
import { UniversalLink } from "../atoms/UniversalLink"
import Video from "../atoms/video"
import RequestAccess from "./requestAccessForm"

type DocsHeadingProps = {
	id: string
	children: Object
}

export const DocsHeading = ({ id, children, ...props }: DocsHeadingProps) => (
	<>
		<Heading
			mb={4}
			mt={8}
			letterSpacing="wide"
			id={id}
			// @ts-ignore
			css={{
				"&[id]:before": {
					display: "block",
					height: " 6rem",
					marginTop: "-6rem",
					visibility: "hidden",
					content: `""`,
				},
				"&[id]:hover a": { opacity: 1 },
			}}
			pointerEvents="auto"
			{...props}
		>
			<a href={`#${id}`}>{children}</a>
			<Box
				aria-label="anchor"
				as="a"
				color="blue.500"
				fontWeight="normal"
				outline="none"
				_focus={{ opacity: 1, boxShadow: "outline" }}
				opacity={0}
				ml={2}
				href={`#${id}`}
			>
				#
			</Box>
		</Heading>
	</>
)

const components = {
	h1: (props) => (
		<Heading
			{...props}
			as="h1"
			fontSize={["3xl", "4xl", "5xl"]}
			mb={12}
			color="gray.900"
			fontWeight={900}
			mt={4}
		>
			{props.children}
		</Heading>
	),
	h2: (props) => (
		<DocsHeading
			as="h2"
			fontSize="3xl"
			fontWeight="900"
			{...props}
		></DocsHeading>
	),
	h3: (props) => (
		<DocsHeading as="h3" fontSize="2xl" fontWeight="800" {...props} />
	),
	h4: (props) => (
		<DocsHeading as="h4" fontSize="lg" fontWeight="700" {...props} />
	),
	h5: (props) => (
		<DocsHeading as="h5" fontSize="md" fontWeight="600" {...props} />
	),
	h6: (props) => (
		<DocsHeading as="h6" fontSize="sm" fontWeight="500" {...props} />
	),
	p: (props) => (
		<Text as="p" mt={4} lineHeight="tall" {...props}>
			{props.children}
		</Text>
	),
	blockquote: (props) => (
		<Alert
			my={6}
			rounded="sm"
			variant="left-accent"
			backgroundColor="gray.50"
			color="gray.500"
			fontWeight="500"
			fontStyle="italic"
			status="info"
			css={{ "> *:first-of-type": { marginTop: 0 } }}
			{...props}
		>
			{props.children}
		</Alert>
	),
	inlineCode: (props) => (
		<Code colorScheme="cyan" fontSize="inherit" {...props} />
	),
	hr: (props) => <Divider borderColor="gray.100" my={6} {...props} />,
	a: (props) => <UniversalLink color="blue.500" {...props} />,
	img: (props) => <Image {...props} rounded="sm" />,
	pre: (props) => <Box my="2em" fontSize="inherit" rounded="sm" {...props} />,
	code: CodeBlock,
	ul: (props) => (
		<List styleType="disc" my={4} spacing={2} {...props}>
			{props.children}
		</List>
	),
	ol: (props) => (
		<List as="ol" styleType="decimal" my={4} spacing={2} {...props}>
			{props.children}
		</List>
	),
	li: (props) => <ListItem {...props}>{props.children}</ListItem>,
	table: (props) => (
		<Box as="table" textAlign="left" mt={6} width="full" {...props} />
	),
	// tr:,
	td: (props) => (
		<Box
			as="td"
			p={2}
			borderTopWidth="1px"
			borderColor="inherit"
			fontSize="sm"
			whiteSpace="normal"
			{...props}
		/>
	),
	th: (props) => (
		<Box as="th" p={2} fontWeight="semibold" fontSize="sm" {...props} />
	),
	thematicBreak: (props) => <Box height={6} {...props} />,
	Video,
	RequestAccess,
}

export default components
