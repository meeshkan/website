import React from "react"
import { ColorModeScript } from "@chakra-ui/core"
export { wrapPageElement, wrapRootElement } from "./gatsby-browser"

export const onRenderBody = ({ setPreBodyComponents }) => {
	setPreBodyComponents([
		<ColorModeScript initialColorMode="light" key="chakra-ui-no-flash" />,
	])
}
