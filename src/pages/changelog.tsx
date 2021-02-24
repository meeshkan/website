import React from "react"
import {} from "@chakra-ui/react"
import Layout from "../components/templates/layout"
import SEO from "../components/molecules/seo"
import { SingleSection } from "../components/organisms/singleSection"

const ChangelogPage = () => {
	return (
		<Layout>
			<SEO
				pageTitle="Meeshkan Changelog"
				pageDescription="The Meeshkan changelog communicating what we've accomplished as a team."
				pageUrl="https://meeshkan.com/changelog/"
			/>
			<SingleSection>yo</SingleSection>
		</Layout>
	)
}

export default ChangelogPage
