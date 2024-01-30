import { Motion } from "solid-motionone"
import { createSignal } from "solid-js"

export default function ElementAnimation({
	ref,
}: {
	ref: HTMLElement | HTMLDivElement | undefined
}) {
	const [coords, setCoords] = createSignal({ x: 0, y: 0 })

	console.log("ref", ref)

	function onDrag(e) {
		if (e.x === 0 && e.y === 0) {
			setCoords({ x: 0, y: 0 })
		} else {
			setCoords({ x: e.layerX, y: e.layerY })
		}
	}

	function onDrop() {
		setCoords({ x: 0, y: 0 })
	}

	return (
		<Motion.div
			style={{ width: "100px", height: "100px", background: "red" }}
			ref={ref}
			draggable
			onDrag={onDrag}
			onDragEnd={onDrop}
			onDrop={onDrop}
			animate={{
				translateX: `${coords().x}px`,
				translateY: `${coords().y}px`,
			}}
			transition={{ duration: 0.05 }}
		>
			ada
		</Motion.div>
	)
}
