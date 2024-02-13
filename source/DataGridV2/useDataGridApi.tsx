import {
	createSolidTable,
	getCoreRowModel,
	getFilteredRowModel,
	type TableOptions,
} from "@tanstack/solid-table"
import { createEffect, createSignal } from "solid-js"
import type { DataGridProps, Filter } from "./types"
import { normalizeOptions } from "./utils/normalizeOptions"
import { pickFields } from "./utils/pickFields"

export function useDataGridApi(props: DataGridProps) {
	const { data, options } = props
	const { columns, filters } = normalizeOptions(options, data)

	const [columnFilters, setColumnFilters] = createSignal<Filter[]>(
		(pickFields(filters, ["id", "value"]) as { id: string; value: any }[]) || []
	)

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

	return { table, filters, columnFilters, setColumnFilters } as any
}

export default useDataGridApi
