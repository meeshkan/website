import React from "react"
import { Stack, Box, Text, Flex, Icon } from "@chakra-ui/core"
import { motion } from "framer-motion"

const Test = ({ success, testCase, priority, animate }) => {
  const MotionBox = motion.custom(Box)

  const transition = {
    duration: 2,
    ease: "easeInOut",
    times: [0, 0.2, 0.5, 0.8, 1],
    loop: Infinity,
    repeatDelay: 1,
  }
  return (
    <MotionBox
      w="100%"
      p={3}
      mb={4}
      mx="auto"
      borderRadius="md"
      animate={animate}
      // @ts-expect-error
      transition={transition}
      backgroundColor="gray.900"
      d="flex"
      alignItems="center"
    >
      <Box
        size={8}
        mr={4}
        rounded="full"
        backgroundColor="red.900"
        d="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon name="xmark" color="red.50" />
      </Box>
      <Text color="white" fontSize="sm" fontWeight={600}>
        {testCase}
      </Text>
    </MotionBox>
  )
}

const PrioritizeTests = () => {
  const tests = [
    {
      success: true,
      testCase: "User cannot send negative amt. of currency",
      priority: 3,
      animate: {
        // scale: [1, 2, 2, 1, 1],
        // rotate: [0, -2, 2, -1, 0],
        // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      },
    },
    {
      success: false,
      testCase: "User can only see their own data",
      priority: 1,
      animate: {
        // scale: [1, 1.2, 2, 1, 1],
        // rotate: [0, 2, -1, 1, 0],
        // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      },
    },
  ]
  return (
    <>
      <Stack
        w={460}
        h={380}
        backgroundColor="gray.800"
        borderRadius="md"
        p={4}
        spacing={4}
      >
        {tests.map((test, index) => (
          <Test
            key={index}
            success={test.success}
            testCase={test.testCase}
            priority={test.priority}
            animate={test.animate}
          />
        ))}
      </Stack>
    </>
  )
}

export default PrioritizeTests
