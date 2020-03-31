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
          <Stack my={4} w={["100%", "50%", "33%"]}>
            <Heading as="h4" color="gray.900" fontSize="xl" fontWeight={900}>
              Company
            </Heading>
            <Link as={GatsbyLink} to="/contact/">
              Contact
            </Link>
            <Link as={GatsbyLink} to="/about-us/">
              About us
            </Link>
            <Link as={GatsbyLink} to="/privacy/">
              Privacy
            </Link>
            <Link as={GatsbyLink} to="/imprint/">
              Imprint
            </Link>
            <Link as={GatsbyLink} to="/careers/">
              Careers
            </Link>
          </Stack>
          <Stack my={4} w={["100%", "50%", "33%"]}>
            <Heading as="h4" color="gray.900" fontSize="xl" fontWeight={900}>
              Related links
            </Heading>
            <Link as={GatsbyLink} to="/contact/">
              Unmock
            </Link>
            <Link as={GatsbyLink} to="/about-us/">
              Meeshkan
            </Link>
            <Link as={GatsbyLink} to="/privacy/">
              Jaymock
            </Link>
            <Link isExternal href="https://vanity.dev">
              Vanity.dev
            </Link>
            <Link isExternal href="https://not-salesforce.com">
              Not salesforce
            </Link>
          </Stack>
          <Stack my={4} w={["100%", "50%", "33%"]}>
            <Heading as="h4" color="gray.900" fontSize="xl" fontWeight={900}>
              Use-cases
            </Heading>
            <Link as={GatsbyLink} to="/use-case/api-sandbox/">
              API Sanbox as a service
            </Link>
            <Link as={GatsbyLink} to="/use-case/fuzz-test/">
              Fuzz test APIs
            </Link>
            <Link as={GatsbyLink} to="/use-case/white-hat-phishing/">
              White-hat phishing
            </Link>
            <Link as={GatsbyLink} to="/use-case/api-coverage-monitor/">
              API Coverage monitor
            </Link>
            <Link as={GatsbyLink} to="/use-case/api-uptime-healthcare/">
              Uptime preventative healthcare
            </Link>
          </Stack>
        </Flex>
        <Divider borderColor="gray.300" mb={4} mt={4} />
        <Flex justifyContent="space-between" align="center">
          <GatsbyLink to="/" alt="Meeshkan homepage">
            <Icon name="Logo" color="red.500" size={6} w="auto" />
          </GatsbyLink>
          <Stack isInline d={["none", "flex"]}>
            <IconButton
              as="a"
              href="https://twitter.com/MeeshkanML"
              target="_blank"
              icon="twitter"
              isRound
              color="gray.500"
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com/company/meeshkan/"
              target="_blank"
              icon="linkedin"
              isRound
              color="gray.500"
            />
            <IconButton
              as="a"
              href="https://github.com/meeshkan"
              target="_blank"
              icon="github"
              isRound
              color="gray.500"
            />
          </Stack>
        </Flex>
      </Box>
    </Box>
  )
}
