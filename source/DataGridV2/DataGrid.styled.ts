import { sva } from "@nore/panda/css"

export const styledRecipe = sva({
	slots: ["root", "row", "cell", "header", "headerCell", "body"],
	base: {
		root: {
			position: "relative",
			// border: "1px solid #424242",
		},
		row: {
			display: "flex",
			width: "fit-content",
		},
		cell: {
			boxShadow: "inset 0 0 0 1px #424242",
			overflow: "hidden",
			padding: "5px 10px",

			"& > input": {
				margin: "1px",
				padding: "0.2rem",
				background: "transparent",
				maxWidth: "100%",
			},
		},

		headerCell: {
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
