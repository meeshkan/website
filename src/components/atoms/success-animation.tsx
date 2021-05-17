import * as React from "react"
import { Flex, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"

const SuccessAnimation = () => {
	return (
		<Flex align="center">
			<svg
				viewBox="0 0 18 16"
				height="16px"
				width="16px"
				focusable="false"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			>
				<motion.path
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{
						default: {
							duration: 0.5,
						},
					}}
					d="M16.3198 1.28003L6.94482 15.28L1.31982 10.28"
					stroke="currentColor"
				/>
			</svg>
			<Text ml={2}>Success</Text>
		</Flex>
	)
}

export default SuccessAnimation
