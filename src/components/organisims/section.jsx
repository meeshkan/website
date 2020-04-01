import React from "react"
import { Box, Heading, Link } from "@chakra-ui/core"

export const Section = ({ children, heading, anchor }) => (
  <Box maxW="1200px" mx="auto" py={12}>
    {heading ? (
      <Link id={anchor}>
        <Heading
          as="h2"
          color="gray.900"
          fontSize="3xl"
          fontWeight={900}
          textAlign="center"
          mb={12}
        >
          {heading}
        </Heading>
      </Link>
    ) : null}
    {children}
  </Box>
)
