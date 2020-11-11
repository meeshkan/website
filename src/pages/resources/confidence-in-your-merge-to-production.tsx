import React from "react"
import {
	Text,
	Code,
	Flex,
	Heading,
	Image,
	Box,
	Grid,
	UnorderedList,
	ListItem,
	Divider,
	Avatar,
	useColorModeValue,
} from "@chakra-ui/core"
import { SingleSection } from "../../components/organisms/singleSection"
import SEO from "../../components/molecules/seo"
import Layout from "../../components/templates/layout"
// @ts-expect-error
import setup from "../../static/setup.jpg"
// @ts-expect-error
import makenna from "../../../data/avatars/kenna.png"

const ConfidenceWebinarPage = () => {
	return (
		<Layout>
			<SEO
				pageTitle="QA testing for GraphQL and REST APIs"
				pageDescription="Meeshkan is an automated testing workflow for your product's GraphQL and REST APIs and it's dependencies."
				pageUrl="https://meeshkan.com/"
			/>

			<SingleSection>
				<Flex justify="center" mb={3} mt={12}>
					<Code
						colorScheme="cyan"
						letterSpacing="widest"
						fontSize="16px"
						fontWeight={600}
						rounded="sm"
						padding="0px 4px"
						minH="auto"
					>
						Webinar
					</Code>
				</Flex>

				<Heading as="h1" textStyle="h1">
					Releasing with confidence: Practical tips for merging to production
				</Heading>

				<Image
					mt={6}
					alt="Setup background image"
					borderRadius="lg"
					width="100%"
					height="400px"
					objectFit="cover"
					src={setup}
				/>
			</SingleSection>

			<Box as="section" maxW="1000px" mx="auto" pt={12} pb={16}>
				<Grid
					templateColumns={[
						"repeat(auto-fill, 1fr)",
						"reapeat(auto-fill, 1fr)",
						"reapeat(auto-fill, 1fr)",
						"repeat(2, 1fr)",
					]}
					gap={12}
					gridAutoFlow="dense"
				>
					<Box>
						<Heading as="h2" textStyle="h3" mb={2}>
							"But it worked in staging!"
						</Heading>
						<Flex align="center" justify="space-between" mb={4}>
							<Flex align="center">
								<Avatar size="md" src={makenna} mr={4} />
								<Box>
									<Text fontWeight={600} lineHeight="1" mb={2}>
										Makenna Smutz
									</Text>
									<Text lineHeight="1">COO @ Meeshkan</Text>
								</Box>
							</Flex>
							<Box textAlign="right">
								<Text
									fontWeight={600}
									color={useColorModeValue("red.500", "red.300")}
								>
									November 25th
								</Text>
								<Text>2020</Text>
							</Box>
						</Flex>
						<Text textAlign="justify" fontSize="md" lineHeight="1.4" mb={4}>
							During this 30-min webinar, we'll share industry-leading
							strategies for making sure that the features you ship work in
							production as well as they work in staging.
						</Text>
						<Text
							textAlign="justify"
							fontSize="md"
							fontWeight={700}
							lineHeight="1.4"
						>
							You'll learn:
						</Text>
						<UnorderedList my={4} spacing={3}>
							<ListItem lineHeight="1.6">
								How to create an effective pre-release 'checklist'.
							</ListItem>
							<ListItem lineHeight="1.6">
								How to simulate realistic user behavior in your staging
								environment.
							</ListItem>
							<ListItem lineHeight="1.6">
								Best practices, and experiences of other Product Managers.
							</ListItem>
						</UnorderedList>
						<Text textAlign="justify" fontSize="md" lineHeight="1.4">
							We'll also have 10m of Q&amp;A at the end for all of your
							questions. See you there!
						</Text>
						<Divider my={6} />
						<Text
							textAlign="justify"
							fontSize="md"
							lineHeight="1.4"
							fontStyle="italic"
							fontWeight={700}
						>
							Is this for me?
						</Text>
						<Text textAlign="justify" fontSize="md" lineHeight="1.4">
							If you are a product manager or if you participate in the release
							process, this is a great opportunity to learn more!
						</Text>
					</Box>

					<Flex
						justifyContent="center"
						backgroundColor="white"
						p={4}
						borderRadius="lg"
					>
						<iframe
							width="100%"
							height="615px"
							frameBorder="0"
							src="https://app.livestorm.co/p/df77d8be-54bc-4d3e-93cd-ac018ec25f28/form"
							title={`"But it worked in staging!" - A release-management webinar for product managers | Meeshkan"`}
						></iframe>
					</Flex>
				</Grid>
			</Box>
		</Layout>
	)
}

export default ConfidenceWebinarPage
