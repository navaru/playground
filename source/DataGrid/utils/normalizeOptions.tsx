import { CellType, type DataGridProps } from "../types"

function isDate(value: any): boolean {
	const date = new Date(value)

	return !isNaN(date.getTime())
}

const renderCellValue = (cell: any) => {
	if (cell === CellType.DATE) {
		return (cell: any) => new Date(cell.getValue()).toLocaleDateString()
	}
	if (cell === CellType.MONEY) {
		return (cell: any) => `${cell.getValue().toFixed(2)} RON`
	}

	return (props: any) => props.getValue()
}

export const normalizeOptions = (options: DataGridProps["options"]) => {
	const columns = options.map(option => {
		option.cell = renderCellValue(option.cell)

		return option
	})

	return { columns }
}
