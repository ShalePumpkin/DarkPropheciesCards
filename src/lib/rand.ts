export function getRandomInt (min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export type Weighted<T> = {
	value: T
	weight: number
}

export function getRandomItem<T>(items: T[]) {
	return items[getRandomInt(0, items.length-1)]
}

export function drawRandomItem<T> (items: T[]) : T {
	const removed = items.splice(getRandomInt(0, items.length-1),1)
	return removed[0]
}

export function getWeighted<T>(weightings: Weighted<T>[]) : T {
	let total = 0
	const table = weightings.map((w) => {
		const item = {
			value: w.value,
			min: total,
			max: total + w.weight
		}
		total += w.weight
		return item
	})
	const num = getRandomInt(0, total)
	for (let i = 0; i < table.length; i++) {
		const item = table[i]
		if (num >= item.min && num <= item.max) {
			return item.value
		}
	}
	return weightings[0]?.value
}
