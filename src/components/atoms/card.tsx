import React from "react"
import { Box, Heading, Text } from "@chakra-ui/core"
import { UniversalLink } from "./UniversalLink"

type CardProps = {
	children?: Object
	heading?: string
	body?: string
	link?: string
	label?: string
	backgroundColor?: string
	shadow?: boolean
}

export const Card = ({
	children,
	heading,
	body,
	link,
	label,
	backgroundColor = "white",
	shadow = false,
}: CardProps) => {
	return (
		<>
			{link ? (
				<Box
					as={UniversalLink}
					// @ts-ignore
					to={link}
					aria-label={label}
					borderRadius="md"
					backgroundColor={backgroundColor}
					p={[4, 4, 6]}
					position="relative"
					boxShadow={shadow ? '0px 0px 24px 0px rgba(149, 157, 165, 0.2)' : 'none'}
				>
					{heading ? (
						<Heading
							as="h3"
							color="gray.900"
							fontSize="xl"
							fontWeight={900}
							mb={4}
						>
							{heading}
						</Heading>
					) : null}
					{body ? <Text mb={6}>{body}</Text> : null}
					{children}
				</Box>
			) : (
				<Box
					borderRadius="md"
					backgroundColor={backgroundColor}
					p={[4, 4, 6]}
					position="relative"
					boxShadow={shadow ? '0px 0px 24px 0px rgba(149, 157, 165, 0.2)' : 'none'}
				>
					{heading ? (
						<Heading
							as="h3"
							color="gray.900"
							fontSize="2xl"
							fontWeight={900}
							mb={4}
						>
							{heading}
						</Heading>
					) : null}
					{body ? <Text mb={6}>{body}</Text> : null}
					{children}
				</Box>
			)}
		</>
	)
}
