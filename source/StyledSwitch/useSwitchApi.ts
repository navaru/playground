import type { SwitchProps, SwitchApi } from "./types"
import { createSignal } from "solid-js"

export function useSwitchApi(props: SwitchProps): SwitchApi {
	const [checked, setCheckedValue] = createSignal<boolean>(props.checked || false)

	function toggle() {
		setCheckedValue(checked => !checked)
	}

	function setChecked(value: boolean) {
		setCheckedValue(value)

		if (props.onValueChange) {
			props.onValueChange(value)
		}
	}

	return { checked, toggle, setChecked }
}

export default useSwitchApi
