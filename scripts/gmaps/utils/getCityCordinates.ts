import fetch from "node-fetch"

export async function getCityCoordinates(city: string) {
	// const API = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${API_KEY}&query=${city}`;

	// const response = (await fetch(API).then((res) =>
	// res.json()
	// )) as FetchResponse;

	// return response?.results?.[0] || null;

	return {
		formatted_address: "Constanța, Romania",
		geometry: {
			location: {
				lat: 44.1759147,
				lng: 28.6519359,
			},
			viewport: {
				northeast: {
					lat: 44.2783306,
					lng: 28.7089921,
				},
				southwest: {
					lat: 44.0837549,
					lng: 28.5510205,
				},
			},
		},
		icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png",
		icon_background_color: "#7B9EB0",
		icon_mask_base_uri:
			"https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
		name: "Constanța",
		photos: [
			{
				height: 539,
				html_attributions: [
					'<a href="https://maps.google.com/maps/contrib/109244265925310265799">Zurabi Pirtskhalava</a>',
				],
				photo_reference:
					"AWU5eFj1BVU67W5tsZxolEg6rYbnoujVnEKDpts46PM08qXPe1XefB8M7ZMqcyoo6keHZu6DneaE9DqgJadiPurBp48HBOXpZfoNeg3VMPWxy1DGpiaRZ8ujXAktWhIu9PaA9WmcOS9M1ChfQMaBfLVBMozSbyaaLeYZNJ_sZF6T5ht0ab9b",
				width: 720,
			},
		],
		place_id: "ChIJKVI0ZErlukARUEhlPs3he2M",
		reference: "ChIJKVI0ZErlukARUEhlPs3he2M",
		types: ["locality", "political"],
	}
}
