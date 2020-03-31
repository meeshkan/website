import React from "react"
import { Link } from "gatsby"
import { Stack, Icon } from "@chakra-ui/core"
import NavLink from "../molecules/navLink"

const Navigation = () => (
  <Stack isInline justify="space-between" align="center" py={4}>
    <Link to="/" alt="Meeshkan home">
      <Icon name="Logo" color="red.500" h={6} w="auto" />
    </Link>
    <Stack isInline>
      <NavLink text="Blog" path="/blog/" />
      <NavLink text="Projects" path="/#projects" />
      <NavLink text="Docs" path="/docs/" />
    </Stack>
  </Stack>
)

export default Navigation
