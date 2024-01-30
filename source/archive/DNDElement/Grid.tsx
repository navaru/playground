import { Stack } from "@nore/panda/jsx"
import { children, createEffect } from "solid-js"

function Grid({ children: _children }: { children?: any }) {
	let ref: HTMLDivElement | undefined

	const childrenRef = children(() => _children)

	createEffect(() => {
		if (ref && childrenRef()) {
			adjustGridItemsHeight(ref)
		}
	})

	return (
		<Stack
			ref={ref}
			display="grid"
			gridGap="15px"
			gridTemplateColumns="repeat(auto-fill, minmax(240px,1fr))"
			gridAutoRows="180px"
		>
			{childrenRef()}
		</Stack>
	)
}

export default Grid

const adjustGridItemsHeight = grid => {
	const items = grid.children

	for (let i = 0; i < items.length; i++) {
		let item = items[i]

		let rowHeight = parseInt(
			window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
		)
		let rowGap = parseInt(
			window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
		)

		let rowSpan = Math.ceil(
			(item.firstChild.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)
		)
		item.style.gridRowEnd = "span " + rowSpan
	}
}
