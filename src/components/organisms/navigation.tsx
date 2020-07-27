import React from "react"
import { Link } from "gatsby"
import { Stack, Icon } from "@chakra-ui/core"
import NavLink from "../atoms/navLink"

export function Navigation() {
  return (
    <Stack
      as="nav"
      isInline
      justify="space-between"
      align="center"
      py={4}
      pos="sticky"
      zIndex={1000}
      top={0}
      backgroundColor="whiteAlpha.800"
      style={{ backdropFilter: "blur(4px)" }}
      borderBottom="1px solid"
      borderBottomColor="gray.50"
    >
      <Link to="/" aria-label="Meeshkan home">
        <Icon name="Logo" color="red.500" h={6} w="auto" />
      </Link>
      <Stack isInline>
        <NavLink text="Pricing" path="/pricing/" />
        <NavLink text="Blog" path="/blog/" />
        <NavLink text="Docs" path="/docs/" />
      </Stack>
    </Stack>
  )
}
