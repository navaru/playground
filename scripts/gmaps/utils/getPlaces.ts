import type { FetchResponse, PlaceParams, Results } from "../types"
import { API_KEY, API_DELAY, TYPES_OF_PLACE } from "../constants"

async function fetchPlaces(location: number[], category: string, nextToken?: string) {
	const baseUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json"

	const params = new URLSearchParams({
		key: API_KEY,
		type: category,
		radius: "8000",
		location: location.join(","),
	})

	if (nextToken) params.set("pagetoken", nextToken)

	const url = new URL(params.toString(), baseUrl)
	const response = (await fetch(url).then(res => res.json())) as FetchResponse

	if (response.status === "INVALID_REQUEST") {
		throw Error(`Invalid request: ${JSON.stringify(response, null, 2)}`)
	} else {
		console.log("DATA: ", response.results.length + " " + category)
	}

	const data: Results[] = response.results

	if (response?.next_page_token) {
		await new Promise(done => setTimeout(done, API_DELAY))
		const nextData = await fetchPlaces(location, category, response.next_page_token)
		data.push(...nextData)
	}

	return data
}

export async function getPlaces(locations: number[][]) {
	const response: Results[] = []

	try {
		for (const location of locations) {
			for (const category of TYPES_OF_PLACE) {
				// const result = await fetchPlaces(location, category)
				// response.push(...result)
			}
		}
	} catch (error) {
		console.log(error)
	}

	console.log("response count", response.length)
	return response
}
