import { Stack } from "@nore/panda/jsx"

export default function GridItem({ children }: { children?: any }) {
	return (
		<Stack
			width="auto"
			minWidth="240px"
			backgroundColor="#fff"
			padding="10px"
			borderRadius="5px"
			border="1px solid #e0e0e0"
			lineHeight="1.2em"
			wordWrap="break-word"
			userSelect="none"
		>
			{children}
		</Stack>
	)
}
