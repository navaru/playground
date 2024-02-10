export function pickFields(data: any[], fields: string[]) {
	return data.map(item => {
		let newItem: Record<string, any> = {}
		fields.forEach(field => {
			if (item.hasOwnProperty(field)) {
				newItem[field] = item[field]
			}
		})
		return newItem
	})
}
