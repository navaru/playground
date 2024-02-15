import { createEffect, createSignal } from "solid-js"
import { useDataGrid } from "./DataGrid"
import type { FilterProps } from "./types"

export function Filter({
	name,
	native = true,
	initialValue = "",
	onChange,
	children,
}: FilterProps) {
	const { table, setColumnFilters, columnFilters } = useDataGrid()
	const [filterValue, setFilterValue] = createSignal(initialValue)

	if (native) {
		setColumnFilters(prev =>
			prev
				.filter(filter => filter.id !== name)
				.concat({ id: name, value: initialValue })
		)
	}

	createEffect(() => onChange?.(columnFilters()))

	function onChangeFilter(value: any) {
		setFilterValue(value)

		if (native) {
			setColumnFilters(prev =>
				prev.filter(filter => filter.id !== name).concat({ id: name, value })
			)
		}
	}

	return children({ value: filterValue(), onChange: onChangeFilter })
}
