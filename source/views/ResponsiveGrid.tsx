import Grid from "~/components/DNDElement/Grid"
import DraggableGridItem from "~/components/DNDElement/DraggableGridItem"
import _data from "~/components/DNDElement/data"
import { Index, createSignal } from "solid-js"

const swapElements = (array: any[], index1: number, index2: number) => {
	let temp = array.splice(index1, 1)[0]

	array.splice(index2, 0, temp)

	return array
}

function ResponsiveGrid() {
	const [data, setData] = createSignal(_data)

	function changeOrder(order: { to: number; from: number; position: string }) {
		const newData = [...swapElements(data(), order.from, order.to)]

		setData(newData)
	}

	return (
		<Grid>
			<Index each={data()} fallback={<div>Loading...</div>}>
				{(item, index) => (
					<DraggableGridItem id={index} onDrop={changeOrder}>
						<div>{item().content}</div>
					</DraggableGridItem>
				)}
			</Index>
		</Grid>
	)
}

export default ResponsiveGrid
