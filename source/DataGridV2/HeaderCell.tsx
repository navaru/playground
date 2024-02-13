import { useStyled } from "./DataGrid"
import type { DataHeaderCell } from "./types"

export function HeaderCell(props: DataHeaderCell) {
	const { Styled, classes } = useStyled("div", "headerCell", props.class)

	const value = props.data.column.columnDef.header

	return (
		<Styled {...props} w={props.data.getSize() + "px"} class={classes}>
			{props.children(value, props.data.column.getIsResizing())}
		</Styled>
	)
}
