import React from "react"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import customTheme from "./theme/theme"
import Prism from "prism-react-renderer/prism"
;(typeof global !== "undefined" ? global : window).Prism = Prism
require("prismjs/components/prism-haskell")
require("prismjs/components/prism-purescript")
require("prismjs/components/prism-scheme")
require("prismjs/components/prism-latex")

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      {element}
    </ThemeProvider>
  )
}
