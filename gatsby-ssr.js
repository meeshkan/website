export { wrapPageElement, wrapRootElement } from "./gatsby-browser"

export const onRenderBody = ({ setPreBodyComponents }) => {
	setPreBodyComponents([
		<ColorModeScript initialColorMode="light" key="chakra-ui-no-flash" />,
	])
}
