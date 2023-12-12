import { Stack } from "$panda/jsx"
import {
	draggable,
	dropTargetForElements,
} from "@atlaskit/pragmatic-drag-and-drop/adapter/element"
import { setCustomNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/util/set-custom-native-drag-preview"
import { createEffect, createSignal } from "solid-js"
import { combine } from "@atlaskit/pragmatic-drag-and-drop/util/combine"
import {
	attachClosestEdge,
	extractClosestEdge,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/addon/closest-edge"
import { Motion } from "@motionone/solid"

export default function DNDElement({
	children,
	id,
}: {
	children?: any
	[key: string]: any
}) {
	const [closureEdge, setClosureEdge] = createSignal<string | null>("")
	const [state, setState] = createSignal<{
		type: string
		container?: HTMLElement | undefined
	}>({ type: "idle", container: undefined })
	let ref: HTMLElement | HTMLDivElement | undefined
	const [dragElement, setDragElement] = createSignal<HTMLElement | null>(null)
	const [isDragging, setIsDragging] = createSignal(false)

	createEffect(() => {
		if (ref) {
			combine(
				draggable({
					element: ref,
					getInitialData() {
						return {
							type: "item",
							id: id,
						}
					},
					onDragStart(event) {
						setIsDragging(true)
					},
					onDrop(event) {
						setIsDragging(false)
					},
					onGenerateDragPreview({ nativeSetDragImage }) {
						setCustomNativeDragPreview({
							render({ container, ...rest }) {
								setState({ type: "preview", container })

								return () => setState({ type: "idle" })
							},
							nativeSetDragImage,
						})
					},
				}),

				dropTargetForElements({
					element: ref,
					getIsSticky: () => true,
					onDropTargetChange: args => {
						// console.log("args", args)
					},
					getData({ input, element }) {
						const data = {
							type: "item-container",
							id: id,
						}

						return attachClosestEdge(data, {
							input,
							element,
							allowedEdges: ["left", "right"],
						})
					},
					onDragEnter: args => {
						const node = args.source.element.cloneNode(true) as HTMLElement
						node.setAttribute("style", "display: block")
						setDragElement(node as HTMLElement)

						if (args.self.data.id === args.source.data.id) {
							return setClosureEdge(null)
						}

						setClosureEdge(extractClosestEdge(args.self.data))
					},
					onDrag: args => {
						if (args.self.data.id === args.source.data.id) {
							return setClosureEdge(null)
						}

						setClosureEdge(extractClosestEdge(args.self.data))
					},
					onDragLeave: () => {
						setClosureEdge(null)
						setDragElement(null)
					},
					onDrop: () => {
						setIsDragging(false)
						setClosureEdge(null)
					},
				})
			)
		}
	})

	createEffect(() => {
		console.log("isDragging()", isDragging())
	})

	return (
		<>
			{closureEdge() === "left" && <NodeEmelent element={dragElement} />}

			<Motion.div
				animate={{ scale: (isDragging() && 0) || 1 }}
				transition={{ duration: 1 }}
				data-id={id}
				ref={ref}
				style={{ ...((isDragging() && { display: "none" }) || {}) }}
			>
				{children()}
			</Motion.div>

			{closureEdge() === "right" && <NodeEmelent element={dragElement} />}
		</>
	)
}
const NodeEmelent = ({ element }: { element: any }) => (
	<Motion.div
		style={{ overflow: "hidden" }}
		// initial={{ scale: 0.8 }}
		// animate={{ scale: 1 }}
		// exit={{ scale: 1 }}
		transition={{ duration: 1 }}
	>
		{element()}
	</Motion.div>
)
