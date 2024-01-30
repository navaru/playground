import { mergeProps, splitProps } from "solid-js"
import { styled, type HTMLStyledProps } from "@nore/panda/jsx"
import { heading } from "@nore/panda/recipes"

type As = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export type HeadingProps = {
	as?: As
} & HTMLStyledProps<As>

export const Heading = (props: HeadingProps) => {
	const mergedProps = mergeProps({ as: "h2" }, props)
	const [local, rootProps] = splitProps(mergedProps, ["as"])
	const Dynamic = styled(local.as as As, heading)

	return <Dynamic {...rootProps} />
}
