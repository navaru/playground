import { ark } from "@ark-ui/solid"
import type { ComponentProps } from "solid-js"
import { styled } from "@nore/panda/jsx"
import { code } from "@nore/panda/recipes"

export const Code = styled(ark.code, code)
export interface CodeProps extends ComponentProps<typeof Code> {}
