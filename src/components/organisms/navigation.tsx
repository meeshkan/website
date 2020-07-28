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
        <DrawerContent shadow="none">
          <DrawerCloseButton size="md" onClick={onClose} />
          <DrawerHeader p={4}>
            <Link to="/">
              <Icon name="Logo" h={6} w="auto" />
            </Link>
          </DrawerHeader>
          <DrawerBody
            py={6}
            backgroundColor="whiteAlpha.300"
            style={{ backdropFilter: "blur(4px)" }}
          >
            <Stack align="center">
              <NavLink text="Pricing" path="/pricing/" />
              <NavLink text="Blog" path="/blog/" />
              <NavLink text="Docs" path="/docs/" />
            </Stack>
          </DrawerBody>
          <DrawerFooter d="flex" justifyContent="center">
            <Stack isInline>
              <IconButton
                as={Link}
                isExternal
                href="https://twitter.com/meeshkan"
                // @ts-ignore
                icon="twitter"
                rounded="sm"
                color="gray.500"
              />
              <IconButton
                as={Link}
                isExternal
                href="https://www.linkedin.com/company/meeshkan/"
                // @ts-ignore
                icon="linkedin"
                rounded="sm"
                color="gray.500"
              />
              <IconButton
                as={Link}
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
