import React from "react"
import { Box } from "@chakra-ui/core"
import Layout from "../components/templates/layout"
import SEO from "../components/molecules/seo"

const ToCPage = () => {
  return (
    <Layout>
      <SEO
        pageTitle="T&amp;C"
        pageDescription="The terms and conditions of using Meeshkan the github app, website, and webapp."
        pageUrl="https://meeshkan.com/terms-and-conditions/"
      />
      <Box height="80vh">
        <iframe
          title="Terms and Conditions from Iubenda for Meeshkan"
          src="https://www.iubenda.com/terms-and-conditions/73853431"
          frameBorder="0"
          style={{ overflow: "hidden", height: "100%", width: "100%" }}
        />
      </Box>
    </Layout>
  )
}

export default ToCPage
