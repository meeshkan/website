import React, { useState } from "react"
import TestSnippet from "./testSnippet"
import { motion } from "framer-motion"
import {
  Button,
  Box,
  Stack,
  Text,
  Icon,
  IconButton,
  Flex,
  ListItem,
  List,
  Collapse,
} from "@chakra-ui/core"
import Codeblock from "../../molecules/codeBlock"

const GenerateTests = () => {
  // Generated tests
  const [isOpen, setIsOpen] = useState(false)
  // Accordion collapse
  const [show, setShow] = React.useState(true)

  const variants = {
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 60,
        mass: 1,
      },
    },
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 60,
        mass: 1,
      },
    },
  }

  const MotionBox = motion.custom(Box)
  const MotionButton = motion.custom(Button)

  return (
    <>
      <MotionBox
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        backgroundColor="blackAlpha.300"
        position="absolute"
        zIndex={10}
        w={[300, 360, 460]}
        h={380}
        p={4}
        borderRadius="md"
        style={{ backdropFilter: "blur(6px)" }}
        overflow="auto"
      >
        <Stack
          isInline
          alignItems="center"
          p={3}
          spacing={4}
          backgroundColor="white"
          borderRadius="2px"
          justifyContent="space-between"
        >
          <Flex alignItems="center">
            <Box
              size={8}
              mr={4}
              rounded="full"
              backgroundColor="red.50"
              d="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon name="xmark" color="red.500" />
            </Box>
            <Text fontSize="sm" color="gray.500" fontWeight={600}>
              A user is only authorized to see their own data
            </Text>
          </Flex>
          <IconButton
            aria-label="close bug"
            icon="close"
            size="xs"
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
          />
        </Stack>

        <Stack mt={4} mb={6}>
          <Flex alignItems="center">
            <Icon color="red.500" mr={3} name="xmark" size="12px" />
            <Text color="white" mr={4} fontWeight={700}>
              Test case failed
            </Text>
            <Text color="red.300" fontWeight={700}>
              Priority level 1
            </Text>
          </Flex>
          <Text fontSize="sm" fontWeight={700} color="white">
            Notes:
          </Text>
          <List styleType="disc">
            <ListItem fontSize="sm" color="white">
              Sign out and sign in from the same terminal allows second user to
              access first user's account.
            </ListItem>
          </List>
        </Stack>

        <Stack
          px={3}
          pt={3}
          spacing={3}
          backgroundColor="white"
          borderRadius="2px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex justify="space-between" w="100%">
            <Flex alignItems="center">
              <Text mr={2} fontWeight={700} fontSize="sm" color="gray.700">
                MUTATION
              </Text>
              <Text fontSize="sm" mr={4} color="gray.500">
                /bank/graphql
              </Text>
            </Flex>
            <IconButton
              aria-label="toggle the test result"
              icon="chevron-down"
              size="sm"
              variant="ghost"
              onClick={() => setShow(!show)}
            />
          </Flex>
          <Collapse isOpen={show} startingHeight={0}>
            <Codeblock className="graphql" copyButton={false}>
              {`// request body
mutation {
  authenticateAsClient(
    email: "mike@meeshkan.com",
    password: "not secure"
    ) {
    id
  }
}`}
            </Codeblock>

            <Codeblock className="json" copyButton={false}>
              {`// response body
{
  "data": {
    "authenticateAsClient": {
      "id": "5c9cf5e4-60fa-4069-9728-bb4f660b5364"
    }
  }
}`}
            </Codeblock>
          </Collapse>
        </Stack>
        <Stack justify="center" my={4}>
          <Text color="white" textAlign="center">
            Sign up to see the rest of the test.
          </Text>
          <Button
            as="a"
            // @ts-ignore
            href="https://app.meeshkan.com/"
            borderRadius="sm"
            fontWeight={900}
            variantColor="blue"
            mt={4}
            mx="auto"
          >
            Sign up
          </Button>
        </Stack>
      </MotionBox>
      <Box
        w={[300, 360, 460]}
        h={380}
        d={["block", "block", "flex"]}
        alignItems="center"
      >
        <TestSnippet />
        <MotionButton
          ml={[0, 0, -20]}
          mt={[4, 4, 0]}
          variantColor="blue"
          borderRadius="sm"
          fontWeight={900}
          onClick={() => setIsOpen(!isOpen)}
          _focus={{ outline: "none" }}
          animate={{
            scale: [1, 1.1, 1, 1.1, 1],
          }}
          // @ts-ignore
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            delay: 10,
          }}
          minW="fit-content"
        >
          {`Generate tests ->`}
        </MotionButton>
      </Box>
    </>
  )
}

export default GenerateTests
