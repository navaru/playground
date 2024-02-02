import type { HTMLStyledProps, RecipeVariantProps } from "@nore/panda/types"
import type { JSX, Accessor, ParentProps } from "solid-js"
import styledRecipe from "./Switch.styled"

// defines the `props` that will be passed to `styledRecipe(variantProps)`
export type StyledVariantProps = RecipeVariantProps<typeof styledRecipe> & {}

// defines the `props` that will be passed to `useSwitchApi(apiProps)`
export interface SwitchApiProps {
	checked?: boolean
	onValueChange?: (value: boolean) => void
}

// defines the `api` that will be returned by `useSwitchApi(apiProps)`
// and used as the context value for `useSwitch()`
export interface SwitchApi {
	checked: Accessor<boolean>
	setChecked: (value: boolean) => void
	toggle: () => void
}

// The following type can be interpreted as:
// - HTMLStyledProps:
//  	+ defines <div> props, ex: <Switch id="foo" class="bar">
//  	+ defines <styled> props, ex: <Switch mt={3} p={2} />
// - StyledVariantProps:
//		+ defines <recipe> props, ex: <Switch size="sm" />
// - SwitchApiProps:
//    + defines the props that will be passed to `useSwitchApi()`
export interface SwitchProps
	extends SwitchApiProps,
		HTMLStyledProps<"label">,
		StyledVariantProps {
	children?: JSX.Element
}

export interface SwitchThumbProps extends HTMLStyledProps<"span"> {}
export interface SwitchControlProps extends HTMLStyledProps<"span"> {}
export interface SwitchLabelProps extends HTMLStyledProps<"span">, ParentProps {}
