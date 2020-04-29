import { Box, PseudoBox, Heading } from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"
import React, { cloneElement, forwardRef } from "react"
import useLocation from "../../hooks/Location"
import PropTypes from "prop-types"

const NavLink = ({ children, href, ...props }) => {
  let isActive = false
  let location = useLocation()

  if (location.location.pathname === href) {
    isActive = true
  } else {
    isActive = false
  }

  return (
    <GatsbyLink to={href} {...props}>
      {typeof children === "function" ? children(isActive) : children}
    </GatsbyLink>
  )
}

export const stringToUrl = (str, path = "/docs/") => {
  return `${path}${str
    .toLowerCase()
    .split(" ")
    .join("-")}/`
}

export const SideNavLink = forwardRef(({ children, icon, ...props }, ref) => {
  return (
    <PseudoBox
      ref={ref}
      mx={-2}
      display="flex"
      cursor="pointer"
      align="center"
      fontSize="lg"
      px={2}
      py="1"
      transition="all 0.2s"
      fontWeight={700}
      outline="none"
      _focus={{ shadow: "outline" }}
      _notFirst={{ mt: 1 }}
      {...props}
    >
      {icon && cloneElement(icon, { mr: 3 })}
      <Box>{children}</Box>
    </PseudoBox>
  )
})

export const TopNavLink = forwardRef(({ href, ...props }, ref) => {
  const hoverColor = { light: "gray.900", dark: "gray.50" }
  const activeColor = { light: "cyan.500", dark: "cyan.200" }
  const activeBg = { light: "cyan.50", dark: "cyan.800" }
  return (
    <NavLink href={href}>
      {isActive => (
        <SideNavLink
          ref={ref}
          aria-current={isActive ? "page" : undefined}
          _hover={{
            color: hoverColor,
            transform: "translateX(2px)",
          }}
          {...(isActive && {
            bg: activeBg.dark,
            rounded: "sm",
            color: activeColor.dark,
            _hover: {
              transform: "translateX(2px)",
            },
            fontWeight: 700,
          })}
          {...props}
        />
      )}
    </NavLink>
  )
})

export const NavGroupHeading = props => (
  <Heading
    color="gray.300"
    fontSize="md"
    letterSpacing="wide"
    mb={2}
    textTransform="uppercase"
    {...props}
  />
)

export const ItemLink = forwardRef(({ href, ...props }, ref) => {
  const hoverColor = { light: "gray.900", dark: "gray.50" }
  const activeColor = { light: "cyan.500", dark: "cyan.500" }
  const activeBg = { light: "cyan.50", dark: "gray.800" }

  return (
    <NavLink href={href}>
      {isActive => (
        <SideNavLink
          ref={ref}
          aria-current={isActive ? "page" : undefined}
          color="gray.300"
          _hover={{
            color: hoverColor.dark,
            transform: "translateX(2px)",
          }}
          {...(isActive && {
            bg: activeBg.dark,
            rounded: "sm",
            color: activeColor.dark,
            _hover: {
              transform: "translateX(2px)",
            },
            fontWeight: 700,
          })}
          {...props}
        />
      )}
    </NavLink>
  )
})

ItemLink.propTypes = {
  href: PropTypes.node.isRequired,
}
