import definitions from './deck-definitions'
import {ReactNode} from "react";
import Card from "./components/Card";
export default function ActionDeck () {
	const cards : ReactNode[] = []
	let hasOnly = false
	for (let i = 0; i < definitions.length; i++) {
		if (definitions[i].only) {
			hasOnly = true
			break
		}
	}

	definitions.forEach((def,j) => {
		const quant = def.quantity || 1
		for(let i = 1; i <= quant; i++) {
			if (!hasOnly || def.only) {
				cards.push(<Card card={def.card} key={`${j}_${i}`} />)
			}
		}
	})

	return <div className={"deck action-deck"}>{cards}</div>
}
