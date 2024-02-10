import { Box } from "@nore/panda/jsx"
import { FilterType, type FiltersProps } from "./types"

export default function Filters(props: FiltersProps) {
	const onFilterChange = (id: string, value: any) =>
		props.setColumnFilters(prev =>
			prev.filter(filter => filter.id !== id).concat({ id, value })
		)

	const renderFilters = props.filters.map(filter => {
		const value = props.columnFilters().find(data => data.id === filter.id)?.value || ""
		if (filter.type === FilterType.SELECT) {
			return (
				<Box style={{ display: "flex", "flex-direction": "column" }}>
					<label style={{ "text-transform": "capitalize" }} for={`filter-${filter.id}`}>
						{filter.id}
					</label>
					<select
						id={`filter-${filter.id}`}
						onChange={e => onFilterChange(filter.id, e.target.value)}
					>
						<option value="">Select filter</option>
						{filter.options?.map(option => (
							<option value={option}>{option}</option>
						))}
					</select>
				</Box>
			)
		}
		if (filter.type === FilterType.TEXT) {
			return (
				<Box style={{ display: "flex", "flex-direction": "column" }}>
					<label>{filter.id}</label>
					<input
						type="text"
						value={value}
						onInput={e => onFilterChange(filter.id, e.target.value)}
					/>
				</Box>
			)
		}
	})

	return (
		<Box>
			<Box style={{ display: "flex", "flex-direction": "row" }}>{renderFilters}</Box>
		</Box>
	)
}
