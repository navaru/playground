import { ark } from "@ark-ui/solid"
import type { ComponentProps } from "solid-js"
import { styled } from "@nore/panda/jsx"
import { formLabel } from "@nore/panda/recipes"

export const FormLabel = styled(ark.label, formLabel)
export interface FormLabelProps extends ComponentProps<typeof FormLabel> {}
