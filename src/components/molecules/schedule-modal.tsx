import React from "react"
import {
	Box,
	Button,
	LightMode,
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react"

const ScheduleDemo = () => {
	const neutralText = useColorModeValue("gray.500", "gray.400")
	const hoverBackground = useColorModeValue("gray.100", "gray.800")
	const textColor = useColorModeValue("gray.700", "white")

	const { onOpen, onClose, isOpen } = useDisclosure()
	return (
		<>
			<Button
				mr={4}
				colorScheme="gray"
				color={neutralText}
				backgroundColor={hoverBackground}
				_hover={{
					backgroundColor: hoverBackground,
					color: textColor,
				}}
				_active={{
					backgroundColor: hoverBackground,
					color: textColor,
				}}
				onClick={() => {
					onOpen()
					window.gtag("event", "conversion", {
						send_to: "AW-439714858/Y1dVCI_fgrkCEKqI1tEB",
					})
				}}
			>
				Schedule demo
			</Button>

			<LightMode>
				<Modal
					onClose={onClose}
					isOpen={isOpen}
					isCentered
					motionPreset="slideInBottom"
					size="7xl"
					scrollBehavior="inside"
				>
					<ModalOverlay />
					<ModalContent p={4}>
						<ModalHeader color="gray.700">Schedule a demo call!</ModalHeader>
						<ModalCloseButton color="gray.500" />
						<Box
							h="95vh"
							w="full"
							as="iframe"
							src={`https://savvycal.com/meeshkan/demo`}
						/>
					</ModalContent>
				</Modal>
			</LightMode>
		</>
	)
}

export default ScheduleDemo
