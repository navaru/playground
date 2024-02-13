import type { JSX } from "solid-js"
import { useDataGrid, useStyled } from "./DataGrid"
import type { DataHeaderProps } from "./types"

export function DataHeader(props: DataHeaderProps): JSX.Element {
	const { Styled, classes } = useStyled("div", "row", props.class)

	const { table } = useDataGrid()

	return (
		<Styled {...props} class={classes}>
			{props.children(table.getHeaderGroups()[0]!.headers)}
		</Styled>
	)
}
