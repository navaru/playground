import type { HTMLStyledProps } from "@nore/panda/jsx"
import type { RowData } from "@tanstack/solid-table"
import { styledRecipe } from "./DataGrid.styles"

declare module "@tanstack/solid-table" {
	interface ColumnMeta<TData extends RowData, TValue> {
		compact?: boolean
	}
}

export type StyledVariantProps = Parameters<typeof styledRecipe.splitVariantProps>[0]

export interface DataGridContext {}

export interface DataGridProps extends StyledVariantProps, HTMLStyledProps<"div"> {}
