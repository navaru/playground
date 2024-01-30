import { ark } from "@ark-ui/solid"
import { Show, splitProps, type JSX } from "solid-js"
import { styled, type HTMLStyledProps } from "@nore/panda/jsx"
import { skeleton } from "@nore/panda/recipes"

const StyledSkeleton = styled(ark.div, skeleton)

export interface SkeletonProps extends HTMLStyledProps<"div"> {
	children?: JSX.Element
	/**
	 * @default false
	 */
	isLoaded?: boolean
}

export const Skeleton = (props: SkeletonProps) => {
	const [localProps, skeletonProps] = splitProps(props, ["isLoaded"])

	return (
		<Show when={localProps.isLoaded} fallback={<StyledSkeleton {...skeletonProps} />}>
			<styled.div animation="fade-in" {...skeletonProps} />
		</Show>
	)
}
