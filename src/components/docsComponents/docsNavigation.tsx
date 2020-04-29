import React from "react"
import { Link } from "gatsby"
import {
  Stack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Code,
} from "@chakra-ui/core"

const DocsNavigation = () => {
  return (
    <Stack
      as="nav"
      isInline
      justify="space-between"
      align="center"
      bg="white"
      py={4}
      px={6}
      pos="sticky"
      top={0}
    >
      <Link
        to="/"
        aria-label="Meeshkan home"
        style={{ display: "flex", alignContent: "center" }}
      >
        <Icon name="Logo" color="red.500" h={6} w="auto" />
        <Link to="/docs/">
          <Code ml={3} variantColor="cyan" fontWeight={900}>
            Docs
          </Code>
        </Link>
      </Link>
      <Stack isInline>
        <InputGroup size="sm" minW={200}>
          <InputLeftElement
            children={<Icon name="search" color="gray.300" />}
          />
          <Input type="search" placeholder="Search" />
        </InputGroup>
      </Stack>
    </Stack>
  )
}

export default DocsNavigation
