import React from "react"
import { Box, Code, Divider, Heading, Stack, Text } from "@chakra-ui/react"
import Layout from "../components/templates/layout"
import SEO from "../components/molecules/seo"
import { SingleSection } from "../components/organisms/singleSection"
import ChangelogItem from "../components/molecules/changelog-item"

const ChangelogPage = () => {
	return (
		<Layout>
			<SEO
				pageTitle="Meeshkan Changelog"
				pageDescription="The Meeshkan changelog communicating what we've accomplished as a team."
				pageUrl="https://meeshkan.com/changelog/"
			/>
			<SingleSection
				heading="Changelog"
				text="Updates from the developement of the Meeshkan product."
			>
				<Divider />

				<ChangelogItem
					version="0.5.1"
					intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					updates={["Add filtering and sorting to the user stories table"]}
				/>
			</SingleSection>
		</Layout>
	)
}

export default ChangelogPage
