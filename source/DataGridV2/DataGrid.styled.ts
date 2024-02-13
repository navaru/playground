import { sva } from "@nore/panda/css"

export const styledRecipe = sva({
	slots: ["root", "row", "cell", "header", "headerCell", "body"],
	base: {
		root: {
			// border: "1px solid #424242",
		},
		row: {
			display: "grid",
			width: "fit-content",
			borderBottomStyle: "solid",
			gridAutoFlow: "column",
		},
		cell: {
			boxShadow: "inset 0 0 0 1px #424242",
			overflow: "hidden",
			padding: "5px 10px",
			flexShrink: 1,
			flexGrow: 1,
			borderCollapse: "collapse",

			"& > input": {
				margin: "1px",
				padding: "0.2rem",
				background: "transparent",
				maxWidth: "100%",
			},
		},

		headerCell: {
			flexShrink: 1,
			flexGrow: 1,
			position: "relative",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			color: "#424242",
			padding: "0.5rem",
			fontWeight: "bold",
			fontSize: "16px",
			textTransform: "uppercase",
			textAlign: "center",
			boxShadow: "inset 0 0 0 1px #424242",
			overflow: "hidden",
		},
		header: {
			display: "flex",
			width: "fit-content",
		},
		body: {
			borderCollapse: "collapse",
			display: "block",
		},
	},
})

export default styledRecipe
