import { ToggleGroup as ArkToggleGroup } from "@ark-ui/solid"
import type { ComponentProps } from "solid-js"
import { styled } from "@nore/panda/jsx"
import { toggleGroup } from "@nore/panda/recipes"
import { createStyleContext } from "~/components/utils/create-style-context"

const { withProvider, withContext } = createStyleContext(toggleGroup)

const ToggleGroup = withProvider(styled(ArkToggleGroup.Root), "root")
const ToggleGroupItem = withContext(styled(ArkToggleGroup.Item), "item")

const Root = ToggleGroup
const Item = ToggleGroupItem

export { Item, Root, ToggleGroup, ToggleGroupItem }

export interface ToggleGroupProps extends ComponentProps<typeof ToggleGroup> {}
export interface ToggleGroupItemProps extends ComponentProps<typeof ToggleGroupItem> {}
