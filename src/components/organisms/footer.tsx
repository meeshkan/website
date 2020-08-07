import React from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  Box,
  Heading,
  Link,
  Stack,
  Flex,
  Divider,
  Icon,
  IconButton,
} from "@chakra-ui/core"

export function Footer() {
  return (
    <Box as="footer" bg="gray.50" p={6}>
      <Box maxW="1000px" mx="auto">
        <Flex wrap="wrap" justify="center">
          <Stack my={4} w={["100%", "33%"]}>
            <Heading as="h3" color="gray.900" fontSize="xl" fontWeight={900}>
              Company
            </Heading>
            <Link
              // @ts-ignore
              as={GatsbyLink}
              to="/about/"
              aria-label="About the Meeshkan team"
            >
              About us
            </Link>
            <Link
              // @ts-ignore
              as={GatsbyLink}
              to="/contact/"
              aria-label="Contact the Meeshkan team"
            >
              Contact
            </Link>
            <Link
              // @ts-ignore
              as={GatsbyLink}
              to="/pricing/"
              aria-label="Meeshkan product pricing"
            >
              Pricing
            </Link>
            <Link
              // @ts-ignore
              as={GatsbyLink}
              to="/terms-and-conditions/"
              aria-label="Terms and conditions of the Meeshkan product"
              title="terms and conditions"
            >
              T&amp;C
            </Link>
          </Stack>
          <Stack my={4} w={["100%", "33%"]}>
            <Heading as="h3" color="gray.900" fontSize="xl" fontWeight={900}>
              Resources
            </Heading>
            <Link
              // @ts-ignore
              as={GatsbyLink}
              to="/docs/"
              aria-label="Meeshkan's documentation"
            >
              Documentation
            </Link>
            <Link
              // @ts-ignore
              as={GatsbyLink}
              to="/docs/faq/"
              aria-label="Frequently asked questions about Meeshkan"
            >
              FAQ
            </Link>
            <Link
              // @ts-ignore
              as={GatsbyLink}
              to="/blog/"
              aria-label="Meeshkan's blog"
            >
              Blog
            </Link>
            <Link
              isExternal
              href="https://gitter.im/Meeshkan/community"
              aria-label="Go to Meeshkan's Gitter community"
            >
              Community
            </Link>
          </Stack>
          <Stack my={4} w={["100%", "33%"]}>
            <Heading as="h3" color="gray.900" fontSize="xl" fontWeight={900}>
              Related links
            </Heading>
            <Link
              isExternal
              href="https://www.unmock.io/"
              aria-label="Go to the Unmock website"
            >
              Unmock
            </Link>
            <Link
              isExternal
              href="https://jaymock.now.sh/"
              aria-label="Go to the Jaymock website"
            >
              Jaymock
            </Link>
            <Link
              isExternal
              href="https://vanity.dev"
              aria-label="Go to the Vanity.dev website"
            >
              Vanity.dev
            </Link>
            <Link
              isExternal
              href="https://not-salesforce.com"
              aria-label="Go to the Not salesforce website."
            >
              Not salesforce
            </Link>
          </Stack>
        </Flex>
        <Divider title="Meeshkan social links" borderColor="gray.300" my={4} />
        <Flex justifyContent="space-between" align="center">
          <GatsbyLink to="/" aria-label="Meeshkan homepage">
            <Icon name="Logo" color="gray.900" size="6" w="auto" />
          </GatsbyLink>
          <Stack isInline d={["none", "flex"]}>
            <IconButton
              as={Link}
              variant="ghost"
              isExternal
              href="https://twitter.com/meeshkan"
              aria-label="Twitter"
              // @ts-ignore
              icon="twitter"
              rounded="sm"
              color="gray.500"
            />
            <IconButton
              as={Link}
              variant="ghost"
              isExternal
              href="https://www.linkedin.com/company/meeshkan/"
              aria-label="LinkedIn"
              // @ts-ignore
              icon="linkedin"
              rounded="sm"
              color="gray.500"
            />
            <IconButton
              as={Link}
              variant="ghost"
              isExternal
              href="https://github.com/meeshkan"
              aria-label="GitHub"
              // @ts-ignore
              icon="github"
              rounded="sm"
              color="gray.500"
            />
          </Stack>
        </Flex>
      </Box>
    </Box>
  )
}
