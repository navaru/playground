import { ark } from "@ark-ui/solid"
import type { ComponentProps } from "solid-js"
import { styled } from "@nore/panda/jsx"
import { badge } from "@nore/panda/recipes"

export const Badge = styled(ark.div, badge)
export interface BadgeProps extends ComponentProps<typeof Badge> {}
