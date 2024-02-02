import type { DataGridProps, DataGridContext } from "./types"
import { createContext, useContext } from "solid-js"
import { createStyledContext, styled, toClasses } from "./styled"
import styledRecipe from "./DataGrid.styles"

const ApiContext = createContext<DataGridContext>()
const useDataGrid = () => useContext(ApiContext) as DataGridContext
const { StyledProvider, useStyled } = createStyledContext(styledRecipe)

export function DataGrid(props: DataGridProps) {
	const [variantProps, rootProps] = styledRecipe.splitVariantProps(props)

	const styledMap = styledRecipe(variantProps)
	const classes = toClasses(styledMap.root!, props.class)
	const Root = styled("label")

	return (
		<StyledProvider value={styledMap}>
			<Root {...rootProps} class={classes}>
				DataGrid
			</Root>
		</StyledProvider>
	)
}

export { useStyled, useDataGrid }
export default DataGrid
