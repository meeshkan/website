import React, { useRef } from "react"
import { Link } from "gatsby"
import {
	Stack,
	IconButton,
	useDisclosure,
	Drawer,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	Button,
	DrawerFooter,
	Flex,
	Divider,
	useColorModeValue,
	Box,
	useColorMode,
} from "@chakra-ui/react"
import NavLink from "../atoms/navLink"
import { UniversalLink } from "../atoms/UniversalLink"
import {
	HamburgerIcon,
	TwitterIcon,
	GitHubIcon,
	LinkedInIcon,
	SunIcon,
	MoonIcon,
} from "../../../theme/icons"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { AnimatedLogo } from "../molecules/animatedLogo"

function SignUpLink() {
	return (
		<Button
			as={UniversalLink}
			// @ts-ignore
			href="https://app.meeshkan.com"
			aria-label="Log in to the Meeshkan webapp"
			variant="ghost"
			lineHeight="normal"
			ml={[0, 0, 8]}
		>
			Sign up
		</Button>
	)
}
function LogInLink() {
	return (
		<Button
			as={UniversalLink}
			// @ts-ignore
			href="https://app.meeshkan.com"
			aria-label="Log in to the Meeshkan webapp"
			variant="ghost"
			fontWeight={600}
			lineHeight="normal"
			colorScheme="gray"
		>
			Log in <ArrowForwardIcon ml={2} />
		</Button>
	)
}

export function Navigation() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { colorMode, toggleColorMode } = useColorMode()
	const btnRef = useRef()

	return (
		<>
			<Stack
				as="nav"
				isInline
				justify="space-between"
				align="center"
				px={4}
				py={3}
				pos="fixed"
				zIndex={1000}
				top={0}
				right={0}
				left={0}
				backgroundColor={useColorModeValue("white", "gray.900")}
				borderBottom="1px solid"
				borderBottomColor={useColorModeValue("gray.100", "gray.800")}
			>
				<Flex align="center">
					<Link to="/" aria-label="Meeshkan home">
						<AnimatedLogo />
					</Link>

					{/* Desktop & Tablet */}
					<Stack isInline display={["none", "none", "flex"]} ml={6}>
						<NavLink text="Blog" path="/blog/" />
						<NavLink text="Roadmap" path="/roadmap/" />
					</Stack>
				</Flex>
				<Box display={["none", "none", "flex"]}>
					<LogInLink />
				</Box>

				{/* Mobile */}
				<IconButton
					aria-label="Open the navigation menu"
					variant="ghost"
					colorScheme="gray"
					ref={btnRef}
					onClick={onOpen}
					icon={<HamburgerIcon />}
					display={["block", "block", "none"]}
				/>
				<Drawer
					placement="right"
					onClose={onClose}
					isOpen={isOpen}
					finalFocusRef={btnRef}
					size="sm"
				>
					<DrawerContent
						backgroundColor={useColorModeValue("white", "gray.900")}
					>
						<DrawerHeader p={4} mt={3}>
							<DrawerCloseButton
								mt={4}
								size="md"
								onClick={onClose}
								aria-label="Close the navigation menu"
							/>
							<Link to="/" aria-label="Meeshkan homepage">
								<AnimatedLogo />
							</Link>
						</DrawerHeader>
						<DrawerBody
							py={6}
							style={{
								backdropFilter: "blur(4px)",
								WebkitBackdropFilter: "blur(4px)",
							}}
						>
							<Stack align="center">
								<NavLink text="Roadmap" path="/roadmap/" />
								<NavLink text="Blog" path="/blog/" />
								<Divider w="50%" borderColor="gray.100" />
								<Button
									variant="ghost"
									colorScheme="gray"
									onClick={() => toggleColorMode()}
									title={`Toggle ${
										colorMode === "dark" ? "light" : "dark"
									} mode`}
									aria-label="Light/Dark mode toggle"
									leftIcon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
								>
									{colorMode === "dark" ? "light" : "dark"} mode
								</Button>
								<LogInLink />
							</Stack>
						</DrawerBody>
						<DrawerFooter d="flex" justifyContent="center">
							<Stack isInline>
								<IconButton
									as={Link}
									// @ts-ignore
									href="https://twitter.com/meeshkan"
									isExternal
									aria-label="Twitter"
									icon={<TwitterIcon />}
									rounded="lg"
									colorScheme="gray"
									variant="ghost"
								/>
								<IconButton
									as={Link}
									// @ts-ignore
									href="https://www.linkedin.com/company/meeshkan/"
									isExternal
									aria-label="LinkedIn"
									icon={<LinkedInIcon />}
									rounded="lg"
									colorScheme="gray"
									variant="ghost"
								/>
								<IconButton
									as={Link}
									// @ts-ignore
									href="https://github.com/meeshkan"
									isExternal
									aria-label="GitHub"
									icon={<GitHubIcon />}
									rounded="lg"
									colorScheme="gray"
									variant="ghost"
								/>
							</Stack>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</Stack>
		</>
	)
}
