import React from "react"
import { Box } from "@chakra-ui/core"

export const Card = ({ children }) => {
  return (
    <Box borderRadius="sm" backgroundColor="gray.50" p={6}>
      {children}
    </Box>
  )
}
