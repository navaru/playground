import { Stack } from "@nore/panda/jsx"
import DataGrid from "~/DataGrid/DataGrid"
import accounts from "~/accounts.json"
import invoices from "~/invoices.json"

import DATA from "../DataGrid/data.mock.json"
import { CellType, FilterType } from "~/DataGrid/types"

export default function SwitchDemo() {
	console.log({ accounts, invoices })

	return (
		<Stack p="5">
			<DataGrid
				data={DATA}
				options={[
					{
						accessorKey: "id",
						header: "ID",
					},
					{
						accessorKey: "lastName",
						header: "Last Name",
						filter: {
							type: FilterType.TEXT,
						},
					},
					{
						accessorKey: "firstName",
						header: "First Name",
					},
					{
						accessorKey: "invoiceNumber",
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
						accessorKey: "invoiceDate",
						header: "Invoice Date",
						cell: CellType.DATE,
					},
					{
						accessorKey: "invoiceAmount",
						header: "Invoice Amount",
						cell: CellType.MONEY,
					},
					{
						accessorKey: "invoicePaid",
						header: "Invoice Paid",
					},
					{
						accessorKey: "dateEmitted",
						header: "Date Emitted",
						cell: CellType.DATE,
					},
					{
						accessorKey: "datePaid",
						header: "Date Paid",
						cell: CellType.DATE,
					},
					{
						accessorKey: "paymentMethod",
						header: "Payment Method",
					},
					{
						accessorKey: "paymentDate",
						header: "Payment Date",
						cell: CellType.DATE,
					},
					{
						accessorKey: "paymentAmount",
						header: "Payment Amount",
						cell: CellType.MONEY,
					},
					{
						accessorKey: "paymentReference",
						header: "Payment Reference",
					},
					{
						accessorKey: "paymentNotes",
						header: "Payment Notes",
					},
				]}
			/>
		</Stack>
	)
}
