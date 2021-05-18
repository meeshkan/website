import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Button, useColorModeValue } from "@chakra-ui/react"

type NavLinkProps = {
	text: string
	path: string
}

const NavLink = ({ text, path, ...props }: NavLinkProps) => (
	<Button
		{...props}
		variant="ghost"
		colorScheme="gray"
		color={useColorModeValue("gray.500", "gray.400")}
		_hover={{
			backgroundColor: useColorModeValue("gray.100", "gray.800"),
			color: useColorModeValue("gray.700", "white"),
		}}
		_active={{
			backgroundColor: useColorModeValue("gray.100", "gray.800"),
			color: useColorModeValue("gray.700", "white"),
		}}
		as={GatsbyLink}
		to={path}
		fontWeight={600}
		lineHeight="normal"
	>
		{text}
	</Button>
)

export default NavLink
