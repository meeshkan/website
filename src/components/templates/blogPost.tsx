import React from "react"
import { SingleSection } from "../organisms/singleSection"
import {
	Flex,
	FormControl,
	FormLabel,
	Input,
	Heading,
	Stack,
	Button,
	Grid,
	Avatar,
	Text,
	Link as ChakraLink,
	Box,
	DarkMode,
} from "@chakra-ui/react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import mdxComponents from "../molecules/mdxComponents"
import { Link } from "gatsby"
import SEO from "../molecules/seo"
import Layout from "./layout"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import LeadForm from "../molecules/leadForm"

type BlogPostProps = {
	data: any // type of object errors 🤔
	pageContext: any // type of object errors 🤔
}

const BlogPost = ({ data, pageContext }: BlogPostProps) => {
	const { frontmatter, body } = data.mdx
	const { previous, next } = pageContext

	const prettyDate = (date) => {
		const rawDate = new Date(date)
		return rawDate.toLocaleDateString("en-US", {
			month: "short",
			year: "numeric",
			day: "numeric",
		})
	}

	return (
		<Layout>
			<MDXProvider components={mdxComponents}>
				<SEO
					pageTitle={frontmatter.title}
					pageDescription={frontmatter.description}
					pageUrl={`https://meeshkan.com/blog/${frontmatter.slug}/`}
				/>
				<SingleSection maxWidth="880px">
					<Heading as="h1" textStyle="h1" textAlign="center" my={12}>
						{frontmatter.title}
					</Heading>
					<Grid
						display={["grid", "grid", "flex", "flex"]}
						justifyContent="center"
						gap={6}
						maxW={600}
						mb={6}
						mx="auto"
					>
						{frontmatter.authors.length > 1 ? (
							frontmatter.authors.map((author) => (
								<Stack isInline align="center" spacing={4} mx={4}>
									<Avatar
										name={author.name}
										src={author.avatar.childImageSharp.fluid.src}
										size="md"
									/>
									<Box>
										<Text
											as={ChakraLink}
											href={author.authorLink}
											target="_blank"
											rel="noopener noreferrer"
											fontWeight={700}
										>
											{author.name}
										</Text>
										<Text>{author.bio}</Text>
									</Box>
								</Stack>
							))
						) : (
							<Stack isInline align="center" justify="center" spacing={4}>
								<Avatar
									name={frontmatter.authors[0].name}
									src={frontmatter.authors[0].avatar.childImageSharp.fluid.src}
									size="md"
								/>
								<Box>
									<Text
										as={ChakraLink}
										// @ts-ignore
										href={frontmatter.authors[0].authorLink}
										target="_blank"
										rel="noopener noreferrer"
										fontWeight={700}
									>
										{frontmatter.authors[0].name}
									</Text>
									<Text>{frontmatter.authors[0].bio}</Text>
								</Box>
							</Stack>
						)}
					</Grid>
					<Text textAlign="center" color="red.500" fontWeight={700} mb={6}>
						{prettyDate(frontmatter.date)}{" "}
						{frontmatter.updated ? (
							<Text ml={2} color="gray.500" fontWeight="400">
								Updated on {prettyDate(frontmatter.updated)}
							</Text>
						) : null}
					</Text>
					<MDXRenderer>{body}</MDXRenderer>

					<Stack isInline spacing={6} justify="center" mt={12} fontWeight="700">
						{next !== null ? (
							<Button
								as={Link}
								to={`/blog/${next.frontmatter.slug}/`}
								aria-label={`Read the blog: ${next.frontmatter.title}.`}
								leftIcon={<ArrowBackIcon />}
								colorScheme="gray"
								variant="ghost"
							>
								Newer post
							</Button>
						) : (
							<Button
								colorScheme="gray"
								variant="ghost"
								isDisabled
								leftIcon={<ArrowBackIcon />}
							>
								Newer post
							</Button>
						)}

						{previous !== null ? (
							<Button
								as={Link}
								// @ts-ignore
								to={`/blog/${previous.frontmatter.slug}/`}
								aria-label={`Read the blog: ${previous.frontmatter.title}.`}
								rightIcon={<ArrowForwardIcon />}
								colorScheme="gray"
								variant="ghost"
							>
								Older post
							</Button>
						) : (
							<Button
								isDisabled
								rightIcon={<ArrowForwardIcon />}
								variant="ghost"
								colorScheme="gray"
							>
								Older post
							</Button>
						)}
					</Stack>
					<Box
						maxW="1000px"
						mx="auto"
						backgroundColor="gray.900"
						mt={16}
						p={8}
						rounded="lg"
					>
						<Heading
							as="h3"
							textStyle="h3"
							color="white"
							textAlign="center"
							mb={4}
						>
							Don’t miss the next post!
						</Heading>
						<LeadForm formName="blog" CTA="Join our mailing list" />
						<Text textAlign="center" color="gray.200">
							Absolutely no spam. Unsubscribe anytime.
						</Text>
					</Box>
				</SingleSection>
			</MDXProvider>
		</Layout>
	)
}

export const query = graphql`
	query PostsBySlug($slug: String!) {
		mdx(frontmatter: { slug: { eq: $slug } }) {
			body
			excerpt(pruneLength: 80)
			frontmatter {
				title
				description
				date
				updated
				authors {
					avatar {
						childImageSharp {
							fluid {
								src
							}
						}
					}
					name
					bio
					authorLink
				}
				slug
			}
		}
	}
`

export default BlogPost
