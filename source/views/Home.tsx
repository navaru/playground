import { Stack } from "@nore/panda/jsx"
import { Button } from "~/components/button"

export default function Home() {
	return (
		<Stack p="4">
			<Button to="/grid">Responsive Grid</Button>
		</Stack>
	)
}
