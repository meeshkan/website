import React from "react"
import { Box, Stack } from "@chakra-ui/core"
import items from "./items"
import { ItemLink, stringToUrl } from "./navLink"

export const SideNavContent = ({
  pathName,
  contentHeight = "calc(100vh)",
  ...props
}) => {
  return (
    <Box position="relative" overflowY="auto" bg="gray.900" pt={8} {...props}>
      <Stack
        as="nav"
        spacing={2}
        height={contentHeight}
        aria-label="Docs navigation"
        px={6}
      >
        {items.map(link => (
          <ItemLink key={link} pathName={pathName} href={stringToUrl(link)}>
            {link}
          </ItemLink>
        ))}
      </Stack>
    </Box>
  )
}
const SideNavContainer = props => (
  <Box
    position="fixed"
    left={0}
    width="100%"
    height="100%"
    top={12}
    right={0}
    {...props}
  />
)

const SideNav = props => {
  return (
    <SideNavContainer {...props}>
      <SideNavContent />
    </SideNavContainer>
  )
}

export default SideNav
