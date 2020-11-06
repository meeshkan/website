import { mode, getColor, transparentize } from "@chakra-ui/theme-tools"

type Dict = Record<string, any>

function getBg(props: Dict) {
	const { theme, colorScheme: c } = props
	const lightBg = getColor(theme, `${c}.100`, c)
	const darkBg = transparentize(`${c}.200`, 0.16)(theme)
	return mode(lightBg, darkBg)(props)
}

const customComponents = {
	Text: {
		baseStyle: {
			fontSize: "16px",
			lineHeight: "1.6",
			fontFamily: "body",
		},
	},
	Button: {
		baseStyle: {
			borderRadius: "md",
			fontWeight: 900,
			lineHeight: "1.2",
			minW: "fit-content",
			_focus: {
				boxShadow: "outline",
			},
			_disabled: {
				opacity: 0.4,
				cursor: "not-allowed",
				boxShadow: "none",
			},
			_hover: {
				textDecoration: "none",
				_disabled: {
					bg: "initial",
				},
			},
		},
		defaultProps: {
			colorScheme: "blue",
		},
	},
	Alert: {
		baseStyle: {},
		variants: {
			"left-accent": {
				container: {
					pl: 3,
					borderLeft: "4px solid",
					borderColor: mode(`${c}.500`, `${c}.200`)(props),
					bg: getBg(props),
				},
			},
		},
	},
}

export default customComponents
