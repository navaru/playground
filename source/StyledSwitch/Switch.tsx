import type { SwitchApi, SwitchProps } from "./types"
import { splitProps, createContext, useContext } from "solid-js"
import { createStyledContext, styled, toClasses } from "~/styled"
import styledRecipe from "./Switch.styled"
import useSwitchApi from "./useSwitchApi"

const ApiContext = createContext<SwitchApi>()
const useSwitch = () => useContext(ApiContext) as SwitchApi
const { StyledProvider, useStyled } = createStyledContext(styledRecipe)

export function Switch(props: SwitchProps) {
	// extract the `api` props
	const [apiProps, other] = splitProps(props, ["checked", "onValueChange"])
	// extract the `recipe` props
	const [variantProps, rootProps] = styledRecipe.splitVariantProps(other)

	// create the `api` and `styled` context values
	const api = useSwitchApi(apiProps)
	const styledMap = styledRecipe(variantProps)

	// create the value for the `class` prop
	const classes = toClasses(styledMap.root!, props.class)
	// create the `Root` element that can handle styled props
	const Root = styled("label")

	return (
		<ApiContext.Provider value={api}>
			<StyledProvider value={styledMap}>
				<Root {...rootProps} class={classes}>
					{props.children}
				</Root>
			</StyledProvider>
		</ApiContext.Provider>
	)
}

export { useSwitch, useStyled }
export default Switch
