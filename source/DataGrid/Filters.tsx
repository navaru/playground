import { Box } from "@nore/panda/jsx"
import type { FiltersProps } from "./types"

export default function Filters(props: FiltersProps) {
	const lastName =
		props.columnFilters().find(filter => filter.id === "lastName")?.value || ""

	const onFilterChange = (id: string, value: any) =>
		props.setColumnFilters(prev =>
			prev.filter(filter => filter.id !== id).concat({ id, value })
		)

	return (
		<Box>
			<Box style={{ display: "flex", "flex-direction": "column" }}>
				<label>Filter by last name</label>
				<input
					type="text"
					value={lastName}
					onInput={e => onFilterChange("lastName", e.target.value)}
				/>
			</Box>
		</Box>
	)
}
