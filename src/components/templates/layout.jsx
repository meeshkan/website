import React from "react"
import "./layout.css"
import { Navigation } from "../organisims/navigation"
import { Footer } from "../organisims/footer"
import { Stack } from "@chakra-ui/core"

const Layout = ({ children }) => {
  return (
    <>
      <Stack minH="90vh" px={6} spacing={0}>
        <Navigation />
        <main>{children}</main>
      </Stack>
      <Footer />
    </>
  )
}

export default Layout
