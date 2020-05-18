import React from "react"
import { Box, Heading, Link, Text } from "@chakra-ui/core"

type SectionProps = {
  children: Object
  heading?: string
  anchor?: string
  text?: string
  props?: any
}

export const SingleSection = ({
  children,
  heading,
  anchor,
  text,
  props,
}: SectionProps) => (
  <Box as="section" maxW="1000px" mx="auto" py={12} {...props}>
    {heading ? (
      <Heading
        as="h2"
        color="gray.900"
        fontSize="3xl"
        fontWeight={900}
        textAlign="center"
        mb={6}
        letterSpacing="wide"
        lineHeight="short"
      >
        {anchor ? (
          <Link id={anchor} _hover={{ textDecoration: "none", cursor: "auto" }}>
            {heading}
          </Link>
        ) : (
          heading
        )}
      </Heading>
    ) : null}
    {text ? (
      <Text fontSize="2xl" textAlign="center" mb={12} lineHeight="short">
        {text}
      </Text>
    ) : null}
    {children}
  </Box>
)
