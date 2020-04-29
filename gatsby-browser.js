import React from "react"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import customTheme from "./theme/theme"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      {element}
    </ThemeProvider>
  )
}
