import React, { useState } from "react"
import {
	Heading,
	Text,
	Flex,
	Box,
	Button,
	Image,
	Tabs,
	Tab,
	TabPanels,
	TabPanel,
	TabList,
	Stack,
	DarkMode,
	IconButton,
    Code,
} from "@chakra-ui/core"
import SEO from "../../components/molecules/seo"
import Layout from "../../components/templates/layout"
import { SingleSection } from "../../components/organisms/singleSection"
import { DoubleSection } from "../../components/organisms/doubleSection"
// @ts-expect-error
import testingEnvironment from "../../static/testingEnvironment.png"
import Test from "../../components/molecules/test"
import CodeBlock from "../../components/molecules/codeBlock";

type LightOrDark = "light" | "dark"

const AuthorizationCLIPage = () => {
	const startingColor: LightOrDark = "light"
	const [colorMode, setColorMode] = useState<LightOrDark>(startingColor)
	return (
		<>
			<Layout>
				<SEO
					pageTitle="Automated Access Control Tests"
					pageDescription="Meeshkan lets you run continuous automated tests on your access control system."
					pageUrl="https://meeshkan.com/use-cases/access-control-testing/"
				/>
				<SingleSection hero>
					<Flex direction="column" textAlign="center" mt={12}>
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
								Continuous automated tests
                                <Text display="block">on your access control system</Text>
							</Heading>
							<Text
								fontSize={["lg", "xl", "2xl"]}
								lineHeight="short"
								mb={6}
								color="gray.700"
							>
								Meeshkan Auth ensures that your users can only interact with the resources
                                <Text display="block">that they should have access to, and not those that they shouldn't.</Text>
							</Text>
							<Button
								aria-label="Sign up"
								variantColor="red"
								borderRadius="sm"
								fontWeight={900}
								minW="fit-content"
                                mb={6}
                                fontSize={["xl", "1xl", "2xl"]}
                                p={5}
							>
								Get Started
							</Button>
                            <Box px={20}>
                                <CodeBlock className="language-bash">
                                    $ npm install --save-dev meeshkan-auth
                                </CodeBlock>
                            </Box>
						</Box>
					</Flex>
				</SingleSection>

				<SingleSection>
					<Box
						backgroundColor="gray.50"
						p={8}
						borderRadius="md"
						textAlign="center"
					>
						<Heading
							textAlign="center"
							mb={4}
							as="h2"
							color="gray.700"
							fontSize={["3xl", "3xl", "3xl", "4xl"]}
							fontWeight={900}
							letterSpacing="wide"
							lineHeight="short"
                            pb={4}
						>
							Test your system's access control,
                            <Text display="block">right inside your terminal.</Text>
						</Heading>
                        <Box px={12} pb={6}>
                            <CodeBlock className="language-bash" copyButton={false}>
                                {`
$ meeshkan
✔ admin can interact with \`GET /api/clients\`
✔ admin can interact with \`DELETE /api/client\`
✔ admin can interact with \`POST /api/client\`
✔ end-user can interact with \`GET /api/client\`
✔ end-user can interact with \`POST /api/client/transaction\`
✖ end-user should not be able to interact with \`DELETE /api/client\`!
                            `}
                            </CodeBlock>
                        </Box>
                        <DoubleSection
                            heading="One config file."
                            text="All we need from you is a simple config file. Meeshkan Auth uses the provided credentials to login to different user roles. Then it checks the given paths to determine whether access is granted only to the appropriate users."
                        >
                            <CodeBlock className="language-yaml" copyButton={false}>
                                {`
login_endpoint: https://bank.meeshkan.com/api/login
users:
- admin:
    credentials:
        username: 'admin'
        password: 'pa$$w0rd'
    paths:
        - '/api/clients':
            - 'GET'
        - '/api/client':
            - 'GET'
            - 'POST'
            - 'DELETE'
- client:
    credentials:
        username: 'mike'
        password: 'm3ll0n'
    paths:
        - '/api/transaction':
            - 'POST'
        - '/api/current-client':
            - 'GET'
            - 'POST'
                                `}
                            </CodeBlock>
                        </DoubleSection>
                        <DoubleSection
                            reverse={true}
                            heading="Connect to CI."
                            text="Integrate Meeshkan Auth with your CI pipeline to run automated access control tests for every commit that you make. Some CIs that you can use include CircleCI, Travis, Jenkins, and GitHub Actions."
                        >
                            <Image src="https://hackernoon.com/hn-images/1*EhCpcagPMhm4RTYlcjXAqQ.png" minW={[300, 360, 400]} h="256px" />
                        </DoubleSection>
					</Box>
				</SingleSection>

				<SingleSection>
					<Box
						backgroundColor="gray.900"
						p={8}
						borderRadius="md"
						textAlign="center"
					>
						<Heading
							mb={2}
							color="white"
							as="h2"
							fontSize={["3xl", "3xl", "3xl", "4xl"]}
							fontWeight={900}
							letterSpacing="wide"
							lineHeight="short"
						>
							Prevent the next data leak.
						</Heading>
						<Text mb={4} fontSize="2xl" lineHeight="short" color="gray.200">
							Meeshkan helps you keep your access control system in check. Meeshkan will notify you about
                            the implementation error that leakes access to sensitive information to the wrong user the moment
                            that the bug is brought to life.
						</Text>
						<Button
							aria-label="Sign up"
							variantColor="red"
							borderRadius="sm"
							fontWeight={900}
							minW="fit-content"
						>
							Get Started
						</Button>
					</Box>
				</SingleSection>
			</Layout>
		</>
	)
}

export default AuthorizationCLIPage
