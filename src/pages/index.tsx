import React from "react"
import SEO from "../components/molecules/seo"
import {
	Heading,
	Button,
	Text,
	Flex,
	Box,
	Grid,
	useColorModeValue,
	LightMode,
	Spacer,
	Input,
	List,
	ListItem,
	ListIcon,
	SimpleGrid,
	Stack,
} from "@chakra-ui/react"
import { SingleSection } from "../components/organisms/singleSection"
import { useMixpanel } from "gatsby-plugin-mixpanel"
import { DoubleSection } from "../components/organisms/doubleSection"
import Layout from "../components/templates/layout"
import {
	ActivityIcon,
	CheckSquareIcon,
	CrosshairIcon,
	GitHubIcon,
	StoplightIcon,
	UserIcon,
	ZapIcon,
} from "../../theme/icons"
import FeatureCard from "../components/molecules/featureCard"
import Callout from "../components/organisms/callout"

const IndexPage = () => {
	const mixpanel = useMixpanel()

	return (
		<Layout>
			<SEO
				pageTitle="QA testing for GraphQL and REST APIs"
				pageDescription="Meeshkan is an automated testing workflow for your product's GraphQL and REST APIs and it's dependencies."
				pageUrl="https://meeshkan.com/"
			/>
			<SingleSection>
				<Heading
					as="h1"
					textStyle="h1"
					mt={20}
					mb={6}
					textAlign={["left", "left", "center"]}
				>
					Stop{" "}
					<Box
						as="span"
						bgGradient={`linear(to-b, ${useColorModeValue(
							"cyan.300",
							"cyan.500"
						)}, ${useColorModeValue("gray.900", "white")})`}
						bgClip="text"
						fontStyle="italic"
					>
						guessing.
					</Box>
					<br />
					Test what matters. <br />
					Release with confidence.
				</Heading>
				<Text
					textAlign={["left", "left", "center"]}
					fontSize={["md", "lg", "xl"]}
					lineHeight="mid"
					maxW="600px"
					mx="auto"
					color={useColorModeValue("gray.600", "gray.300")}
					mb={6}
				>
					Think the only way to ensure a smooth release is to pretend to be a
					user? Think again.
				</Text>
				<Flex
					maxW="600px"
					mx="auto"
					border="1px solid"
					borderColor={useColorModeValue("gray.300", "gray.700")}
					borderRadius="xl"
					p={2}
					transition="all 0.2s"
					_hover={{ borderColor: useColorModeValue("gray.400", "gray.600") }}
					_focusWithin={{
						borderColor: useColorModeValue("blue.400", "blue.600"),
					}}
				>
					<Input
						placeholder="shipit@meeshkan.com"
						mr={4}
						border="none"
						_focus={{}}
					/>
					<LightMode>
						<Button minW="fit-content">Get early access</Button>
					</LightMode>
				</Flex>
			</SingleSection>

			<Spacer h={32} />

			<DoubleSection
				heading="Everyone loves UI tests but...they suck at finding real bugs"
				text="Your users are your best testers, but when you make them unwitting guinea pigs, they stop being your users and become your competitor’s users. "
			>
				<Box backgroundColor="gray.800" w="100%" h="300px" borderRadius="lg" />
			</DoubleSection>

			<Spacer h={32} />

			<Box
				as="section"
				maxW="1200px"
				mx="auto"
				py={12}
				pl={6}
				backgroundColor={useColorModeValue("gray.100", "gray.800")}
				borderRadius="lg"
				overflow="hidden"
			>
				<Grid
					templateColumns={[
						"repeat(auto-fill, 1fr)",
						"reapeat(auto-fill, 1fr)",
						"reapeat(auto-fill, 1fr)",
						"repeat(2, 1fr)",
					]}
					gap={16}
					gridAutoFlow="dense"
				>
					<Flex
						justifyContent="center"
						gridColumn={["1", "1", "2"]}
						position="relative"
					>
						<Box
							w="100%"
							h="100%"
							borderRadius="lg"
							mr="-8px"
							background="conic-gradient(from 180deg at 50% 50%, #526EE0 0deg, #52E0C4 139.2deg, #DC1853 285.11deg, #526EE0 320deg)"
							filter="blur(150px)"
							position="absolute"
							top={0}
							left={0}
						/>
						<Box
							backgroundColor={useColorModeValue("white", "gray.900")}
							w="100%"
							h="400px"
							borderRadius="lg"
							mr="-8px"
							zIndex="1"
						/>
					</Flex>
					<Box>
						<Heading as="h2" textStyle="h3" mb={6}>
							Focus on creating, <wbr /> not troubleshooting
						</Heading>
						<Text
							textAlign="left"
							fontSize={["md", "lg", "xl"]}
							lineHeight="tall"
							mb={4}
						>
							No one tests better than a user. So let us create some for you.
							Join the first innovation in QA since 1991.
						</Text>

						<List spacing={4} mb={10} fontSize="lg">
							<ListItem>
								<ListIcon
									color={useColorModeValue(`cyan.600`, `cyan.200`)}
									as={CheckSquareIcon}
									lineHeight="tall"
								/>
								Real User Flows to recreate in Staging
							</ListItem>
							<ListItem>
								<ListIcon
									color={useColorModeValue(`cyan.600`, `cyan.200`)}
									as={CheckSquareIcon}
									lineHeight="tall"
								/>
								Quantify your confidence to merge with an M-score
							</ListItem>
							<ListItem>
								<ListIcon
									color={useColorModeValue(`cyan.600`, `cyan.200`)}
									as={CheckSquareIcon}
									lineHeight="tall"
								/>
								Machine Learning enabled test runs
							</ListItem>
						</List>
						<LightMode>
							<Button>Start gathering insights</Button>
						</LightMode>
					</Box>
				</Grid>
			</Box>

			<Spacer h={32} />

			<SingleSection
				heading="Release on-time, every time"
				text="Here are some of the other ways Meeshkan guarentees the smoothest release cycle you’ll ever experience."
			>
				<SimpleGrid
					spacing={8}
					columns={[1, 2, 3]}
					px={4}
					mt={12}
					fontWeight={500}
				>
					<FeatureCard>
						<ActivityIcon color="cyan.400" boxSize={6} />
						<Text>Health metrics dashboard</Text>
					</FeatureCard>
					<FeatureCard>
						<UserIcon color="cyan.400" boxSize={6} />
						<Text>User generated tests</Text>
					</FeatureCard>
					<FeatureCard>
						<ZapIcon color="cyan.400" boxSize={6} />
						<Text>ML grouped user flows</Text>
					</FeatureCard>
					<FeatureCard>
						<CrosshairIcon color="cyan.400" boxSize={6} />
						<Text>Pinpoint bug introductions</Text>
					</FeatureCard>
					<FeatureCard>
						<GitHubIcon color="cyan.400" boxSize={6} />
						<Text>GitHub checks integration</Text>
					</FeatureCard>
					<FeatureCard>
						<StoplightIcon color="cyan.400" boxSize={6} />
						<Text>Confidence score</Text>
					</FeatureCard>
				</SimpleGrid>
			</SingleSection>

			<Spacer h={32} />

			<SingleSection
				heading="Cut testing time by 80% and ship higher quality products"
				text="Make your whole userbase your QA team. Run comprehensive tests in minutes."
			>
				<Stack direction="row" justify="space-between" spacing={8}>
					<Box
						backgroundColor="blackAlpha.300"
						w="100%"
						h="24px"
						borderRadius="lg"
					/>
					<Box
						backgroundColor="blackAlpha.300"
						w="100%"
						h="24px"
						borderRadius="lg"
					/>
					<Box
						backgroundColor="blackAlpha.300"
						w="100%"
						h="24px"
						borderRadius="lg"
					/>
					<Box
						backgroundColor="blackAlpha.300"
						w="100%"
						h="24px"
						borderRadius="lg"
					/>
					<Box
						backgroundColor="blackAlpha.300"
						w="100%"
						h="24px"
						borderRadius="lg"
					/>
				</Stack>
			</SingleSection>

			<Spacer h={32} />

			<Callout heading="Start using Meeshkan today to test in staging like your real users do in production" />

			<Spacer h="24rem" />
		</Layout>
	)
}

export default IndexPage
