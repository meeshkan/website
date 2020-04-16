import React from "react"
import { Heading, Grid, Text, Image } from "@chakra-ui/core"
import { SingleSection } from "../components/organisims/singleSection"
import SEO from "../components/molecules/seo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Card } from "../components/atoms/card"

import Mike from "../../data/avatars/mike.png"
import Kenna from "../../data/avatars/kenna.png"
import Fredi from "../../data/avatars/fredrik.png"

const AboutUsPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        team: file(relativePath: { eq: "teamGroup.jpg" }) {
          childImageSharp {
            fluid(cropFocus: NORTH, maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <>
      <SEO
        pageTitle="About the Meeshkan team"
        pageDescription="Details about the Meeshkan team, what we stand for, the name origin, and our investors."
        pageUrl="https://meeshkan.com/about-us/"
      />
      <SingleSection>
        <Heading
          as="h1"
          fontSize={["3xl", "4xl", "5xl"]}
          textAlign="center"
          mb={6}
          color="gray.900"
          fontWeight={900}
          letterSpacing="wide"
          lineHeight="short"
        >
          About the Meeshkan team
        </Heading>

        <Img
          fluid={data.team.childImageSharp.fluid}
          style={{
            borderRadius: 2,
            height: 350,
          }}
        />
      </SingleSection>
      <SingleSection heading="Leadership">
        <Grid
          templateColumns={[
            "repeat(auto-fill, 1fr)",
            "reapeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={6}
        >
          <Card>
            <Image src={Mike} size={80} rounded="sm" mx="auto" mb={4} />
            <Text
              fontSize="xl"
              fontWeight={900}
              letterSpacing="wide"
              color="gray.900"
              textAlign="center"
              mb={2}
            >
              Mike Solomon
            </Text>
            <Text fontWeight={500} textAlign="center">
              Founder / CEO
            </Text>
          </Card>
          <Card>
            <Image src={Kenna} size={80} rounded="sm" mx="auto" mb={4} />
            <Text
              fontSize="xl"
              fontWeight={900}
              letterSpacing="wide"
              color="gray.900"
              textAlign="center"
              mb={2}
            >
              Makenna Smutz
            </Text>
            <Text fontWeight={500} textAlign="center">
              COO
            </Text>
          </Card>
          <Card>
            <Image src={Fredi} size={80} rounded="sm" mx="auto" mb={4} />
            <Text
              fontSize="xl"
              fontWeight={900}
              letterSpacing="wide"
              color="gray.900"
              textAlign="center"
              mb={2}
            >
              Fredrik Fornwall
            </Text>
            <Text fontWeight={500} textAlign="center">
              Head of Development
            </Text>
          </Card>
        </Grid>
      </SingleSection>
    </>
  )
}

export default AboutUsPage
