import React from "react"
import {
  Heading,
  Text,
  Image,
  List,
  ListItem,
  Box,
  Divider,
  Code,
  Callout,
  PseudoBox,
  Link as ChakraLink,
} from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"
import CodeBlock from "./codeBlock"

const DocsHeading = props => (
  <Heading
    mb={4}
    mt={6}
    css={{
      "&[id]": {
        pointerEvents: "none",
      },
      "&[id]:before": {
        display: "block",
        height: " 6rem",
        marginTop: "-6rem",
        visibility: "hidden",
        content: `""`,
      },
      "&[id]:hover a": { opacity: 1 },
    }}
    {...props}
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <PseudoBox
          aria-label="anchor"
          as="a"
          color="cyan.500"
          fontWeight="normal"
          outline="none"
          _focus={{ opacity: 1, boxShadow: "outline" }}
          opacity="0"
          ml={2}
          href={`#${props.id}`}
        >
          #
        </PseudoBox>
      )}
    </Box>
  </Heading>
)

const Link = ({ children, to, ...props }) => {
  const internal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <ChakraLink as={GatsbyLink} to={to} color="blue.500" {...props}>
        {children}
      </ChakraLink>
    )
  }
  return (
    <ChakraLink href={to} color="blue.500" {...props} isExternal>
      {children}
    </ChakraLink>
  )
}

const components = {
  h1: props => (
    <Heading
      {...props}
      as="h1"
      fontSize={["3xl", "4xl", "5xl"]}
      textAlign="center"
      mb={12}
      color="gray.900"
    >
      {props.children}
    </Heading>
  ),
  h2: props => (
    <DocsHeading
      as="h2"
      fontSize="3xl"
      fontWeight="900"
      {...props}
    ></DocsHeading>
  ),
  h3: props => (
    <DocsHeading as="h3" fontSize="2xl" fontWeight="800" {...props} />
  ),
  h4: props => (
    <DocsHeading as="h4" fontSize="lg" fontWeight="700" {...props} />
  ),
  h5: props => (
    <DocsHeading as="h5" fontSize="md" fontWeight="600" {...props} />
  ),
  h6: props => (
    <DocsHeading as="h6" fontSize="sm" fontWeight="500" {...props} />
  ),
  p: props => (
    <Text as="p" mt={4} lineHeight="tall" {...props}>
      {props.children}
    </Text>
  ),
  blockquote: props => (
    <Callout
      my={6}
      rounded="sm"
      variant="left-accent"
      color="red.600"
      fontWeight="600"
      status="error"
      css={{ "> *:first-of-type": { marginTop: 0 } }}
      {...props}
    >
      {props.children}
    </Callout>
  ),
  inlineCode: props => (
    <Code variantColor="cyan" fontSize="inherit" {...props} />
  ),
  hr: props => <Divider borderColor="gray.100" my={6} {...props} />,
  a: props => <Link {...props} />,
  img: props => <Image {...props} rounded="sm" />,
  pre: props => <Box my="2em" fontSize="inherit" rounded="sm" {...props} />,
  code: CodeBlock,
  ul: props => (
    <List styleType="disc" my={4} spacing={2} {...props}>
      {props.children}
    </List>
  ),
  ol: props => (
    <List as="ol" styleType="decimal" my={4} spacing={2} {...props}>
      {props.children}
    </List>
  ),
  li: props => <ListItem {...props}>{props.children}</ListItem>,
  table: props => (
    <Box as="table" textAlign="left" mt={6} width="full" {...props} />
  ),
  // tr:,
  td: props => (
    <Box
      as="td"
      p={2}
      borderTopWidth="1px"
      borderColor="inherit"
      fontSize="sm"
      whiteSpace="normal"
      {...props}
    />
  ),
  th: props => (
    <Box as="th" p={2} fontWeight="semibold" fontSize="sm" {...props} />
  ),
  thematicBreak: props => <Box height={6} {...props} />,
}

export default components
