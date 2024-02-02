import type { SwitchLabelProps } from "./types"
import { useStyled } from "./Switch"

export function SwitchLabel(props: SwitchLabelProps) {
	// a utility hook that requires 3 arguments:
	// - the HTML element type
	// - the recipe slot name
	// - the HTML attribute class from 'props'
	const { Styled, classes } = useStyled("span", "label", props.class)

	return <Styled {...props} class={classes} />
}

export default SwitchLabel
