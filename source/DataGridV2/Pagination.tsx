import { createEffect, createSignal } from "solid-js"
import { useDataGrid } from "./DataGrid"
import type { PaginationProps } from "./types"

export function Pagination(props: PaginationProps) {
	const { table, pagination } = useDataGrid()
	const [canNextPage, setCanNextPage] = createSignal(false)
	const [canPrevPage, setCanPrevPage] = createSignal(false)

	createEffect(() => {
		setCanNextPage(pagination.state().pageIndex < table.getPageCount() - 1)
		setCanPrevPage(pagination.state().pageIndex > 0)
	})

	function nextPage() {
		pagination.goToPage(pagination.state().pageIndex + 1)
	}

	function prevPage() {
		pagination.goToPage(pagination.state().pageIndex - 1)
	}

	function onChange(pageIndex: number) {
		pagination.goToPage(pageIndex - 1)
	}

	return props.children({
		nextPage,
		prevPage,
		onChange,
		state: pagination.state,
		canNextPage,
		canPrevPage,
		totalPages: table.getPageCount(),
	})
}
