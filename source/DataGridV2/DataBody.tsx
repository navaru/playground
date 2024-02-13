import { useDataGrid, useStyled } from "./DataGrid"
import type { DataBodyProps } from "./types"

export function DataBody(props: DataBodyProps) {
	const { Styled, classes } = useStyled("div", "body", props.class)

	const { table } = useDataGrid()

	return (
		<Styled {...props} class={classes}>
			{props.children(table.getRowModel().rows)}
		</Styled>
	)
}
