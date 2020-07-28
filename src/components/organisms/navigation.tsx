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
} from "@chakra-ui/core"
import NavLink from "../atoms/navLink"
import { UniversalLink } from "../atoms/UniversalLink"

export function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const signUpLink = (
    <Button
      as={UniversalLink}
      href="https://app.meeshkan.com"
      aria-label="Log in to the Meeshkan webapp"
      variantColor="red"
      borderRadius="sm"
      fontWeight={600}
      ml={8}
      w={["100%", "100%", "auto"]}
    >
      Sign up
    </Button>
  )
  const logInLink = (
    <Button
      as={UniversalLink}
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
        <Icon name="Logo" color="gray.900" h={6} w="auto" />
      </Link>

      {/* Desktop & Tablet */}
      <Stack isInline display={["none", "none", "flex"]}>
        <NavLink text="Pricing" path="/pricing/" />
        <NavLink text="Blog" path="/blog/" />
        <NavLink text="Docs" path="/docs/" />
        {signUpLink}
        {logInLink}
      </Stack>

      {/* Mobile */}
      <IconButton
        aria-label="mobile menu button"
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
        <DrawerContent
          shadow="none"
          backgroundColor="whiteAlpha.900"
          style={{ backdropFilter: "blur(4px)" }}
        >
          <DrawerCloseButton onClick={onClose} />
          <DrawerHeader>
            <Link to="/">
              <Icon name="Logo" w={32} />
            </Link>
          </DrawerHeader>
          <DrawerBody py={6}>
            <Stack align="center">
              <NavLink text="Pricing" path="/pricing/" />
              <NavLink text="Test" path="/blog/" />
              <NavLink text="Docs" path="/docs/" />
              {signUpLink}
              {logInLink}
            </Stack>
          </DrawerBody>
          <DrawerFooter d="flex" justifyContent="center">
            <Stack isInline>
              <IconButton
                as={Link}
                variant="ghost"
                isExternal
                href="https://twitter.com/meeshkan"
                // @ts-ignore
                icon="twitter"
                rounded="sm"
                color="gray.500"
              />
              <IconButton
                as={Link}
                variant="ghost"
                isExternal
                href="https://www.linkedin.com/company/meeshkan/"
                // @ts-ignore
                icon="linkedin"
                rounded="sm"
                color="gray.500"
              />
              <IconButton
                as={Link}
                variant="ghost"
                isExternal
                href="https://github.com/meeshkan"
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
