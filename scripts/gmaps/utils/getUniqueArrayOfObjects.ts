export function getUniqueArrayOfObjects(array: Array<any>, prop: string) {
	const unique = Array.from(new Set(array.map(item => item[prop]))).map(value => {
		return array.find(item => item[prop] === value)
	})

	return unique as Array<object>
}
