import type { SwitchLabelProps } from "./types"
import { useSwitch, useStyled } from "./Switch"

export function SwitchControl(props: SwitchLabelProps) {
	// a utility hook that requires 3 arguments:
	// - the HTML element type
	// - the recipe slot name
	// - the HTML attribute class from 'props'
	const { Styled, classes } = useStyled("span", "control", props.class)

	// uses the `api` from context to handle DOM events
	const api = useSwitch()

	return (
		<>
			<Styled
				{...props}
				class={classes}
				data-state={api.checked() ? "checked" : "unchecked"}
			/>
			<input
				type="checkbox"
				checked={api.checked()}
				onChange={e => api.setChecked(e.currentTarget.checked)}
			/>
		</>
	)
}

export default SwitchControl
