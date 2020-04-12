import React from "react"
import { Box, Heading, Link, Grid, Text, Code } from "@chakra-ui/core"

export const DoubleSection = ({
  children,
  heading,
  anchor,
  text,
  props,
  reverse,
  badge,
}) => (
  <Box as="section" maxW="1000px" mx="auto" py={12} {...props}>
    <Grid
      templateColumns={[
        "repeat(auto-fill, 1fr)",
        "reapeat(auto-fill, 1fr)",
        "repeat(2, 1fr)",
      ]}
      gap={14}
      gridAutoFlow="dense"
    >
      {reverse ? (
        <Box gridColumn={["1", "1", "2"]}> {children}</Box>
      ) : (
        <Box>{children}</Box>
      )}
      <Box>
        {badge ? (
          <Code
            variantColor="cyan"
            fontSize="14px"
            fontWeight={600}
            rounded="sm"
            padding="0px 4px"
            minH="auto"
            mb={3}
          >
            {badge}
          </Code>
        ) : null}
        {heading ? (
          <Heading
            as="h2"
            color="gray.900"
            fontSize="3xl"
            fontWeight={900}
            mb={4}
            letterSpacing="wide"
          >
            {anchor ? (
              <Link
                id={anchor}
                _hover={{ textDecoration: "none", cursor: "auto" }}
              >
                {heading}
              </Link>
            ) : (
              heading
            )}
          </Heading>
        ) : null}
        {text ? <Text fontSize={["lg", "xl", "2xl"]}>{text}</Text> : null}
      </Box>
    </Grid>
  </Box>
)
