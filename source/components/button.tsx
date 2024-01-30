import { ark } from "@ark-ui/solid"
import type { ComponentProps } from "solid-js"
import { styled } from "@nore/panda/jsx"
import { button } from "@nore/panda/recipes"

export const Button = styled(ark.button, button)
export interface ButtonProps extends ComponentProps<typeof Button> {}
