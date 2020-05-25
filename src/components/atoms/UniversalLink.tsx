import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link as ChakraLink } from "@chakra-ui/core"

type UniversalLinkProps = {
  children?: any // string or Object
  to: string
}

export const UniversalLink = ({
  children,
  to,
  ...props
}: UniversalLinkProps) => {
  const isInternal = to => /^\/(?!\/)/.test(to)
  const isHash = to => /^#/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (isInternal(to) || isHash(to)) {
    return (
      <ChakraLink
        // @ts-ignore
        as={GatsbyLink}
        to={to}
        color="inherit"
        _hover={{ textDecoration: "none" }}
        {...props}
      >
        {children}
      </ChakraLink>
    )
  } else {
    return (
      <ChakraLink
        href={to}
        color="inherit"
        _hover={{ textDecoration: "none" }}
        {...props}
        // isExternal
      >
        {children}
      </ChakraLink>
    )
  }
}
