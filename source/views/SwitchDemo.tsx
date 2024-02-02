import { VStack } from "@nore/panda/jsx"
import Switch from "~/StyledSwitch/Switch"
import SwitchThumb from "~/StyledSwitch/SwitchThumb"
import SwitchLabel from "~/StyledSwitch/SwitchLabel"
import SwitchControl from "~/StyledSwitch/SwitchControl"

export default function SwitchDemo() {
	return (
		<VStack p="5" gap="5">
			<Switch checked={true}>
				<SwitchControl>
					<SwitchThumb />
				</SwitchControl>
				<SwitchLabel>Styled switch demo</SwitchLabel>
			</Switch>
		</VStack>
	)
}