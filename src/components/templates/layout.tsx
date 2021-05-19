import React from "react"
import { Navigation } from "../organisms/navigation"
import { Footer } from "../organisms/footer"
import { Box, Flex, IconButton, Text, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "../../../theme/icons"

type LayoutProps = {
	children: Object
}

const Layout = ({ children }: LayoutProps) => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<>
			<IconButton
				onClick={() => toggleColorMode()}
				title={`Toggle ${colorMode === "dark" ? "light" : "dark"} mode`}
				aria-label="Light/Dark mode toggle"
				icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
				position="fixed"
				left={0}
				top="50vh"
				colorScheme="gray"
				borderLeftRadius="0"
				size="lg"
				zIndex={10}
				display={["none", "none", "flex"]}
			/>
			<Box minH="90vh" px={[4, 4, 6, 8]}>
				<Navigation />
				<main>{children}</main>
			</Box>
			<Box
				mx={2}
				mb={2}
				position="fixed"
				bottom={0}
				right={0}
				left={0}
				zIndex={10}
			>
				<Flex
					align="center"
					justify="space-between"
					p={1}
					backgroundColor="white"
					borderRadius="md"
				>
					<Text
						color="gray.900"
						fontWeight="600"
						fontSize={["sm", "md"]}
						ml={3}
					>
						We're on Product Hunt! 🎉
					</Text>
					<a
						// href="https://www.producthunt.com/posts/pegboard-synth?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-pegboard-synth"
						target="_blank"
					>
						<img
							src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=296386&amp;theme=light"
							alt="Write UI tests by recording your screen | Product Hunt"
							style={{
								width: "auto",
								height: "32px",
							}}
						/>
					</a>
				</Flex>
				<Box
					w="100%"
					h="100%"
					borderRadius="lg"
					background="conic-gradient(from 180deg at 50% 50%, #526EE0 0deg, #52E0C4 139.2deg, #DC1853 285.11deg, #526EE0 360deg)"
					filter="blur(25px)"
					position="absolute"
					top={0}
					left={0}
					zIndex={-1}
				/>
			</Box>
			<Footer />
		</>
	)
}

export default Layout
