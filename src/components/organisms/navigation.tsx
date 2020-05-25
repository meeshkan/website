import React from "react"
import { Link } from "gatsby"
import { Stack, Icon } from "@chakra-ui/core"
import NavLink from "../atoms/navLink"

export function Navigation() {
  return (
    <Stack as="nav" isInline justify="space-between" align="center" py={4}>
      <Link to="/" aria-label="Meeshkan home">
        <Icon name="Logo" color="red.500" h={6} w="auto" />
      </Link>
      <Stack isInline>
        <NavLink text="Blog" path="/blog/" />
        <NavLink text="Docs" path="/docs/" />
      </Stack>
    </Stack>
  )
}
