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
	type ParentProps,
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

type Children<T> = (data: T) => JSX.Element

export interface DataHeaderProps
	extends Omit<HTMLStyledProps<"div">, "children">,
		Omit<ParentProps, "children"> {
	children: Children<Header<any, unknown>[]>
}

export interface DataBodyProps
	extends Omit<HTMLStyledProps<"div">, "children">,
		Omit<ParentProps, "children"> {
	children: Children<Row<any>[]>
}

export interface DataHeaderCell
	extends Omit<HTMLStyledProps<"div">, "children">,
		Omit<ParentProps, "children"> {
	children: (value: any, isResizing: boolean) => JSX.Element | string
	data: Header<any, unknown>
}

export interface DataBodyCell
	extends Omit<HTMLStyledProps<"div">, "children">,
		Omit<ParentProps, "children"> {
	children: Children<any>
	data: Cell<any, unknown>
}

export interface DataRowProps
	extends Omit<HTMLStyledProps<"div">, "children">,
		Omit<ParentProps, "children"> {
	children: Children<Row<any>>
	data: Row<any>
}
