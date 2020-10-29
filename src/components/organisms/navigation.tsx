import React, { useRef } from "react"
import { Link } from "gatsby"
import {
	Stack,
	Icon,
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
} from "@chakra-ui/core"
import NavLink from "../atoms/navLink"
import { UniversalLink } from "../atoms/UniversalLink"
import { motion } from "framer-motion"

const icon = {
	hidden: {
		opacity: 0,
		pathLength: 0,
		fill: "rgba(220,24,83, 0)",
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		fill: "rgba(220,24,83, 1)",
	},
}

const text = {
	hidden: {
		opacity: 0,
		fill: "rgba(19, 26, 32,0)",
	},
	visible: {
		opacity: 1,
		fill: "rgba(19, 26, 32,1)",
	},
}

function SignUpLink() {
	return (
		<Button
			as={UniversalLink}
			// @ts-ignore
			href="https://app.meeshkan.com"
			aria-label="Log in to the Meeshkan webapp"
			colorScheme="red"
			variant="ghost"
			borderRadius="sm"
			fontWeight={900}
			lineHeight="normal"
			ml={[0, 0, 8]}
			w={["100%", "100%", "auto"]}
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
			color="gray.500"
			fontWeight={600}
			lineHeight="normal"
			rounded="sm"
			_active={{ color: "gray.900", fontWeight: 900 }}
			_focus={{ color: "gray.900", fontWeight: 900 }}
		>
			Log in <Icon name="arrow-forward" ml={2} />
		</Button>
	)
}

