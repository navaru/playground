import { Stack } from "$panda/jsx"
import { createEffect, createSignal } from "solid-js"
import {
	draggable,
	dropTargetForElements,
} from "@atlaskit/pragmatic-drag-and-drop/adapter/element"
import { setCustomNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/util/set-custom-native-drag-preview"
import { combine } from "@atlaskit/pragmatic-drag-and-drop/util/combine"
import {
	attachClosestEdge,
	extractClosestEdge,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/addon/closest-edge"
import { Motion } from "@motionone/solid"
import { cancelUnhandled } from "@atlaskit/pragmatic-drag-and-drop/addon/cancel-unhandled"
import { disableNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/util/disable-native-drag-preview"
import { preserveOffsetOnSource } from "@atlaskit/pragmatic-drag-and-drop/util/preserve-offset-on-source"
import { render } from "solid-js/web"

export default function DraggableGridItem({
	children,
	id,
}: {
	children?: any
	id: number
}) {
	let ref: HTMLDivElement | undefined
	const [dragElement, setDragElement] = createSignal<HTMLElement | null>(null)
	const [isDragging, setIsDragging] = createSignal(false)
	const [closureEdge, setClosureEdge] = createSignal<string | null>("")
	const [state, setState] = createSignal<{
		type: string
		container?: HTMLElement | undefined
	}>({ type: "idle", container: undefined })

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
					// onGenerateDragPreview({ nativeSetDragImage, ...rest }) {
					// 	setCustomNativeDragPreview({
					// 		render({ container, ...rest }) {
					// 			setState({ type: "preview", container })

					// 			return () => setState({ type: "idle" })
					// 		},

					// 		nativeSetDragImage() {
					// 			return "da"
					// 		},
					// 	})
					// },

					onGenerateDragPreview: ({ nativeSetDragImage, location, source }) => {
						console.log("soucer", source)
						console.log("location", location)

						setCustomNativeDragPreview({
							getOffset: preserveOffsetOnSource({
								// no longer including 'source' in argument name
								// as it is implied by the function name

								element: source.element,
								input: location.current.input,
							}),
							render: ({ container, ...rest }) => {
								console.log("rest", rest)
								render(
									() => (
										<Stack
											ref={ref}
											// data-id={id}
											width="auto"
											minW="240px"
											backgroundColor="#fff"
											color="#000"
											padding="10px"
											borderRadius="5px"
											border="1px solid #e0e0e0"
											lineHeight="1.2em"
											wordWrap="break-word"
											userSelect="none"
											boxSizing="border-box"
											_hover={{
												boxShadow:
													"0 1px 2px 0 rgba(60,64,67,0.302),0 1px 3px 1px rgba(60,64,67,0.149)",
											}}
										>
											{children}
										</Stack>
									),
									container
								)

								/* ... */
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

	return (
		<>
			{closureEdge() === "left" && dragElement}
			<Stack
				ref={ref}
				// data-id={id}
				width="auto"
				minW="240px"
				backgroundColor="#fff"
				color="#000"
				padding="10px"
				borderRadius="5px"
				border="1px solid #e0e0e0"
				lineHeight="1.2em"
				wordWrap="break-word"
				userSelect="none"
				boxSizing="border-box"
				_hover={{
					boxShadow:
						"0 1px 2px 0 rgba(60,64,67,0.302),0 1px 3px 1px rgba(60,64,67,0.149)",
				}}
			>
				{children}
			</Stack>
			{closureEdge() === "right" && dragElement}
		</>
	)
}

const NodeEmelent = ({ element }: { element: any }) => (
	<Motion.div
		// initial={{ scale: 0.8 }}
		// animate={{ scale: 1 }}
		// exit={{ scale: 1 }}
		transition={{ duration: 1 }}
	>
		{element()}
	</Motion.div>
)
