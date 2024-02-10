import type { HTMLStyledProps } from "@nore/panda/jsx"
import type { ColumnDef, RowData } from "@tanstack/solid-table"
import { styledRecipe } from "./DataGrid.styled"
import type { Accessor, JSX, Setter } from "solid-js"

declare module "@tanstack/solid-table" {
	interface ColumnMeta<TData extends RowData, TValue> {
		compact?: boolean
	}
}

export type StyledVariantProps = Parameters<typeof styledRecipe.splitVariantProps>[0]

export interface DataGridContext {}

export enum FilterType {
	SELECT = "SELECT",
	TEXT = "TEXT",
	DATE = "DATE",
}

export enum CellType {
	TEXT = "TEXT",
	DATE = "DATE",
	MONEY = "MONEY",
	PERCENTAGE = "PERCENTAGE",
	BADGE = "BADGE",
}

export interface DataGridProps extends StyledVariantProps, HTMLStyledProps<"div"> {
	data: Record<string, string>[]
	options: (ColumnDef<RowData> & {
		filter?: {
			type: FilterType
			options?: string[]
			defaultValue?: string | string[]
		}
	})[]
}

export interface Filter {
	value: any
	id: string
}

export interface FiltersProps {
	columnFilters: Accessor<Filter[]>
	setColumnFilters: Setter<Filter[]>
	filters: {
		type: FilterType
		options?: string[]
		id: string
		value: string[] | string
	}[]
}
