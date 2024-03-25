import type { Northeast, Southwest } from "../types"

export function getArrayOfCoordinates(data: {
	northeast: Northeast
	southwest: Southwest
}) {
	const DESIRED_GRID_LENGTH = 6

	let output: number[][] = []
	let epsilon = 0.0000001
	let intermediate_grid_length = DESIRED_GRID_LENGTH - 1

	let lat_step_size =
		(data.northeast.lat - data.southwest.lat) / intermediate_grid_length
	let lng_step_size =
		(data.northeast.lng - data.southwest.lng) / intermediate_grid_length

	for (
		let lat = data.southwest.lat;
		lat <= data.northeast.lat + epsilon;
		lat += lat_step_size
	) {
		for (
			let lng = data.southwest.lng;
			lng <= data.northeast.lng + epsilon;
			lng += lng_step_size
		) {
			output.push([lat, lng])
		}
	}

	return output
}
