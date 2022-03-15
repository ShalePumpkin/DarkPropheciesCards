import definitions from './summons-definitions'
import {ReactNode} from "react";
import Card from "./SummoningCard";
export default function SummoningsDeck () {
	const cards : ReactNode[] = []
	let hasOnly = false
	for (let i = 0; i < definitions.length; i++) {
		if (definitions[i].only) {
			hasOnly = true
			break
		}
	}

	definitions.forEach((def,j) => {
		if (!hasOnly || def.only) {
			cards.push(<Card card={def} key={j} />)
		}
	})

	return <div className={"deck action-deck"}>{cards}</div>
}
