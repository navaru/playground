import { Router, Routes, Route } from "@solidjs/router"
import { lazy, For } from "solid-js"

const routes = [
	{ path: "/", load: () => import("./views/Home") },
	{ path: "/dnd", load: () => import("./views/DragAndDrop") },
]

export default () => (
	<Router>
		<Routes>
			<For each={routes}>
				{({ path, load }) => <Route path={path} component={lazy(load)} />}
			</For>
		</Routes>
	</Router>
)
