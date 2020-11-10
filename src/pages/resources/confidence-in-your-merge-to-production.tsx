import React from "react"
import { Text } from "@chakra-ui/core"
import { SingleSection } from "../../components/organisms/singleSection"
import SEO from "../../components/molecules/seo"
import Layout from "../../components/templates/layout"

const ConfidenceWebinarPage = () => {
	return (
		<Layout>
			<SEO
				pageTitle="QA testing for GraphQL and REST APIs"
				pageDescription="Meeshkan is an automated testing workflow for your product's GraphQL and REST APIs and it's dependencies."
				pageUrl="https://meeshkan.com/"
			/>
			<SingleSection>
				<Text>Hello</Text>
			</SingleSection>
		</Layout>
	)
}

export default ConfidenceWebinarPage
