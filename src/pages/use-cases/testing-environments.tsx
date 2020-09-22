import React from "react"
import {
	Flex,
	Badge,
	Heading,
	Text,
	Stack,
	Box,
	Button,
	Image,
} from "@chakra-ui/core"
import SEO from "../../components/molecules/seo"
import Layout from "../../components/templates/layout"
import { SingleSection } from "../../components/organisms/singleSection"
// @ts-expect-error
import testingEnvironment from "../../static/testingEnvironment.png"

const TestingEnvironmentPage = () => {
	return (
		<>
			<Layout>
				<SEO
					pageTitle="Testing Environments"
					pageDescription="Meeshkan is creates testing environments that are a ready-made sandbox. Tests, mock services, and mock data are dynamically generated based on the branch specified."
					pageUrl="https://meeshkan.com/testing-environments/"
				/>
				<SingleSection hero>
					<Stack isInline mt={12} spacing={8}>
						<Box>
							<Heading
								as="h1"
								fontSize={["3xl", "4xl", "5xl"]}
								mb={6}
								color="gray.900"
								fontWeight={900}
								letterSpacing="wide"
								lineHeight="short"
							>
								Faster, cheaper staging environments for manual QA
							</Heading>
							<Text
								fontSize={["lg", "xl", "2xl"]}
								lineHeight="short"
								mb={6}
								color="gray.700"
							>
								Staging environment platform built for product managers. Cut
								your manual testing time in half by instantly creating sandboxed
								staging environments from source control.
							</Text>
							<Button
								aria-label="Sign up"
								variantColor="red"
								borderRadius="sm"
								fontWeight={900}
								minW="fit-content"
							>
								Get started
							</Button>
						</Box>
						<Image src={testingEnvironment} minW={[300, 360, 400]} h="256px" />
					</Stack>
				</SingleSection>
			</Layout>
		</>
	)
}

export default TestingEnvironmentPage
