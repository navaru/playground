import {
	createSolidTable,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	type TableOptions,
} from "@tanstack/solid-table"
import { createEffect, createSignal } from "solid-js"
import type { DataGridProps, Filter } from "./types"
import { normalizeOptions } from "./utils/normalizeOptions"

export function useDataGridApi(props: DataGridProps) {
	const { data, options } = props
	const { columns, filters } = normalizeOptions(options, data)

	const [pagination, setPagination] = createSignal({ pageIndex: 0, pageSize: 10 })
	const [columnFilters, setColumnFilters] = createSignal<Filter[]>(
		[] as { id: string; value: any }[]
	)

	const table = createSolidTable({
		data,
		columns,
		state: {
			get columnFilters() {
				return columnFilters()
			},
			get pagination() {
				return pagination()
			},
		},
		getPaginationRowModel: getPaginationRowModel(),
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		columnResizeMode: "onChange",
	} as TableOptions<any>)

	function goToPage(pageIndex: number) {
		setPagination({ pageIndex, pageSize: 10 })
	}

	createEffect(() => table.setColumnFilters(columnFilters()))

	return {
		table,
		filters,
		pagination: {
			goToPage,
			state: pagination,
		},
		columnFilters,
		setColumnFilters,
	}
}

export default useDataGridApi
