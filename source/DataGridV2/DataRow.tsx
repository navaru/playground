import { useStyled } from "./DataGrid"
import type { DataRowProps } from "./types"

export function DataRow(props: DataRowProps) {
	const { Styled, classes } = useStyled("div", "row", props.class)

	return (
		<Styled {...props} class={classes}>
			{props.children(props.data)}
		</Styled>
	)
}
