import { ark } from "@ark-ui/solid"
import type { ComponentProps } from "solid-js"
import { styled } from "@nore/panda/jsx"
import { textarea } from "@nore/panda/recipes"

export const Textarea = styled(ark.textarea, textarea)
export interface TextareaProps extends ComponentProps<typeof Textarea> {}
