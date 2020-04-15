import React from "react"
import { Navigation } from "../organisims/navigation"
import { Footer } from "../organisims/footer"
import { Stack } from "@chakra-ui/core"
import "./layout.css"

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
