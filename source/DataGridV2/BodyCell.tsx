import { flexRender } from "@tanstack/solid-table"
import { useStyled } from "./DataGrid"
import type { DataBodyCell } from "./types"

export function BodyCell(props: DataBodyCell) {
	const { Styled, classes } = useStyled("div", "cell", props.class)

	return (
		<Styled
			{...props}
			class={classes}
			style={{ width: props.data.column.getSize() + "px" }}
		>
			{props.children(
				flexRender(props.data.column.columnDef.cell, props.data.getContext())
			)}
		</Styled>
	)
}
