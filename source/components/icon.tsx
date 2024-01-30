import { ark } from "@ark-ui/solid"
import { type JSX } from "solid-js"
import { styled, type HTMLStyledProps } from "@nore/panda/jsx"
import { icon, type IconVariantProps } from "@nore/panda/recipes"

export interface IconProps extends IconVariantProps, HTMLStyledProps<"svg"> {
	children: JSX.Element
}

export const Icon = (props: IconProps) => {
	return <StyledIcon asChild {...props} />
}

const StyledIcon = styled(ark.svg, icon)
