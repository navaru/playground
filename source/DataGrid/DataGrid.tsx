import type { DataGridProps, DataGridContext } from "./types"
import { createContext, useContext } from "solid-js"
import { createStyledContext, styled, toClasses } from "~/styled"
import styledRecipe from "./DataGrid.styled"
import useDataGridApi from "./useDataGridApi"

const ApiContext = createContext<DataGridContext>()
const useDataGrid = () => useContext(ApiContext) as DataGridContext
const { StyledProvider, useStyled } = createStyledContext(styledRecipe)

export function DataGrid(props: DataGridProps) {
	const [variantProps, rootProps] = styledRecipe.splitVariantProps(props)
	const api = useDataGridApi(props)

	const styledMap = styledRecipe(variantProps)
	const classes = toClasses(styledMap.root!, props.class)
	const Root = styled("label")

	return (
		<ApiContext.Provider value={api}>
			<StyledProvider value={styledMap}>
				<Root {...rootProps} class={classes}>
					DataGrid
				</Root>
			</StyledProvider>
		</ApiContext.Provider>
	)
}

export { useStyled, useDataGrid }
export default DataGrid
