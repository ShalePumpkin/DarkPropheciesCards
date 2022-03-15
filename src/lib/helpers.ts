export function lengthClasses (str: string) : string[] {
	const len = str.length
	const splits = Math.ceil(len / 5)
	const classes = []
	for (let i = 1; i <= splits; i++) {
		const split = i * 5
		classes.push('at-least-' + split)
	}
	return classes
}

export function parseText (text: string) {
	return text.split('\n').join('<br />')
}
