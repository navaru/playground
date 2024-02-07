import {
	createSolidTable,
	getCoreRowModel,
	getFilteredRowModel,
	type TableOptions,
} from "@tanstack/solid-table"
import DATA from "./data.mock.json"
import { createEffect, createSignal } from "solid-js"
import type { DataGridProps, Filter } from "./types"
import { normalizeOptions } from "./utils/normalizeOptions"

export function useDataGridApi(props: DataGridProps) {
	const { data, options } = props
	const [columnFilters, setColumnFilters] = createSignal<Filter[]>([])
	const { columns } = normalizeOptions(options)

	const table = createSolidTable({
		data,
		columns,
		state: {
			get columnFilters() {
				return columnFilters()
			},
		},
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		columnResizeMode: "onChange",
	} as TableOptions<any>)

	createEffect(() => table.setColumnFilters(columnFilters()))

	return { table, columnFilters, setColumnFilters } as any
}

export default useDataGridApi
