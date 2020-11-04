const customComponents = {
	Button: {
		baseStyle: {
			colorScheme: "red",
			borderRadius: "md",
			fontWeight: 900,
			lineHeight: "1.2",
			_focus: {
				boxShadow: "outline",
			},
			_disabled: {
				opacity: 0.4,
				cursor: "not-allowed",
				boxShadow: "none",
			},
			_hover: {
				_disabled: {
					bg: "initial",
				},
			},
		},
	},
}

export default customComponents
