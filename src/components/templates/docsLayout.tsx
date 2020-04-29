import React from "react"
import { Box } from "@chakra-ui/core"
import { MDXProvider } from "@mdx-js/react"
import MDXComponents from "../molecules/mdxComponents"
import SideNav from "../docsComponents/sideNavigation"
import DocsNavigation from "../docsComponents/docsNavigation"

type LayoutProps = {
  children: Object
}

const DocsLayout = ({ children }: LayoutProps) => {
  return (
    <MDXProvider components={MDXComponents}>
      <DocsNavigation />
      <Box>
        <SideNav
          display={["none", null, "block"]}
          maxWidth="18rem"
          width="full"
        />
        <Box pl={[0, null, "18rem"]} backgroundColor="gray.50" py={2}>
          <Box
            as="main"
            height="92.5vh"
            mx="auto"
            maxWidth="46rem"
            pt={6}
            px={5}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </MDXProvider>
  )
}

export default DocsLayout
