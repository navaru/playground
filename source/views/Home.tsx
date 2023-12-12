import { Stack } from "$panda/jsx"
import DraggableItem from "~/components/Drag-and-Drop/DraggableItem"
import { Motion } from "@motionone/solid"
import ElementAnimation from "~/components/Drag-and-Drop/ElementAnimation"

export default function Main() {
	return (
		<Stack flex="1" justify="center" align="center">
			<h1>Playground</h1>
			<Motion.div
				initial={{ opacity: 0, scale: 0.6 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.6 }}
				transition={{ duration: 0.3 }}
				drag={true}
			>
				da123123131
			</Motion.div>
			<div style={styles.root}>
				<DraggableItem id={1} />
				<DraggableItem id={2} />
				<DraggableItem id={3} />
				<DraggableItem id={4} />
				<DraggableItem id={5} />
			</div>
		</Stack>
	)
}

const styles = {
	root: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		gap: "20px",
		transition: "all 0.2s ease-in-out",
	},
}
