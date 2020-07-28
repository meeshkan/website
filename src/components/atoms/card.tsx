import React from "react"
import { Box, Heading, Text } from "@chakra-ui/core"
import { UniversalLink } from "./UniversalLink"

type CardProps = {
  children?: Object
  heading?: string
  body?: string
  link?: string
  label?: string
  backgroundColor?: string
}

export const Card = ({
  children,
  heading,
  body,
  link,
  label,
  backgroundColor = "white",
}: CardProps) => {
  return (
    <>
      {link ? (
        <Box
          as={UniversalLink}
          // @ts-ignore
          to={link}
          aria-label={label}
          borderRadius="md"
          backgroundColor={backgroundColor ? backgroundColor : `gray.50`}
          p={6}
          position="relative"
        >
          {heading ? (
            <Heading
              as="h3"
              color="gray.900"
              fontSize="xl"
              fontWeight={900}
              mb={4}
            >
              {heading}
            </Heading>
          ) : null}
          {body ? <Text mb={6}>{body}</Text> : null}
          {children}
        </Box>
      ) : (
        <Box borderRadius="sm" backgroundColor="gray.50" p={6}>
          {heading ? (
            <Heading
              as="h3"
              color="gray.900"
              fontSize="2xl"
              fontWeight={900}
              mb={4}
            >
              {heading}
            </Heading>
          ) : null}
          {body ? <Text mb={6}>{body}</Text> : null}
          {children}
        </Box>
      )}
    </>
  )
}
