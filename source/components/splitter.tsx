import { Splitter as ArkSplitter } from "@ark-ui/solid"
import type { ComponentProps } from "solid-js"
import { styled } from "@nore/panda/jsx"
import { splitter } from "@nore/panda/recipes"
import { createStyleContext } from "~/components/utils/create-style-context"

const { withProvider, withContext } = createStyleContext(splitter)

const Splitter = withProvider(styled(ArkSplitter.Root), "root")
const SplitterPanel = withContext(styled(ArkSplitter.Panel), "panel")
const SplitterResizeTrigger = withContext(
	styled(ArkSplitter.ResizeTrigger),
	"resizeTrigger"
)

const Root = Splitter
const Panel = SplitterPanel
const ResizeTrigger = SplitterResizeTrigger

export { Panel, ResizeTrigger, Root, Splitter, SplitterPanel, SplitterResizeTrigger }

export interface SplitterProps extends ComponentProps<typeof Splitter> {}
export interface SplitterPanelProps extends ComponentProps<typeof SplitterPanel> {}
export interface SplitterResizeTriggerProps
	extends ComponentProps<typeof SplitterResizeTrigger> {}
