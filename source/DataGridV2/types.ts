import type { HTMLStyledProps } from "@nore/panda/jsx"
import type {
	Cell,
	ColumnDef,
	Header,
	HeaderGroup,
	Row,
	RowData,
	Table,
} from "@tanstack/solid-table"
import { styledRecipe } from "./DataGrid.styled"
import {
	type JSX,
	type Accessor,
	type ChildrenReturn,
	type JSXElement,
	type Setter,
} from "solid-js"

declare module "@tanstack/solid-table" {
	interface ColumnMeta<TData extends RowData, TValue> {
		compact?: boolean
	}
}

export type StyledVariantProps = Parameters<typeof styledRecipe.splitVariantProps>[0]

export interface DataGridContext {
	table: Table<any>
}

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
	data: Record<string, any>[]
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

export type DataHeaderProps = HTMLStyledProps<"div"> & {
	children: (data: Header<any, unknown>[]) => JSX.Element
}

export type DataBodyProps = HTMLStyledProps<"div"> & {
	children: (data: Row<any>[]) => JSX.Element
}

export type DataHeaderCell = HTMLStyledProps<"div"> & {
	children: (value: any, isResizing: boolean) => JSX.Element | string
	data: Header<any, unknown>
}

export type DataBodyCell = HTMLStyledProps<"div"> & {
	children: (value: any) => JSX.Element | string
	data: Cell<any, unknown>
}

export type DataRowProps = HTMLStyledProps<"div"> & {
	children: (row: Row<any>) => JSX.Element | string
	data: Row<any>
}
