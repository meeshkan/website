import React from "react"
import { Heading, Grid, Text, Image } from "@chakra-ui/core"
import { SingleSection } from "../components/organisims/singleSection"
import SEO from "../components/molecules/seo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Card } from "../components/atoms/card"

import Mike from "../../data/avatars/mike.png"
import Kenna from "../../data/avatars/kenna.png"
import Nik from "../../data/avatars/nikolay.png"
import Fredi from "../../data/avatars/fredrik.png"
import Maria from "../../data/avatars/maria.png"

const AboutUsPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        team: file(relativePath: { eq: "teamGroup.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
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
      <SingleSection heading="Our team">
        <Grid
          templateColumns={[
            "repeat(auto-fill, 1fr)",
            "reapeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={6}
        >
          <Card>
            <Image
              src={Mike}
              size={80}
              aria-describedby="Mike's headshot"
              rounded="sm"
              mx="auto"
              mb={4}
            />
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
            <Image
              src={Kenna}
              size={80}
              aria-describedby="Makenna's headshot"
              rounded="sm"
              mx="auto"
              mb={4}
            />
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
            <Image
              src={Nik}
              size={80}
              aria-describedby="Nikolay's headshot"
              rounded="sm"
              mx="auto"
              mb={4}
            />
            <Text
              fontSize="xl"
              fontWeight={900}
              letterSpacing="wide"
              color="gray.900"
              textAlign="center"
              mb={2}
            >
              Nikolay Zenovkin
            </Text>
            <Text fontWeight={500} textAlign="center">
              Head of Data Science
            </Text>
          </Card>
          <Card>
            <Image
              src={Fredi}
              size={80}
              aria-describedby="Fredrik's headshot"
              rounded="sm"
              mx="auto"
              mb={4}
            />
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
              Open Source Engineer
            </Text>
          </Card>
          <Card>
            <Image
              src={Maria}
              size={80}
              aria-describedby="Maria's headshot"
              rounded="sm"
              mx="auto"
              mb={4}
            />
            <Text
              fontSize="xl"
              fontWeight={900}
              letterSpacing="wide"
              color="gray.900"
              textAlign="center"
              mb={2}
            >
              Maria Malitckaya
            </Text>
            <Text fontWeight={500} textAlign="center">
              Data Scientist
            </Text>
          </Card>
        </Grid>
      </SingleSection>

      <SingleSection heading="Values">
        <Grid
          templateColumns={[
            "repeat(auto-fill, 1fr)",
            "reapeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={6}
        >
          <Card
            heading="Experimentation"
            body="We don’t expect things to work the first time. We encourage you to try and fail."
          />
          <Card
            heading="Humility"
            body="Then, build a schema that unifies these various data sources."
          />
          <Card
            heading="Trust"
            body="If we hire you, it’s because we trust that you know your domain. Make decisions."
          />
          <Card
            heading="Educating"
            body="The platform of a company is best used to share knowledge."
          />
          <Card
            heading="Asking tough questions"
            body="We encourage each other to challenge and better the team."
          />
          <Card
            heading="Being bold"
            body="We want to foster a stable environment that encourages bold risks."
          />
        </Grid>
      </SingleSection>

      <SingleSection heading="What does Meeshkan mean?">
        <Text mt={4} lineHeight="tall">
          Meeshkan is a Hebrew word (ןכשמ) that loosely translates to
          tabernacle. It's the portable temple that the Israelites built during
          the Exodus from Egypt. It served as a stand-in for the larger one they
          were to build in Jerusalem.
        </Text>
        <Text as="p" mt={4} lineHeight="tall">
          What we do well begins with mocks, and they are are no different. In
          short, we think that mocks are like Meeshkans. They are stand-ins for
          the real thing, and in many ways, they need to resemble the real
          thing, but are more lightweight and not as full-featured.
        </Text>
        <Text mt={4} lineHeight="tall">
          We don't mean to endorse one religious tradition over another. What
          we've learned is that the problems our company is solving are ancient
          and of fundamental importance to many communities. The story of the
          Meeshkan helps us focus on the humanistic backbone of what we are
          doing.
        </Text>
      </SingleSection>
    </>
  )
}

export default AboutUsPage
