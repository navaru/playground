import type { ParentProps, JSX } from "solid-js"
import { createContext, useContext } from "solid-js"
import { styled } from "@nore/panda/jsx"

export type ElementType = keyof JSX.IntrinsicElements

export type AnyRecipe = {
	(props?: Record<string, unknown>): Record<string, string>
	splitVariantProps: (props: Record<string, unknown>) => any
}

export function toClasses<T extends string>(styledPart: T, classList?: string) {
	return classList ? `${styledPart} ${classList}` : styledPart
}

export function createStyledContext<T extends AnyRecipe, R = ReturnType<T>>(
	styledRecipe: T
) {
	const StyledContext = createContext<R>()

	function useStyled<E extends ElementType, P extends keyof R>(
		element: E,
		part: P,
		classList?: string
	) {
		const styledMap = useContext(StyledContext) as R
		const classes = toClasses(styledMap[part] as string, classList)
		const Styled = styled(element)

		return { Styled, classes, styled, styledRecipe }
	}

	function StyledProvider(props: ParentProps<{ value: R }>) {
		return (
			<StyledContext.Provider value={props.value}>
				{props.children}
			</StyledContext.Provider>
		)
	}

	return { StyledProvider, useStyled, styled, styledRecipe }
}

export { styled }
export default styled
