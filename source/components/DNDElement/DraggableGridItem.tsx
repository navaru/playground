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
import { preserveOffsetOnSource } from "@atlaskit/pragmatic-drag-and-drop/util/preserve-offset-on-source"
import { render } from "solid-js/web"

export default function DraggableGridItem({
	children: _children,
	id,
	onDrop,
}: {
	onDrop: (order: any) => void
	children?: any
	id: number
}) {
	let ref: HTMLDivElement | undefined
	const [dragElement, setDragElement] = createSignal<HTMLElement | null>(null)
	const [closureEdge, setClosureEdge] = createSignal<string | null>("")
	const [childrenRef] = createSignal(_children)

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
					onGenerateDragPreview: ({ nativeSetDragImage, location, source }) => {
						setCustomNativeDragPreview({
							getOffset: preserveOffsetOnSource({
								element: source.element,
								input: location.current.input,
							}),
							render: ({ container }) => {
								container.style.width = ref?.offsetWidth + "px"
								container.style.height = ref?.offsetHeight + "px"

								render(
									() => (
										<Stack
											width="100%"
											height="100%"
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
											{childrenRef().cloneNode(true)}
										</Stack>
									),
									container
								)
							},
							nativeSetDragImage,
						})
					},
				}),

				dropTargetForElements({
					element: ref,
					getIsSticky: () => true,
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
						if (args.self.data.id === args.source.data.id) {
							return setClosureEdge(null)
						}
						const node = args.source.element.cloneNode(true) as HTMLElement

						node.style.display = "block"

						setDragElement(node as HTMLElement)

						args.source.element.style.display = "none"

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
					onDrop: args => {
						const dropData = {
							to: args.self.data.id,
							from: args.source.data.id,
							position: closureEdge(),
						}

						console.log(dropData)

						if (onDrop) {
							onDrop(dropData)
						}

						args.source.element.style.display = "block"
						setClosureEdge(null)
					},
				})
			)
		}
	})

	return (
		<>
			{closureEdge() === "left" && dragElement()}
			<Stack
				ref={ref}
				data-id={id}
				width="auto"
				overflow="hidden"
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
				{childrenRef()}
			</Stack>
			{closureEdge() === "right" && dragElement()}
		</>
	)
}
