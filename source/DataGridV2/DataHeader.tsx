import { useDataGrid, useStyled } from "./DataGrid"
import type { DataHeaderProps } from "./types"

export function DataHeader(props: DataHeaderProps) {
	const { Styled, classes } = useStyled("div", "row", props.class)

	const { table } = useDataGrid()

	return (
		<Styled {...props} class={classes}>
			{props.children(table.getHeaderGroups()[0]!.headers)}
		</Styled>
	)
}
