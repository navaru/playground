import { VStack } from "@nore/panda/jsx"
import Switch, { useSwitch } from "~/StyledSwitch/Switch"
import SwitchThumb from "~/StyledSwitch/SwitchThumb"
import SwitchLabel from "~/StyledSwitch/SwitchLabel"
import SwitchControl from "~/StyledSwitch/SwitchControl"

function CustomFunctionality() {
	const api = useSwitch()

	return <>{api.checked() ? "ON" : "OFF"}</>
}

export default function SwitchDemo() {
	return (
		<VStack p="5" gap="5">
			{/* DEFAULT COMPONENT */}
			<Switch checked={true}>
				<SwitchControl>
					<SwitchThumb />
				</SwitchControl>
				<SwitchLabel>Styled switch demo</SwitchLabel>
			</Switch>

			{/* CUSTOMIZED COMPONENT */}
			<Switch size="sm" checked={true}>
				<SwitchControl colorPalette="yellow" borderRadius="0">
					<SwitchThumb borderRadius="0" mt="-1px" />
				</SwitchControl>
				<CustomFunctionality />
				<SwitchLabel textStyle="sm">Customized Switch component</SwitchLabel>
			</Switch>
		</VStack>
	)
}
