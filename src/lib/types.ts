export type Discipline = {
	key: string
	backImageURL: string
	iconURL: string
	name: string
}

export type ActionCardDef = {
	card: ActionCard
	only?: boolean
	quantity: number
}

export type ActionCardType = 'Creature' | 'Spell' | 'Item'

export type ActionCard = {
	name: string
	power: number
	image: string
	type: ActionCardType
	extraTags?: string[]
	discipline: Discipline
	effects?: Effect[]
	description?: string
}

export type EffectRequirement = {
	discipline?: Discipline
	level?: number
	favored?: boolean
	topCard?: Discipline | ActionCardType
	label?: string,
	value?: string,
}

export type EffectTarget = string | Discipline

export type Effect = {
	requirements?: EffectRequirement[]
	size?: 'sm' | 'md' | 'lg',
	action: {
		icon?: 'PlotDarkDeed' | 'LevelUp' | 'Stash' | 'Instead'
		text?: string
		multiplier?: number,
	},
	linkNext?: boolean
	linkPrev?: boolean
}

export type SummoningCard = {
	only?: true
	disciplines: Discipline[]
	name: string
	image: string
	text: string
	textType?: 'endofgame' | 'startofturn'
}
