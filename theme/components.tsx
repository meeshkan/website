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
			colorScheme: "red",
		},
	},
}

export default customComponents
