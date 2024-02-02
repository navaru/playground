import type { SwitchThumbProps } from "./types"
import { useSwitch, useStyled } from "./Switch"

export function SwitchThumb(props: SwitchThumbProps) {
	// a utility hook that requires 3 arguments:
	// - the HTML element type
	// - the recipe slot name
	// - the HTML attribute class from 'props'
	const { Styled, classes } = useStyled("span", "thumb", props.class)

	// uses the `api` from context to handle DOM events
	const api = useSwitch()

	return (
		<Styled
			{...props}
			class={classes}
			data-state={api.checked() ? "checked" : "unchecked"}
		/>
	)
}

export default SwitchThumb
