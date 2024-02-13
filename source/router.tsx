import { Router, Route } from "@solidjs/router"
import { lazy, For } from "solid-js"

const routes = [
	{ path: "/", load: () => import("./views/Home") },
	{ path: "/datagrid", load: () => import("./views/DataGridDemo") },
	{ path: "/datagrid2", load: () => import("./views/DataGridDemo2") },
	{ path: "/switch", load: () => import("./views/SwitchDemo") },
]

export default () => (
	<Router>
		<For each={routes}>
			{({ path, load }) => <Route path={path} component={lazy(load)} />}
		</For>
	</Router>
)
