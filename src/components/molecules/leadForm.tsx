import React from "react"
import {
	Button,
	Flex,
	FormControl,
	Input,
	LightMode,
	useColorModeValue,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import SuccessAnimation from "../atoms/success-animation"

type LeadFormProps = {
	formName: string
	subtle?: boolean
	CTA?: string
}

type IntercomLead = {
	email: string
	location: string
}

const LeadForm = ({ formName, subtle, CTA }: LeadFormProps) => {
	const { handleSubmit, register, formState } = useForm<IntercomLead>()

	const onSubmit = (rawData: IntercomLead) => {
		let formData = JSON.stringify({
			email: rawData.email,
			location: rawData.location,
		})

		fetch("https://webapp-git-staging-meeshkanml.vercel.app/api/lead", {
			method: "POST",
			body: formData,
			headers: {
				"Content-type": "text/plain",
			},
		})
	}

	return (
		<Flex
			as="form"
			onSubmit={handleSubmit(onSubmit)}
			name={formName}
			action="https://webapp-q8jw8hz7o-meeshkanml.vercel.app/api/lead"
			method="POST"
			maxW="600px"
			w="full"
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
			<input
				type="hidden"
				name="location"
				id="location"
				ref={register}
				value={formName}
			/>

			<FormControl isRequired>
				<Input
					isDisabled={formState.isSubmitted}
					type="email"
					name="email"
					id="email"
					ref={register({
						required: true,
					})}
					placeholder="shipit@meeshkan.com"
					_placeholder={{
						color: useColorModeValue("gray.500", "gray.400"),
					}}
					mr={4}
					border="none"
					_focus={{}}
					mb={[4, 4, 0]}
				/>
			</FormControl>
			{subtle ? (
				<Button
					minW="fit-content"
					type="submit"
					variant="subtle"
					isDisabled={formState.isSubmitted}
					isLoading={formState.isSubmitting}
					loadingText="Submitting"
				>
					{!formState.isSubmitted ? CTA || "Sign up now" : <SuccessAnimation />}
				</Button>
			) : (
				<LightMode>
					<Button
						minW="fit-content"
						type="submit"
						isDisabled={formState.isSubmitted}
						isLoading={formState.isSubmitting}
						loadingText="Submitting"
					>
						{!formState.isSubmitted ? (
							CTA || "Sign up now"
						) : (
							<SuccessAnimation />
						)}
					</Button>
				</LightMode>
			)}
		</Flex>
	)
}

export default LeadForm
