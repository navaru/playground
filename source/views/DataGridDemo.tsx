import { Stack } from "@nore/panda/jsx"
import DataGrid from "~/DataGrid/DataGrid"
import accounts from "~/accounts.json"
import invoices from "~/invoices.json"
import DATA from "../DataGrid/data.mock.json"

import { CellType, FilterType } from "~/DataGrid/types"
import { For } from "solid-js"

function RenderItems({ items }: { items: any[] }) {
	console.log(items)

	return (
		<ol>
			<For each={items}>{item => <li>{item.name}</li>}</For>
		</ol>
	)
}

export default function SwitchDemo() {
	console.log({ accounts, invoices })

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
			/>
		</Stack>
	)
}
