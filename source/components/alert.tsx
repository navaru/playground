import { ark } from "@ark-ui/solid"
import type { ComponentProps } from "solid-js"
import { styled } from "@nore/panda/jsx"
import { alert } from "@nore/panda/recipes"
import { createStyleContext } from "~/components/utils/create-style-context"

const { withProvider, withContext } = createStyleContext(alert)

const Alert = withProvider(styled(ark.div), "root")
const AlertContent = withContext(styled(ark.div), "content")
const AlertDescription = withContext(styled(ark.p), "description")
const AlertIcon = withContext(styled(ark.svg), "icon")
const AlertTitle = withContext(styled(ark.h5), "title")

const Root = Alert
const Content = AlertContent
const Description = AlertDescription
const Icon = AlertIcon
const Title = AlertTitle

export {
	Alert,
	AlertContent,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Content,
	Description,
	Icon,
	Root,
	Title,
}

export interface AlertProps extends ComponentProps<typeof Alert> {}
export interface AlertContentProps extends ComponentProps<typeof AlertContent> {}
export interface AlertDescriptionProps
	extends ComponentProps<typeof AlertDescription> {}
export interface AlertIconProps extends ComponentProps<typeof AlertIcon> {}
export interface AlertTitleProps extends ComponentProps<typeof AlertTitle> {}
