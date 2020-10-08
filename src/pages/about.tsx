import React from "react"
import { Heading, Grid, Text, Image, Box, Link } from "@chakra-ui/core"
import { SingleSection } from "../components/organisms/singleSection"
import SEO from "../components/molecules/seo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Card } from "../components/atoms/card"
import Layout from "../components/templates/layout"

import Mike from "../../data/avatars/mike.png"
import Kenna from "../../data/avatars/kenna.png"
import Car from "../../data/avatars/carolyn.png"
import Nik from "../../data/avatars/nikolay.png"
import Fredi from "../../data/avatars/fredrik.png"
import Maria from "../../data/avatars/maria.png"

import systemOne from "../static/System.One_Moderat_Wordmark.svg"

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
        nordic: file(relativePath: { eq: "nordicWebLogo.png" }) {
          childImageSharp {
            fluid(maxWidth: 150, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        connect: file(relativePath: { eq: "connectVenturesLogo.png" }) {
          childImageSharp {
            fluid(maxWidth: 150, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tiny: file(relativePath: { eq: "tinyVCLogo.png" }) {
          childImageSharp {
            fluid(maxWidth: 150, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
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
          alt=""
          fluid={data.team.childImageSharp.fluid}
          style={{
            borderRadius: 2,
            height: 350,
          }}
        />
        <Text mt={4} lineHeight="tall">
          Our product has changed a few times, but our vision of building a fake
          version of the internet, hasn't. We began as a group of researchers,
          and that is still heavily engrained into our culture despite also now
          considering ourselves a software company.
        </Text>
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
          <Card backgroundColor="gray.50">
            <Image
              src={Mike}
              size={80}
              alt="Mike's headshot"
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
          <Card backgroundColor="gray.50">
            <Image
              src={Kenna}
              size={80}
              alt="Makenna's headshot"
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
          <Card backgroundColor="gray.50">
            <Image
              src={Nik}
              size={80}
              alt="Nikolay's headshot"
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
          <Card backgroundColor="gray.50">
            <Image
              src={Car}
              size={80}
              alt="Carolyn's headshot"
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
              Carolyn Stransky
            </Text>
            <Text fontWeight={500} textAlign="center">
              Software Engineer
            </Text>
          </Card>
          <Card backgroundColor="gray.50">
            <Image
              src={Fredi}
              size={80}
              alt="Fredrik's headshot"
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
          <Card backgroundColor="gray.50">
            <Image
              src={Maria}
              size={80}
              alt="Maria's headshot"
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
            backgroundColor="gray.50"
          />
          <Card
            heading="Humility"
            body="Then, build a schema that unifies these various data sources."
            backgroundColor="gray.50"
          />
          <Card
            heading="Trust"
            body="If we hire you, it’s because we trust that you know your domain. Make decisions."
            backgroundColor="gray.50"
          />
          <Card
            heading="Educating"
            body="The platform of a company is best used to share knowledge."
            backgroundColor="gray.50"
          />
          <Card
            heading="Asking tough questions"
            body="We encourage each other to challenge and better the team."
            backgroundColor="gray.50"
          />
          <Card
            heading="Being bold"
            body="We want to foster a stable environment that encourages bold risks."
            backgroundColor="gray.50"
          />
        </Grid>
      </SingleSection>

      <SingleSection heading="Our investors">
        <Grid
          templateColumns={[
            "repeat(auto-fill, 1fr)",
            "reapeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={6}
        >
          <Box
            as={Link}
            // @ts-ignore
            href="https://connectventures.co/"
            aria-label="connect ventures website"
          >
            <Img
              fluid={data.connect.childImageSharp.fluid}
              style={{ maxWidth: 200 }}
            />
          </Box>
          <Box
            as={Link}
            // @ts-ignore
            href="http://www.systemone.vc/"
            aria-label="System One VC website"
          >
            <Image src={systemOne} alt="system one vc logo" maxW="200px" />
          </Box>
          <Box
            as={Link}
            aria-label="Nordic web website"
            // @ts-ignore
            href="https://thenordicweb.com/"
          >
            <Img
              fluid={data.nordic.childImageSharp.fluid}
              style={{ maxWidth: 200 }}
            />
          </Box>
          <Box
            as={Link}
            // @ts-ignore
            href="https://tiny.vc/"
            aria-label="Tiny VC website"
          >
            <Img
              fluid={data.tiny.childImageSharp.fluid}
              style={{ maxWidth: 156 }}
            />
          </Box>
          <Box
            as={Link}
            // @ts-ignore
            href="https://www.nordicmakers.vc/"
            aria-label="Nordic makers website"
            color="gray.700"
            fontSize="xl"
            fontWeight={900}
          >
            Nordic Makers
          </Box>
          <Box
            as={Link}
            // @ts-ignore
            href="http://www.firstfellow.com/"
            aria-label="First fellow partners website"
            color="gray.700"
            fontSize="xl"
            fontWeight={900}
          >
            First Fellow Partners
          </Box>
          <Box
            as={Link}
            // @ts-ignore
            href="https://www.linkedin.com/in/aliomar/?originalSubdomain=fi"
            aria-label="Angel Ali Omar's linkedin"
            color="gray.700"
            fontSize="xl"
            fontWeight={900}
          >
            Ali Omar
          </Box>
          <Box
            as={Link}
            // @ts-ignore
            href="https://futuristic.vc/"
            aria-label="Futuristic VC website"
            color="gray.700"
            fontSize="xl"
            fontWeight={900}
          >
            Futuristic.vc
          </Box>
          <Box
            as={Link}
            // @ts-ignore
            href="https://www.linkedin.com/in/aribackholm"
            aria-label="Angel Ari Backholm's linkedin"
            color="gray.700"
            fontSize="xl"
            fontWeight={900}
          >
            Ari Backholm
          </Box>
          <Box
            as={Link}
            // @ts-ignore
            href="https://www.linkedin.com/in/okitag"
            aria-label="Angel Oki Tåg's linkedin"
            color="gray.700"
            fontSize="xl"
            fontWeight={900}
          >
            Oki Tåg
          </Box>
          <Box
            as={Link}
            // @ts-ignore
            href="https://www.linkedin.com/in/jermyap/"
            aria-label="Angel Jeremy Yap's linkedin"
            color="gray.700"
            fontSize="xl"
            fontWeight={900}
          >
            Jeremy Yap
          </Box>
        </Grid>
      </SingleSection>

      <SingleSection heading="What does Meeshkan mean?">
        <Text mt={4} lineHeight="tall">
          Meeshkan is a Hebrew word (משכן) that loosely translates to
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
    </Layout>
  )
}

export default AboutUsPage
