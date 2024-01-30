import { Stack } from "@nore/panda/jsx"
import DNDElement from "~/components/DNDElement"
import { Motion } from "solid-motionone"

export default function DragAndDrop() {
	return (
		<div>
			<Stack display="flex" flexDirection="row" rowGap={20}>
				<Motion.div
					layout
					// layoutRoot
					transition={{ duration: 0.3 }}
					style={{ display: "flex", width: "100%" }}
				>
					<DNDElement id={1}>
						<Stack width="100px" height="100px" bg="red">
							1
						</Stack>
					</DNDElement>
					<DNDElement id={2}>
						<Stack width="100px" height="100px" bg="green">
							2
						</Stack>
					</DNDElement>
					<DNDElement id={3}>
						<Stack width="100px" height="100px" bg="blue">
							3
						</Stack>
					</DNDElement>
					<DNDElement id={4}>
						<Stack width="100px" height="100px" bg="pink">
							4
						</Stack>
					</DNDElement>
				</Motion.div>
			</Stack>
		</div>
	)
}
