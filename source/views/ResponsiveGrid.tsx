import Grid from "~/components/DNDElement/Grid"
import DraggableGridItem from "~/components/DNDElement/DraggableGridItem"
import data from "~/components/DNDElement/data"

function ResponsiveGrid() {
	return (
		<Grid>
			{data.map((item, index) => (
				<DraggableGridItem id={index}>
					<div>{item.content}</div>
				</DraggableGridItem>
			))}
		</Grid>
	)
}

export default ResponsiveGrid
