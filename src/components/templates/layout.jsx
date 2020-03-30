import React from "react"
import './layout.css'
import Navigation from "../organisims/navigation"
import { Box } from "@chakra-ui/core"

const Layout = ({ children }) => {

  return (
    <Box px={6}>
      <Navigation />
      <main>{children}</main>
      {/* footer */}
    </Box>
  )
}

export default Layout
