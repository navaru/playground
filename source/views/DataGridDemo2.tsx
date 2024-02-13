import { Stack } from "@nore/panda/jsx"
import DataGrid, { useStyled } from "~/DataGridV2/DataGrid"
import accounts from "~/accounts.json"
import invoices from "~/invoices.json"

import { CellType, FilterType } from "~/DataGrid/types"
import { For } from "solid-js"
import { DataHeader } from "~/DataGridV2/DataHeader"
import type { Header } from "@tanstack/table-core"
import { HeaderCell } from "~/DataGridV2/HeaderCell"
import styled from "~/styled"
import { DataBody } from "~/DataGridV2/DataBody"
import { BodyCell } from "~/DataGridV2/BodyCell"
import { DataRow } from "~/DataGridV2/DataRow"

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

export default function SwitchDemo() {
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
						filter: {
							type: FilterType.SELECT,
						},
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
			</DataGrid>
		</Stack>
	)
}
