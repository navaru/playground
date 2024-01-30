import { ark } from "@ark-ui/solid"
import type { ComponentProps } from "solid-js"
import { styled } from "@nore/panda/jsx"
import { link } from "@nore/panda/recipes"

export const Link = styled(ark.a, link)
export interface LinkProps extends ComponentProps<typeof Link> {}
