import React from "react"
import { Box, Heading } from "@chakra-ui/core"

export const Card = ({ children, heading }) => {
  return (
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
  )
}
