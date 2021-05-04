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
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverBody,
	Text,
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
	VideoIcon,
	EmailIcon,
} from "../../../theme/icons"
import { ArrowForwardIcon, ChevronDownIcon, StarIcon } from "@chakra-ui/icons"
import { AnimatedLogo } from "../molecules/animatedLogo"

function SignUpLink() {
	return (
		<Button
			as={UniversalLink}
			// @ts-ignore
			href="https://app.meeshkan.com/login"
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
						{/* <NavLink text="Product" path="/product/" /> */}
						<Popover placement="bottom" trigger="hover" openDelay={0}>
							{({ isOpen, onClose }) => (
								<>
									<PopoverTrigger>
										<Button
											isActive={isOpen}
											variant="ghost"
											colorScheme="gray"
											rightIcon={<ChevronDownIcon />}
											fontWeight="600"
											color={useColorModeValue("gray.500", "gray.400")}
										>
											Product
										</Button>
									</PopoverTrigger>
									<PopoverContent
										borderTopRadius="0"
										borderBottomRadius="lg"
										boxShadow="0px 8px 24px rgba(149, 157, 165, 0.2)"
									>
										<PopoverBody
											px={4}
											pt={4}
											backgroundColor={useColorModeValue("white", "gray.900")}
										>
											<Flex
												p={4}
												borderRadius="md"
												_hover={{
													backgroundColor: useColorModeValue(
														"gray.50",
														"gray.800"
													),
												}}
											>
												<StarIcon size={6} mr={4} />
												<Box>
													<Text
														lineHeight="base"
														fontWeight="600"
														color={useColorModeValue("gray.900", "white")}
														mb={1}
													>
														Features
													</Text>
													<Text fontSize="sm">
														Get a better understanding of where your traffic is
														coming from.
													</Text>
												</Box>
											</Flex>

											<Flex
												p={4}
												borderRadius="md"
												_hover={{
													backgroundColor: useColorModeValue(
														"gray.50",
														"gray.800"
													),
												}}
											>
												<StarIcon size={6} mr={4} />
												<Box>
													<Text
														lineHeight="base"
														fontWeight="600"
														color={useColorModeValue("gray.900", "white")}
														mb={1}
													>
														Roadmap
													</Text>
													<Text fontSize="sm">
														Get a better understanding of where your traffic is
														coming from.
													</Text>
												</Box>
											</Flex>

											<Flex
												mb={3}
												p={4}
												borderRadius="md"
												_hover={{
													backgroundColor: useColorModeValue(
														"gray.50",
														"gray.800"
													),
												}}
											>
												<StarIcon size={6} mr={4} />
												<Box>
													<Text
														lineHeight="base"
														fontWeight="600"
														color={useColorModeValue("gray.900", "white")}
														mb={1}
													>
														Changelog
													</Text>
													<Text fontSize="sm">
														Get a better understanding of where your traffic is
														coming from.
													</Text>
												</Box>
											</Flex>
										</PopoverBody>
										<Flex
											w="full"
											justify="space-between"
											backgroundColor="gray.50"
											p={4}
											borderBottomRadius="lg"
										>
											<Button
												size="sm"
												leftIcon={<VideoIcon />}
												variant="ghost"
												colorScheme="gray"
												fontWeight="600"
											>
												Demo video
											</Button>
											<Button
												size="sm"
												leftIcon={<EmailIcon />}
												variant="ghost"
												colorScheme="gray"
												fontWeight="600"
											>
												Contact sales
											</Button>
										</Flex>
									</PopoverContent>
								</>
							)}
						</Popover>

						<NavLink text="Pricing" path="/pricing/" />
					</Stack>
				</Flex>
				<Box display={["none", "none", "flex"]}>
					<LogInLink />
					<SignUpLink />
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
								<NavLink text="Blog" path="/blog/" />
								<NavLink text="Product" path="/product/" />
								<NavLink text="Roadmap" path="/roadmap/" />
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
