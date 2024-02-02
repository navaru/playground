import { sva } from "@nore/panda/css"

export const styledRecipe = sva({
	slots: ["root", "row", "cell"],
	base: {
		root: {
			position: "relative",
		},
		row: {
			position: "relative",
		},
		cell: {
			position: "relative",
		},
	},
})

export default styledRecipe
