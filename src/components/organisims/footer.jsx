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
          <Stack my={4} w={["100%", "50%"]}>
            <Heading as="h4" color="gray.900" fontSize="xl" fontWeight={900}>
              Company
            </Heading>
            <Link
              as={GatsbyLink}
              to="/contact/"
              aria-label="Contact the Meeshkan team"
            >
              Contact
            </Link>
            {/* <Link as={GatsbyLink} to="/" aria-label="About the Meeshkan team">
              About us
            </Link>
            <Link
              as={GatsbyLink}
              to="/privacy/"
              aria-label="Meeshkan's privacy statement"
            >
              Privacy
            </Link>
            <Link
              as={GatsbyLink}
              to="/imprint/"
              aria-label="Meeshkan's imprint"
            >
              Imprint
            </Link>
            <Link
              as={GatsbyLink}
              to="/careers/"
              aria-label="Careers at Meeshkan"
            >
              Careers
            </Link> */}
          </Stack>
          <Stack my={4} w={["100%", "50%"]}>
            <Heading as="h4" color="gray.900" fontSize="xl" fontWeight={900}>
              Related links
            </Heading>
            <Link
              isExternal
              href="https://www.unmock.io/"
              aria-label="Go to the Unmock website"
            >
              Unmock
            </Link>
            {/* <Link as={GatsbyLink} to="/about-us/">
              Meeshkan
            </Link> */}
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
          {/*<Stack my={4} w={["100%", "50%", "33%"]}>
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
          </Stack> */}
        </Flex>
        <Divider borderColor="gray.300" mb={4} mt={4} />
        <Flex justifyContent="space-between" align="center">
          <GatsbyLink to="/" aria-label="Meeshkan homepage">
            <Icon name="Logo" color="red.500" size={6} w="auto" />
          </GatsbyLink>
          <Stack isInline d={["none", "flex"]}>
            <IconButton
              as={Link}
              isExternal
              href="https://twitter.com/MeeshkanML"
              icon="twitter"
              isRound
              color="gray.500"
            />
            <IconButton
              as={Link}
              isExternal
              href="https://www.linkedin.com/company/meeshkan/"
              icon="linkedin"
              isRound
              color="gray.500"
            />
            <IconButton
              as={Link}
              isExternal
              href="https://github.com/meeshkan"
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
