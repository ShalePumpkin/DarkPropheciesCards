import {Effect} from "../../../lib/types";
import {ReactNode} from "react";
import DisciplineIcon from "../../../components/DisciplineIcon";
import {parseText} from "../../../lib/helpers";

export default function EffectC ({effect} : {effect: Effect}) {
	const {requirements, action} = effect
	const {multiplier, icon, text} = action
	const classes = ['effect']

	let requirementC, actionC : ReactNode = null
	classes.push('size-' + (effect.size || 'sm'))

	if (effect.linkNext) {
		classes.push('link-next')
	}
	if (effect.linkPrev) {
		classes.push('link-prev')
	}

	if (requirements && requirements.length) {
		classes.push('has-requirements')
		classes.push('num-requirements-' + requirements.length)
		requirementC = <div className={"requirements"}>
			{requirements.map((req, i) => {
				let label : ReactNode = ''
				let value : ReactNode = ''
				const reqClasses = ['requirement']
				// Requires a Discipline (likely this card's) to be a certain level
				if (req.discipline) {
					reqClasses.push('require-grimoire')
					label = req.discipline.name
					value = <div className={"requirement-grimoire-level"}>
							<span className={"book-icon"}></span>
							<span className={"level-number"}>{req.level}</span>
						</div>
					reqClasses.push(req.discipline.key)
				}
				// Check the top card of the discard pile
				else if (req.topCard) {
					reqClasses.push('top-discard')
					label = 'Top Discard'
					if (typeof req.topCard === 'object') {
						reqClasses.push('require-top-discipline')

						value = DisciplineIcon(req.topCard)
					} else {
						value = req.topCard
					}
				} else if (req.label && req.value) {
					label = req.label
					value = req.value
				}
				return <div className={reqClasses.join(' ')} key={i}>
					<span className={"label"}>{label}</span>
					<span className={"value"}>{value}</span>
					<span className={"indicator"}></span>
				</div>
			})}
		</div>
	}
	let multiplierC : ReactNode = null
	if (multiplier) {
		classes.push('has-multiplier')
		multiplierC = <div className={"effect-multiplier"}>X{multiplier}</div>
	}

	actionC = <div className={"action " + (action.icon ? ' has-icon' : ' no-icon')}>
		{action.icon && <div className={"icon icon-" + action.icon}></div>}
		{action.text}
		{multiplierC}
	</div>

	return <div className={classes.join(' ')}>
		{requirementC}
		{actionC}
	</div>
}
