import type { DataGridProps, DataGridContext } from "./types"
import { For, createContext, useContext } from "solid-js"
import { createStyledContext, styled, toClasses } from "~/styled"
import styledRecipe from "./DataGrid.styled"
import useDataGridApi from "./useDataGridApi"
import { Box } from "@nore/panda/jsx"
import { flexRender } from "@tanstack/solid-table"
import Filters from "./Filters"

const ApiContext = createContext<DataGridContext>()
const useDataGrid = () => useContext(ApiContext) as DataGridContext
const { StyledProvider, useStyled } = createStyledContext(styledRecipe)

export function DataGrid(props: DataGridProps) {
	const [variantProps, rootProps] = styledRecipe.splitVariantProps(props)
	const api = useDataGridApi(props)

	const styledMap = styledRecipe(variantProps)
	const classes = toClasses(styledMap.root!, props.class)
	const Root = styled("div")

	const { table, columnFilters, setColumnFilters } = api

	console.log(table())

	return (
		<ApiContext.Provider value={api}>
			<StyledProvider value={styledMap}>
				<Root {...rootProps} class={classes}>
					<Filters columnFilters={columnFilters} setColumnFilters={setColumnFilters} />
					<Box class="table" style={{ width: table().getTotalSize() + "px" }}>
						<For each={table().getHeaderGroups()}>
							{headerGroup => (
								<Box class="tr">
									<For each={headerGroup.headers}>
										{header => (
											<Box class="th" style={{ width: header.getSize() + "px" }}>
												{header.column.columnDef.header}
												<Box
													onMouseDown={header.getResizeHandler()}
													onTouchStart={header.getResizeHandler()}
													class={`resizer ${
														header.column.getIsResizing() ? "isResizing" : ""
													}`}
												/>
											</Box>
										)}
									</For>
								</Box>
							)}
						</For>
						<For each={table().getRowModel().rows}>
							{row => (
								<Box class="tr">
									<For each={row.getVisibleCells()}>
										{cell => (
											<Box class="td" style={{ width: cell.column.getSize() + "px" }}>
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</Box>
										)}
									</For>
								</Box>
							)}
						</For>
					</Box>
				</Root>
			</StyledProvider>
		</ApiContext.Provider>
	)
}

export { useStyled, useDataGrid }
export default DataGrid