export function Navigation() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = useRef()

	return (
		<Stack
			as="nav"
			isInline
			justify="space-between"
			align="center"
			p={4}
			pos="fixed"
			zIndex={1000}
			top={0}
			right={0}
			left={0}
			backgroundColor="whiteAlpha.800"
			style={{ backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
			borderBottom="1px solid"
			borderBottomColor="gray.50"
		>
			<Link to="/" aria-label="Meeshkan home">
				{/* <Icon name="Logo" color="gray.900" h={6} w="auto" /> */}
				<motion.svg
					viewBox="0 0 125 24"
					style={{ height: 32, width: "auto" }}
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<motion.path
						className="item"
						variants={icon}
						initial="hidden"
						animate="visible"
						transition={{
							default: { duration: 2, ease: "easeInOut" },
							fill: { duration: 2, ease: [1, 0, 0.8, 1] },
						}}
						d="M 5.951 1.049 C 4.124 1.459 2.826 2.968 2.667 4.849 C 2.456 7.589 5.355 9.019 9.433 8.158 C 10.069 8.026 10.625 7.946 10.665 7.986 C 10.704 8.026 8.758 10.223 6.322 12.871 C 1.554 18.074 1.303 18.365 0.892 19.278 C 0.417 20.364 0.8 21.515 1.873 22.204 C 2.39 22.535 2.548 22.574 3.634 22.574 C 4.654 22.561 4.919 22.508 5.487 22.217 C 5.859 22.032 6.282 21.727 6.441 21.555 C 6.587 21.395 7.606 19.847 8.692 18.139 C 11.566 13.612 13.287 11.084 13.75 10.686 C 14.253 10.263 14.848 10.143 15.868 10.236 C 16.835 10.316 17.404 10.608 17.682 11.163 C 17.868 11.521 17.908 11.944 17.881 13.678 C 17.841 17.094 17.801 17.451 17.458 17.822 C 17.258 18.034 17.007 18.14 16.729 18.14 C 14.875 18.14 13.975 18.974 13.816 20.853 C 13.697 22.323 14.16 22.733 16.213 22.931 C 18.98 23.197 20.9 22.693 21.8 21.436 C 22.608 20.298 22.687 19.701 22.687 14.433 C 22.7 9.773 22.7 9.733 22.383 9.046 C 21.747 7.615 19.827 6.384 17.682 6.013 C 17.087 5.908 15.127 5.775 13.3 5.709 C 10.784 5.63 9.871 5.55 9.499 5.391 C 9.221 5.272 8.997 5.127 8.997 5.073 C 8.997 5.02 9.182 4.703 9.394 4.385 C 10.188 3.207 9.672 1.777 8.268 1.288 C 7.553 1.036 6.521 0.93 5.951 1.049 Z"
						fill="rgb(220, 24, 83)"
						stroke="rgb(220, 24, 83)"
						stroke-miterlimit="10"
					/>
					<motion.path
						variants={text}
						initial="hidden"
						animate="visible"
						transition={{
							default: { duration: 2, ease: "easeInOut" },
							fill: { duration: 2, ease: [1, 0, 0.8, 1] },
						}}
						d="M 48.946 7.731 L 45.953 7.731 L 42.399 13.538 L 38.846 7.731 L 35.852 7.731 L 35.852 20.801 L 38.845 20.801 L 38.845 13.202 L 42.231 18.747 L 42.567 18.747 L 45.953 13.202 L 45.953 20.801 L 48.945 20.801 L 48.945 7.731 Z M 53.609 17.253 L 60.249 17.253 C 60.325 16.899 60.362 16.524 60.362 16.133 C 60.362 13.314 58.342 11.204 55.611 11.204 C 52.655 11.204 50.635 13.351 50.635 16.133 C 50.635 18.916 52.618 21.062 55.816 21.062 C 57.594 21.062 58.978 20.409 59.895 19.14 L 57.65 17.851 C 57.276 18.261 56.621 18.56 55.854 18.56 C 54.825 18.56 53.965 18.224 53.61 17.253 Z M 53.554 15.163 C 53.815 14.21 54.526 13.687 55.593 13.687 C 56.434 13.687 57.276 14.079 57.575 15.163 Z M 64.369 17.253 L 71.009 17.253 C 71.084 16.899 71.122 16.524 71.122 16.133 C 71.122 13.314 69.101 11.204 66.37 11.204 C 63.414 11.204 61.394 13.351 61.394 16.133 C 61.394 18.916 63.378 21.062 66.575 21.062 C 68.353 21.062 69.737 20.409 70.654 19.14 L 68.409 17.851 C 68.035 18.261 67.381 18.56 66.613 18.56 C 65.584 18.56 64.724 18.224 64.369 17.253 Z M 64.313 15.163 C 64.575 14.21 65.285 13.687 66.352 13.687 C 67.193 13.687 68.035 14.079 68.334 15.163 Z M 75.003 14.191 C 75.003 13.855 75.302 13.668 75.789 13.668 C 76.407 13.668 76.781 14.004 77.043 14.49 L 79.436 13.202 C 78.651 11.876 77.304 11.204 75.789 11.204 C 73.844 11.204 72.122 12.231 72.122 14.266 C 72.122 17.496 76.725 16.955 76.725 17.981 C 76.725 18.355 76.387 18.56 75.714 18.56 C 74.891 18.56 74.367 18.169 74.124 17.459 L 71.693 18.841 C 72.422 20.352 73.844 21.063 75.714 21.063 C 77.734 21.063 79.605 20.148 79.605 18 C 79.605 14.546 75.003 15.256 75.003 14.191 Z M 86.486 11.204 C 85.252 11.204 84.316 11.652 83.811 12.343 L 83.811 7.731 L 81.006 7.731 L 81.006 20.801 L 83.811 20.801 L 83.811 15.704 C 83.811 14.378 84.523 13.78 85.551 13.78 C 86.449 13.78 87.178 14.323 87.178 15.48 L 87.178 20.8 L 89.984 20.8 L 89.984 15.068 C 89.984 12.548 88.376 11.203 86.486 11.203 Z M 100.89 20.801 L 97.392 16.133 L 100.796 11.466 L 97.523 11.466 L 94.717 15.555 L 94.717 7.731 L 91.911 7.731 L 91.911 20.801 L 94.717 20.801 L 94.717 16.675 L 97.71 20.801 Z M 108.145 11.466 L 108.145 12.343 C 107.527 11.634 106.611 11.204 105.358 11.204 C 102.907 11.204 100.888 13.351 100.888 16.133 C 100.888 18.916 102.907 21.062 105.358 21.062 C 106.611 21.062 107.527 20.633 108.145 19.924 L 108.145 20.801 L 110.951 20.801 L 110.951 11.466 Z M 105.919 18.411 C 104.629 18.411 103.693 17.533 103.693 16.133 C 103.693 14.732 104.629 13.855 105.919 13.855 C 107.21 13.855 108.145 14.732 108.145 16.133 C 108.145 17.533 107.21 18.411 105.919 18.411 Z M 118.49 11.204 C 117.255 11.204 116.32 11.652 115.815 12.343 L 115.815 11.466 L 113.009 11.466 L 113.009 20.8 L 115.815 20.8 L 115.815 15.703 C 115.815 14.377 116.526 13.78 117.555 13.78 C 118.452 13.78 119.182 14.322 119.182 15.479 L 119.182 20.8 L 121.988 20.8 L 121.988 15.068 C 121.988 12.548 120.379 11.203 118.49 11.203 Z"
					/>
				</motion.svg>
			</Link>

			{/* Desktop & Tablet */}
			<Stack isInline display={["none", "none", "flex"]}>
				<NavLink text="Pricing" path="/pricing/" />
				<NavLink text="Blog" path="/blog/" />
				<NavLink text="Roadmap" path="/roadmap/" />
				<NavLink text="Docs" path="/docs/" />
				<Flex>
					<SignUpLink />
					<Divider orientation="vertical" borderColor="gray.100" />
					<LogInLink />
				</Flex>
			</Stack>

			{/* Mobile */}
			<IconButton
				aria-label="Open the navigation menu"
				variant="ghost"
				borderRadius="sm"
				ref={btnRef}
				onClick={onOpen}
				// @ts-ignore
				icon="hamburger"
				display={["block", "block", "none"]}
			/>
			<Drawer
				placement="right"
				onClose={onClose}
				isOpen={isOpen}
				finalFocusRef={btnRef}
				size="sm"
			>
				<DrawerContent shadow="none">
					<DrawerCloseButton
						size="md"
						onClick={onClose}
						aria-label="Close the navigation menu"
					/>
					<DrawerHeader p={4}>
						<Link to="/" aria-label="Meeshkan homepage">
							<Icon name="Logo" h={6} w="auto" />
						</Link>
					</DrawerHeader>
					<DrawerBody
						py={6}
						backgroundColor="whiteAlpha.300"
						style={{
							backdropFilter: "blur(4px)",
							WebkitBackdropFilter: "blur(4px)",
						}}
					>
						<Stack align="center">
							<NavLink text="Pricing" path="/pricing/" />
							<NavLink text="Blog" path="/blog/" />
							<NavLink text="Docs" path="/docs/" />
							<Divider w="50%" borderColor="gray.100" />
							<SignUpLink />
							<LogInLink />
						</Stack>
					</DrawerBody>
					<DrawerFooter d="flex" justifyContent="center">
						<Stack isInline>
							<IconButton
								as={Link}
								isExternal
								href="https://twitter.com/meeshkan"
								aria-label="Twitter"
								// @ts-ignore
								icon="twitter"
								rounded="sm"
								color="gray.500"
							/>
							<IconButton
								as={Link}
								isExternal
								href="https://www.linkedin.com/company/meeshkan/"
								aria-label="LinkedIn"
								// @ts-ignore
								icon="linkedin"
								rounded="sm"
								color="gray.500"
							/>
							<IconButton
								as={Link}
								isExternal
								href="https://github.com/meeshkan"
								aria-label="GitHub"
								// @ts-ignore
								icon="github"
								rounded="sm"
								color="gray.500"
							/>
						</Stack>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</Stack>
	)
}
