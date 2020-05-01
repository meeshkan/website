import React, { useRef } from "react"
import { Link } from "gatsby"
import {
  Stack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Code,
  IconButton,
  Box,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  DarkMode,
} from "@chakra-ui/core"
import SideNavContent from "../docsComponents/sideNavigation"

const DocsNavigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
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
      {/* Search bar */}
      <Stack isInline display={["none", "none", "block"]}>
        <InputGroup size="sm" minW={200}>
          <InputLeftElement
            children={<Icon name="search" color="gray.300" />}
          />
          <Input type="search" placeholder="Search" />
        </InputGroup>
      </Stack>
      {/* Mobile Nav | Button & Menu Drawer */}
      <Box display={["block", "block", "none"]}>
        <IconButton
          ref={btnRef}
          rounded="sm"
          variant="link"
          icon="hamburger"
          onClick={onOpen}
        />
      </Box>
      <Drawer
        placement="right"
        onClose={onClose}
        isOpen={isOpen}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerContent bg="gray.900">
          <DrawerHeader>
            <DarkMode>
              <DrawerCloseButton onClick={onClose} />
            </DarkMode>
          </DrawerHeader>
          <DrawerBody py={2}>
            <Stack justify="center" align="center">
              <SideNavContent
                contentHeight="90vh"
                borderRightWidth="0px"
                width="100%"
              />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  )
}

export default DocsNavigation
