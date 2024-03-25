import fs from "node:fs/promises"
import { getArrayOfCoordinates } from "./utils/getArrayOfCoordinates"
import { getCityCoordinates } from "./utils/getCityCordinates"
import { getPlaces } from "./utils/getPlaces"
import { getUniqueArrayOfObjects } from "./utils/getUniqueArrayOfObjects"

const CITY = process.argv?.[2] || "Constanta"

async function getListOfPlaces() {
	const cityData = await getCityCoordinates(CITY)

	const locations = getArrayOfCoordinates({
		northeast: cityData.geometry.viewport.northeast,
		southwest: cityData.geometry.viewport.southwest,
	})

	console.log(locations)

	// const places = await getPlaces(locations)
	// const data = getUniqueArrayOfObjects(places, "place_id")

	// await fs.writeFile("./places.json", JSON.stringify(data, null, 2))
}

Promise.resolve(getListOfPlaces()).catch(error => {
	console.error("ERROR:", error)
})
