import { ark } from "@ark-ui/solid"
import type { ComponentProps } from "solid-js"
import { styled } from "@nore/panda/jsx"
import { iconButton } from "@nore/panda/recipes"

export const IconButton = styled(ark.button, iconButton)
export interface IconButtonProps extends ComponentProps<typeof IconButton> {}
