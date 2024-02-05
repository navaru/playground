import { Stack } from "@nore/panda/jsx"
import DataGrid from "~/DataGrid/DataGrid"
import accounts from "~/accounts.json"
import invoices from "~/invoices.json"

export default function SwitchDemo() {
	console.log({ accounts, invoices })

	return (
		<Stack p="5">
			<DataGrid />
		</Stack>
	)
}
