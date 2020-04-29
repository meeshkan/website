import React from "react"
import { Box, Heading } from "@chakra-ui/core"
import items from "./items"
import { ComponentLink, stringToUrl, TopNavLink } from "./navLink"

const topNavLinks = ["Theme"]

const NavGroupHeading = props => (
  <Heading
    fontSize="sm"
    color="gray.500"
    letterSpacing="wide"
    mb={2}
    textTransform="uppercase"
    {...props}
  />
)

export const SideNavContent = ({
  pathName,
  contentHeight = "calc(100vh)",
  ...props
}) => {
  return (
    <Box position="relative" overflowY="auto" bg="gray.900" {...props}>
      <Box
        as="nav"
        top="0"
        height={contentHeight}
        aria-label="Docs navigation"
        px={[6, 6, 6, 8]}
      >
        <Box mb={8}>
          <TopNavLink href="/docs/">Docs Introduction</TopNavLink>
          {topNavLinks.map(link => (
            <TopNavLink key={link} pathName={pathName} href={stringToUrl(link)}>
              {link}
            </TopNavLink>
          ))}
        </Box>

        <Box mb="10">
          <NavGroupHeading>Topics</NavGroupHeading>
          {items.map(link => (
            <ComponentLink
              key={link}
              pathName={pathName}
              href={stringToUrl(link)}
            >
              {link}
            </ComponentLink>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
const SideNavContainer = props => (
  <Box
    position="fixed"
    left="0"
    width="100%"
    height="100%"
    top="40"
    right="0"
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
