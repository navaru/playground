import { ark } from "@ark-ui/solid"
import type { ComponentProps } from "solid-js"
import { styled } from "@nore/panda/jsx"
import { input } from "@nore/panda/recipes"

export const Input = styled(ark.input, input)
export interface InputProps extends ComponentProps<typeof Input> {}
