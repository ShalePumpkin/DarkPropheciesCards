import {ActionCard} from "../../../lib/types";
import React, {ReactNode} from "react";
import DisciplineIcon from "../../../components/DisciplineIcon";
import Effect from "./Effect";
import {lengthClasses} from "../../../lib/helpers";

export default function Card ({card} : {card: ActionCard}) {
	let tags = [card.type, card.discipline.name]
	if (card.extraTags) {
		tags = tags.concat(card.extraTags)
	}

	let mainArea : ReactNode
	if (card.description) {
		// TODO: Some kind of formatting
		mainArea = <div className={"description"}>{card.description}</div>
	} else if (card.effects && card.effects.length) {
		mainArea = <div className={"effects num-" + card.effects.length}>
			{card.effects.map((eff, i) => {
				return <Effect key={i} effect={eff} />
			})}
		</div>
	} else {
		throw new Error('card need desc or effects')
	}

	let powerIcons : ReactNode[] = []
	for (let i = 1; i <= card.power; i++) {
		powerIcons.push(<img src={"https://i.imgur.com/4Gr4IsX.png"} key={i} />)
	}

	return <div className={`_show-bounding card ${card.name.split(/\s/).join('-').toLowerCase()} card-${card.discipline.key}`} style={{backgroundImage: `url(${card.discipline.backImageURL})`}}>
		<div className={"header"}>
			{DisciplineIcon(card.discipline)}
			<div className={"name " + lengthClasses(card.name).join(' ')}>{card.name}</div>
			<div className={"tags"}>{tags.join(', ')}</div>
			<div className={"power"}>
				{card.power}
			</div>
		</div>
		<div className={"image"} style={{backgroundImage: `url(${card.image || 'https://i.imgur.com/0ddW1Wx.png'})`}}>
		</div>
		<div className={"main-area"}>
			{mainArea}
		</div>
	</div>
}
