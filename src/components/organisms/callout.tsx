import React from "react"
import {
	Box,
	Heading,
	Flex,
	Button,
	useColorModeValue,
	LightMode,
	Input,
} from "@chakra-ui/react"

type CalloutProps = {
	heading: string
}

const Callout = ({ heading }: CalloutProps) => {
	return (
		<>
			<Flex
				maxW="1200px"
				mx="auto"
				justifyContent="center"
				gridColumn={["1", "1", "2"]}
				position="relative"
			>
				<Box
					as="section"
					w="100%"
					h="100%"
					bg={useColorModeValue("gray.100", "gray.900")}
					borderRadius="lg"
					mx="auto"
					maxW={1200}
					p={8}
					zIndex="1"
				>
					<Heading as="h2" textStyle="h2" mb={6} textAlign="center">
						{heading}
					</Heading>
					<Flex
						maxW="600px"
						mx="auto"
						border="1px solid"
						borderColor={useColorModeValue("gray.300", "gray.700")}
						borderRadius="xl"
						p={2}
						transition="all 0.2s"
						_hover={{ borderColor: useColorModeValue("gray.400", "gray.600") }}
						_focusWithin={{
							borderColor: useColorModeValue("blue.400", "blue.600"),
						}}
					>
						<Input
							placeholder="shipit@meeshkan.com"
							mr={4}
							border="none"
							_focus={{}}
						/>
						<LightMode>
							<Button minW="fit-content">Get early access</Button>
						</LightMode>
					</Flex>
				</Box>
				<Box
					w="100%"
					h="100%"
					borderRadius="lg"
					background="conic-gradient(from 180deg at 50% 50%, #526EE0 0deg, #52E0C4 139.2deg, #DC1853 285.11deg, #526EE0 360deg)"
					filter="blur(150px)"
					position="absolute"
					top={0}
					left={0}
				/>
			</Flex>
		</>
	)
}

export default Callout
