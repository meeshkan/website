import React from "react"
import { Box, Heading, Text } from "@chakra-ui/core"
import { Link } from "gatsby"

export const Card = ({ children, heading, body, link }) => {
  return (
    <>
      {link ? (
        <Box
          as={Link}
          to={link}
          borderRadius="sm"
          backgroundColor="gray.50"
          p={6}
        >
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
          <Text>{body}</Text>
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
          {children}
        </Box>
      )}
    </>
  )
}
