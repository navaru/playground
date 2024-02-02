import { sva } from "@nore/panda/css"

export default sva({
	slots: ["root", "control", "label", "thumb"],
	base: {
		root: {
			alignItems: "center",
			colorPalette: "accent",
			display: "flex",
			position: "relative",
		},
		control: {
			alignItems: "center",
			background: "bg.emphasized",
			borderRadius: "full",
			cursor: "pointer",
			display: "inline-flex",
			flexShrink: "0",
			transitionDuration: "normal",
			transitionProperty: "background",
			transitionTimingFunction: "default",
			_checked: {
				background: "colorPalette.default",
			},

			"& ~ input": {
				border: "0px",
				clip: "rect(0px, 0px, 0px, 0px)",
				height: "1px",
				margin: "-1px",
				overflow: "hidden",
				padding: "0px",
				position: "absolute",
				width: "1px",
				whiteSpace: "nowrap",
				overflowWrap: "normal",
			},
		},
		label: {
			color: "fg.default",
			fontWeight: "medium",
		},
		thumb: {
			background: "bg.default",
			borderRadius: "full",
			boxShadow: "xs",
			transitionDuration: "normal",
			transitionProperty: "transform, background",
			transitionTimingFunction: "default",
			_checked: {
				transform: "translateX(100%)",
				background: { base: "bg.default", _dark: "colorPalette.fg" },
			},
		},
	},
	defaultVariants: {
		size: "md",
	},
	variants: {
		size: {
			sm: {
				root: {
					gap: "2",
				},
				control: {
					width: "7",
					p: "0.5",
				},
				thumb: {
					width: "3",
					height: "3",
				},
				label: {
					textStyle: "sm",
				},
			},
			md: {
				root: {
					gap: "3",
				},
				control: {
					width: "9",
					p: "0.5",
				},
				thumb: {
					width: "4",
					height: "4",
				},
				label: {
					textStyle: "md",
				},
			},
			lg: {
				root: {
					gap: "4",
				},
				control: {
					width: "11",
					p: "0.5",
				},
				thumb: {
					width: "5",
					height: "5",
				},
				label: {
					textStyle: "lg",
				},
			},
		},
	},
})
