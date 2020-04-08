import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Button } from "@chakra-ui/core"

const NavLink = ({ text, path, ...props }) => (
  <Button
    {...props}
    variant="ghost"
    as={GatsbyLink}
    to={path}
    color="gray.700"
    fontWeight={600}
    lineHeight="normal"
    rounded="sm"
    _active={{ color: "gray.900", fontWeight: 900 }}
    _focus={{ color: "gray.900", fontWeight: 900 }}
  >
    {text}
  </Button>
)

export default NavLink
