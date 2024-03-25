import { API_KEY } from "../constants"
import places from "../places.json"
import fs from "fs"

async function makeRequest(placeID: string) {
	const API = `https://maps.googleapis.com/maps/api/place/details/json?key=${API_KEY}&place_id=${placeID}`

	const response = await fetch(API).then(res => res.json())

	return response
}

const data: any[] = []

async function getPlaceDetails() {
	for await (const place of places as any[]) {
		try {
			const { place_id } = place

			await new Promise(resolve => setTimeout(resolve, 3000))
			const { result } = await makeRequest(place_id)

			data.push(result)
			console.log(place_id)
		} catch (error) {
			console.log(error)
		}
	}

	fs.writeFileSync("places-details.json", JSON.stringify(data, null, 2))
}

getPlaceDetails()
