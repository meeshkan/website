import React from "react"
import { Box } from "@chakra-ui/core"
import Layout from "../components/templates/layout"

const ToCPage = () => {
  return (
    <Layout>
      <Box height="80vh">
        <iframe
          title="Terms and Conditions from Iubenda for Meeshkan"
          src="https://www.iubenda.com/terms-and-conditions/73853431"
          frameborder="0"
          style={{ overflow: "hidden", height: "100%", width: "100%" }}
        />
      </Box>
    </Layout>
  )
}

export default ToCPage
