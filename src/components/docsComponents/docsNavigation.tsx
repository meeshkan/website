import React from "react"
import { Link } from "gatsby"
import {
  Stack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/core"

const DocsNavigation = () => {
  return (
    <Stack
      as="nav"
      isInline
      justify="space-between"
      align="center"
      py={4}
      px={6}
      // mb={6}
    >
      <Link to="/" aria-label="Meeshkan home">
        <Icon name="Logo" color="red.500" h={6} w="auto" />
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
