import React, { useState } from "react"
import { useForm } from "react-hook-form"
import {
	Button,
	Flex,
	Input,
	LightMode,
	useColorModeValue,
} from "@chakra-ui/react"

type LeadFormProps = {
	formName: string
}

const LeadForm = ({ formName }: LeadFormProps) => {
	const { handleSubmit, register, formState } = useForm()
	const [formSubmit, setFormSubmit] = useState(false)

	function onSubmit(values) {
		let hubspotData = JSON.stringify({
			properties: [
				{
					property: "email",
					value: values.email,
				},
			],
		})

		fetch(" https://api.hubapi.com/contacts/v1/contact", {
			method: "POST",
			body: hubspotData,
			headers: {
				Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
				"content-type": "application/json",
			},
		}).then(() => setFormSubmit(true))
	}
	return (
		<Flex
			as="form"
			onSubmit={handleSubmit(onSubmit)}
			maxW="600px"
			mx={["none", "none", "auto"]}
			border="1px solid"
			borderColor={useColorModeValue("gray.300", "gray.700")}
			borderRadius="xl"
			p={2}
			transition="all 0.2s"
			_hover={{ borderColor: useColorModeValue("gray.400", "gray.600") }}
			_focusWithin={{
				borderColor: useColorModeValue("blue.400", "blue.600"),
			}}
			direction={["column", "column", "row"]}
		>
			<input type="hidden" name="formName" value={formName} ref={register} />
			<Input
				placeholder="shipit@meeshkan.com"
				_placeholder={{
					color: useColorModeValue("gray.500", "gray.400"),
				}}
				mr={4}
				border="none"
				_focus={{}}
				mb={[4, 4, 0]}
			/>
			<LightMode>
				<Button minW="fit-content">Get early access</Button>
			</LightMode>
		</Flex>
	)
}

export default LeadForm
