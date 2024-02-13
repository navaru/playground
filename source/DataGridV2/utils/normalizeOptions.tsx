import { CellType, FilterType, type DataGridProps } from "../types"

const renderCellValue = (cell: any) => {
	if (cell === CellType.DATE) {
		return (cell: any) =>
			(!cell.getValue() && "-") || new Date(cell.getValue()).toLocaleDateString()
	}
	if (cell === CellType.MONEY) {
		return (cell: any) => `${cell.getValue().toFixed(2)} RON`
	}

	if (cell === CellType.PERCENTAGE) {
		return (cell: any) => `${cell.getValue().toFixed(2)}%`
	}

	return cell || ((cell: any) => cell.getValue())
}

export const normalizeOptions = (
	options: DataGridProps["options"],
	data: DataGridProps["data"]
) => {
	const filters: {
		type: FilterType
		options?: string[]
		id: string
		value: string[] | string
	}[] = []
	const columns = options.map(option => {
		option.cell = renderCellValue(option.cell)

		if (option?.filter?.type === FilterType.TEXT) {
			filters.push({
				id: option.accessorKey,
				value: option.filter?.defaultValue || "",
				type: option.filter.type,
			})
		}
		if (option?.filter?.type === FilterType.SELECT) {
			const allSelectValues = data.map(row => row[option.accessorKey])
			const selectOptions = [...new Set([...allSelectValues])] as string[]

			filters.push({
				id: option.accessorKey,
				value: option.filter?.defaultValue || "",
				options: selectOptions,
				type: option.filter.type,
			})

			option.filterFn = (row: any[], columnId: string, values: string) => {
				if (values.length === 0) return true
				const rowValue = row.getValue(columnId)

				return values === rowValue
			}
		}

		return option
	})

	return { columns, filters }
}
