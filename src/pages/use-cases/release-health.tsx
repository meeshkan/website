import React from "react"
import { Box, Heading, Text, Flex } from "@chakra-ui/core"
import SEO from "../../components/molecules/seo"
import Layout from "../../components/templates/layout"
import { SingleSection } from "../../components/organisms/singleSection"
import { DoubleSection } from "../../components/organisms/doubleSection"

const ReleaseHealthPage = () => {
	return (
		<Layout>
			<SEO
				pageTitle="Testing Environments"
				pageDescription="Meeshkan is creates testing environments that are a ready-made sandbox. Tests, mock services, and mock data are dynamically generated based on the branch specified."
				pageUrl="https://meeshkan.com/testing-environments/"
			/>
			<SingleSection hero>
				<Flex
					direction={[
						"column-reverse",
						"column-reverse",
						"column-reverse",
						"row",
					]}
					mt={12}
				>
					<Box mr={[0, 0, 8]} mb={[8, 8, 0]}>
						<Heading
							as="h1"
							fontSize={["3xl", "4xl", "5xl"]}
							mb={6}
							color="gray.900"
							fontWeight={900}
							letterSpacing="wide"
							lineHeight="short"
						>
							Faster, cheaper staging environments for pre-release testing
						</Heading>
						<Text
							fontSize={["lg", "xl", "2xl"]}
							lineHeight="short"
							mb={6}
							color="gray.700"
						>
							Cut your manual testing time and your cloud bill in half with
							quick-to-deploy staging environments.
						</Text>
					</Box>
					<Box w="400px" h="256px" mx="auto" backgroundColor="gray.50" />
				</Flex>
			</SingleSection>
		</Layout>
	)
}

export default ReleaseHealthPage
