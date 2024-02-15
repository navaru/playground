import { Stack } from "@nore/panda/jsx"
import DataGrid from "~/DataGridV2/DataGrid"
import invoices from "~/invoices.json"

import { CellType } from "~/DataGrid/types"
import { For } from "solid-js"
import { DataHeader } from "~/DataGridV2/DataHeader"
import type { Header } from "@tanstack/table-core"
import { HeaderCell } from "~/DataGridV2/HeaderCell"
import styled from "~/styled"
import { DataBody } from "~/DataGridV2/DataBody"
import { BodyCell } from "~/DataGridV2/BodyCell"
import { DataRow } from "~/DataGridV2/DataRow"
import { Filter } from "~/DataGridV2/Filter"
import { Pagination } from "~/DataGridV2/Pagination"

function Resizer({ header }: { header: Header<any, any> }) {
	const Resizer = styled("div")

	return (
		<Resizer
			onMouseDown={header.getResizeHandler()}
			onTouchStart={header.getResizeHandler()}
			class={`resizer ${header.column.getIsResizing() ? "isResizing" : ""}`}
		/>
	)
}

function RenderItems({ items }: { items: any[] }) {
	return (
		<ol>
			<For each={items}>{item => <li>{item.name}</li>}</For>
		</ol>
	)
}

function onChangeFilter(filters: any) {
	console.log("filters", filters)
}

export default function DataGridDemo() {
	return (
		<Stack p="5">
			<DataGrid
				data={invoices}
				options={[
					{
						accessorKey: "id",
						header: "ID",
					},
					{
						accessorKey: "accountId",
						header: "Account ID",
					},
					{
						accessorKey: "number",
						header: "Invoice Number",
					},
					{
						accessorKey: "status",
						header: "Status",
					},
					{
						accessorKey: "code",
						header: "Code",
					},
					{
						accessorKey: "series",
						header: "Series",
					},
					{
						accessorKey: "items",
						header: "Items",
						cell: (cell: any) => <RenderItems items={cell.getValue()} />,
					},
					{
						accessorKey: "vat",
						header: "Vat",
						cell: CellType.MONEY,
					},
					{
						accessorKey: "subtotal",
						header: "Subtotal",
						cell: CellType.MONEY,
					},
					{
						accessorKey: "total",
						header: "Total",
						cell: CellType.MONEY,
					},
					{
						accessorKey: "discount",
						header: "Discount",
						cell: CellType.PERCENTAGE,
					},
					{
						accessorKey: "paidAt",
						header: "Paid At",
						cell: CellType.DATE,
					},
					{
						accessorKey: "dueAt",
						header: "Due At",
						cell: CellType.DATE,
					},
					{
						accessorKey: "createdAt",
						header: "Created At",
						cell: CellType.DATE,
					},
					{
						accessorKey: "updatedAt",
						header: "Updated At",
						cell: CellType.DATE,
					},
					{
						accessorKey: "provider",
						header: "Provider",
						cell: (cell: any) => <p>{cell.getValue().name}</p>,
					},
					{
						accessorKey: "consumer",
						header: "Consumer",
						cell: (cell: any) => <p>{cell.getValue().name}</p>,
					},
				]}
			>
				<Filter name="status" onChange={onChangeFilter} native={false}>
					{filter => (
						<input
							type="text"
							value={filter.value}
							onInput={e => filter.onChange(e.target.value)}
						/>
					)}
				</Filter>
				<DataHeader>
					{headers => (
						<For each={headers}>
							{header => (
								<HeaderCell data={header}>
									{value => (
										<>
											{value} <Resizer header={header} />
										</>
									)}
								</HeaderCell>
							)}
						</For>
					)}
				</DataHeader>
				<DataBody>
					{rows => (
						<For each={rows}>
							{row => (
								<DataRow data={row}>
									{row => (
										<For each={row.getVisibleCells()}>
											{cell => <BodyCell data={cell}>{value => value}</BodyCell>}
										</For>
									)}
								</DataRow>
							)}
						</For>
					)}
				</DataBody>
				<Pagination>
					{({
						onChange,
						nextPage,
						prevPage,
						state,
						totalPages,
						canNextPage,
						canPrevPage,
					}) => (
						<>
							{canPrevPage() && <button onClick={prevPage}>Previous</button>}
							{state().pageIndex + 1} of {totalPages}
							{canNextPage() && <button onClick={nextPage}>Next</button>}
							<input type="number" onChange={e => onChange(+e.target.value)} />
						</>
					)}
				</Pagination>
			</DataGrid>
		</Stack>
	)
}
