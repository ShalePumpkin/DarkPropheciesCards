import {ActionCard, ActionCardDef, ActionCardType, Discipline} from "../../lib/types";
import {BloodMagic, CREATURE, Demonology, ITEM, Necromancy, SPELL} from "../../lib/consts";

const AnyDarkDeed = 'Any Dark Deed'

function basicCard (name: string, type: ActionCardType, image: string, discipline: Discipline) : ActionCardDef {
	return {
		quantity: 3,
		card: {
			power: 1,
			name,
			image,
			type,
			discipline,
			effects: [
				{
					action: {
						icon: 'PlotDarkDeed',
						text: AnyDarkDeed
					},
				}
			]
		}
	}
}

function basicStyle1 (name: string, type: ActionCardType, image: string, discipline: Discipline, top: ActionCardType) : ActionCardDef {
	return {
		quantity: 3,
		card: {
			power: 1,
			name,
			image,
			type,
			discipline,
			effects: [
				{
					action: {
						icon: 'PlotDarkDeed',
						text: AnyDarkDeed
					},
					requirements: [
						{
							topCard: top,
						}
					],
					linkNext: true,
				},
				{
					linkPrev: true,
					action: {
						text: `You may ignore the Top Discard requirement.`
					},
					requirements: [
						{
							discipline,
							level: 1,
						}
					]
				}
			]
		}
	}
}


function basicCardDiscipline (name: string, type: ActionCardType, image: string, discipline: Discipline) : ActionCardDef {
	const def = basicCard(name, type, image, discipline)
	// @ts-ignore
	def.card.effects.push({
		requirements: [
			{
				discipline,
				level: 1,
			}
		],
		action: {
			icon: 'PlotDarkDeed',
			text: AnyDarkDeed,
		}
	})

	return def
}


function basicStyle2 (name: string, type: ActionCardType, image: string, discipline: Discipline, restiction: string) : ActionCardDef {
	const def = basicCard(name, type, image, discipline)
	// @ts-ignore
	def.card.effects[0].action.text = restiction
	// @ts-ignore
	def.card.effects[0].linkNext = true
	// @ts-ignore
	def.card.effects.push({
		requirements: [
			{
				discipline,
				level: 1,
			}
		],
		action: {
			text: 'You may choose any Dark Deed.',
		},
		linkPrev: true,
	})

	return def
}

let cards : ActionCardDef[] = [
	/**
	 * POWER LEVEL 1: Give just 1 plot
	 */
	basicStyle1('Vampire Bat', CREATURE, 'https://i.imgur.com/x3pBh2Q.png', BloodMagic, 'Creature'),
	basicStyle2('Ritual of Thorns', SPELL, 'https://i.imgur.com/Xru2oDX.png', BloodMagic, 'Your Left Dark Deed'),
	basicStyle1('Bone Pendant', ITEM, 'https://i.imgur.com/OjVz3zr.png', Necromancy, 'Item'),
	basicStyle2('Marrow Drawn', SPELL, 'https://i.imgur.com/Fb38LFV.png', Necromancy, 'Your Right Dark Deed'),
	basicStyle1("Imp's Promise", CREATURE, 'https://i.imgur.com/5DHGtuO.png', Demonology, 'Spell'),
	basicStyle2('Sulfur Manacles', ITEM, 'https://i.imgur.com/N5zLQB5.png', Demonology, 'Your Center Dark Deed'),
	/**
	 * POWER LEVEL 2
	 */
	{
		quantity: 2,
		card: {
			power: 2,
			name: 'Crimson Vial',
			image: 'https://i.imgur.com/QYk7S16.png',
			discipline: BloodMagic,
			type: ITEM,
			effects: [
				{
					action: {
						icon: 'PlotDarkDeed',
						text: AnyDarkDeed,
					}
				},
				{
					action: {
						icon: 'Stash',
						text: 'Any card from your hand',
					},
					requirements: [
						{
							discipline: BloodMagic,
							level: 2,
						},
						{
							topCard: BloodMagic,
						}
					]
				},
			]
		}
	},
	{
		quantity: 2,
		card: {
			power: 2,
			name: 'Blood Pact',
			image: 'https://i.imgur.com/qjDMFQy.png',
			discipline: BloodMagic,
			type: SPELL,
			effects: [
				{
					action: {
						text: `All players may draw a card.`,
					}
				},
				{
					action: {
						text: 'You may play an extra card this turn.',
					},
					requirements: [
						{
							discipline: BloodMagic,
							level: 1,
						},
					]
				},
				{
					action: {
						icon: 'PlotDarkDeed',
						text: 'A non-empty Dark Deed',
					},
					requirements: [
						{
							discipline: BloodMagic,
							level: 2,
						},
					]
				},
			]
		}
	},
	{
		quantity: 2,
		card: {
			power: 2,
			name: 'Holy Woman\'s Skull',
			image: 'https://i.imgur.com/EkBWde7.png',
			discipline: BloodMagic,
			type: ITEM,
			effects: [
				{
					action: {
						icon: 'PlotDarkDeed',
						text: 'Your Left or Right Dark Deed',
					}
				},
				{
					action: {
						icon: 'PlotDarkDeed',
						text: 'A Dark Deed with 2 or more cards on it.',
					},
					requirements: [
						{
							discipline: BloodMagic,
							level: 2,
						},
						{
							topCard: CREATURE,
						}
					]
				},
			]
		}
	},
	{
		quantity: 2,
		card: {
			power: 2,
			name: 'Mark of the Eversworn',
			image: 'https://i.imgur.com/11A2F1P.png',
			type: SPELL,
			discipline: Necromancy,
			effects: [
				{
					action: {
						icon: 'PlotDarkDeed',
						text: 'An empty Dark Deed.',
					}
				},
				{
					action: {
						icon: 'PlotDarkDeed',
						text: 'The same Dark Deed',
					},
					requirements: [
						{
							discipline: Necromancy,
							level: 2,
						}
					]
				}
			]
		},
	},
	{
		quantity: 2,
		card: {
			power: 2,
			name: 'Cadaver Servant',
			image: 'https://i.imgur.com/MZIcA1Y.png',
			type: CREATURE,
			discipline: Necromancy,
			effects: [
				{
					action: {
						icon: 'PlotDarkDeed',
						text: 'A Necromancy Dark Deed',
					},
					requirements: [
						{
							topCard: 'Creature',
						},
					]
				},
				{
					action: {
						icon: 'Stash',
						text: 'Top discarded card'
					},
					requirements: [
						{
							discipline: Necromancy,
							level: 2,
						},
					]
				}
			]
		}
	},
	{
		quantity: 2,
		card: {
			power: 2,
			name: 'Gravestone Dust',
			image: 'https://i.imgur.com/xOxnK68.png',
			discipline: Necromancy,
			type: ITEM,
			effects: [
				{
					size: 'md',
					action: {
						text: 'Draw 2 cards and discard one or both of them in any order.',
					},
					requirements: [
						{
							discipline: Necromancy,
							level: 2,
						}
					]
				},
				{
					action: {
						icon: 'PlotDarkDeed',
						text: AnyDarkDeed,
					},
					requirements: [
						{
							topCard: 'Item',
						}
					]
				},
			],
		},
	},
	{
		quantity: 2,
		card: {
			power: 2,
			name: 'Ember Contract',
			image: 'https://i.imgur.com/k7oW7n1.png',
			type: SPELL,
			discipline: Demonology,
			effects: [
				{
					action: {
						text: 'Draw a Dark Deed'
					}
				},
				{
					action: {
						icon: 'PlotDarkDeed',
						text: 'A Demonology Dark Deed'
					},
					requirements: [
						{
							discipline: Demonology,
							level: 1,
						}
					]
				},
				{
					action: {
						icon: 'Stash',
						text: 'Top card of the discard pile'
					},
					requirements: [
						{
							discipline: Demonology,
							level: 3,
						}
					]
				}
			]
		},
	},
	{
		quantity: 2,
		card: {
			power: 2,
			name: 'Winged Familiar',
			image: 'https://i.imgur.com/EYt6SZv.png',
			discipline: Demonology,
			type: CREATURE,
			effects: [
				{
					action: {
						icon: 'PlotDarkDeed',
						text: AnyDarkDeed
					},
					linkNext: true,
				},
				{
					action: {
						icon: 'PlotDarkDeed',
						text: 'Right of previous Dark Deed'
					},
					linkNext: true,
					linkPrev: true,
					requirements: [
						{
							discipline: Demonology,
							level: 1,
						}
					]
				},
				{
					linkPrev: true,
					action: {
						icon: 'PlotDarkDeed',
						text: 'Left of first Dark Deed'
					},
					requirements: [
						{
							discipline: Demonology,
							level: 3,
						},
						{
							topCard: Demonology,
						}
					]
				}
			]
		}
	},
	{
		quantity: 2,
		card: {
			name: "Mad King's Staff",
			type: ITEM,
			image: 'https://i.imgur.com/sVmXA98.png',
			discipline:  Demonology,
			power: 3,
			effects: [
				{
					action: {
						text: 'Resolve the starting Prophecy Verse now.',
					}
				},
				{
					requirements: [
						{
							discipline: Demonology,
							level: 1,
						},
					],
					action: {
						text: 'Resolve a the middle Prophecy Verse now.'
					}
				},
				{
					requirements: [
						{
							discipline: Demonology,
							level: 3,
						},
					],
					action: {
						text: 'Resolve the ending Prophecy Verse now.'
					}
				}
			]
		}
	},
	{
		quantity: 2,
		card: {
			power: 2,
			name: 'Chronicles of the Damned',
			type: SPELL,
			image: 'https://i.imgur.com/5OL7wre.png',
			extraTags: ['Book'],
			discipline: Demonology,
			effects: [
				{
					action: {
						text: 'Draw a Dark Deed. If it is Demonology, add to it.',
					}
				},
				{
					size: 'lg',
					action: {
						text: 'Discard X cards from the top of the deck, where X is your Demonology level. Add every Creature discarded this way to your newest Dark Deed.',
					}
				}
			]
		}
	},
	{
		quantity: 2,
		card: {
			power: 3,
			name: 'Tome of Pain',
			image: 'https://i.imgur.com/y9x77nw.png',
			discipline: BloodMagic,
			type: ITEM,
			extraTags: ['Book'],
			effects: [
				{
					action: {
						icon: 'PlotDarkDeed',
						text: 'An empty Dark Deed'
					},
					linkNext: true,
				},
				{
					linkPrev: true,
					action: {
						icon: "PlotDarkDeed",
						text: 'An adjacent Dark Deed',
					},
					requirements: [
						{
							discipline: BloodMagic,
							level: 2,
						},
						{
							topCard: 'Spell',
						}
					]
				},
				{
					action: {
						icon: "Stash",
						text: 'Two cards from hand.',
					},
					requirements: [
						{
							discipline: BloodMagic,
							level: 4,
						},
						{
							topCard: 'Spell',
						}
					]
				}
			]
		}
	},
	{
		quantity: 2,
		card: {
			power: 3,
			name: 'Necronomicon',
			image: 'https://i.imgur.com/6aLCNma.png',
			discipline: Necromancy,
			type: ITEM,
			extraTags: ['Book'],
			effects: [
				{
					action: {
						icon: 'PlotDarkDeed',
						text: 'Worth the most points',
					},
					requirements: [
						{
							topCard: 'Spell',
						}
					],
				},
				{
					action: {
						icon: 'LevelUp',
						text: 'Your lowest level Grimoire',
					},
					requirements: [
						{
							discipline: Necromancy,
							level: 2,
						}
					]
				},
				{
					action: {
						icon: 'Stash',
						text: 'Top card of the discard pile'
					},
					requirements: [
						{
							discipline: Necromancy,
							level: 4,
						},
					]
				}
			]
		}
	},
	{
		quantity: 2,
		card: {
			power: 3,
			name: 'Nether Prince',
			type: CREATURE,
			image: 'https://i.imgur.com/Bz1249F.png',
			discipline: Demonology,
			effects: [
				{
					action: {
						icon: 'PlotDarkDeed',
						text: AnyDarkDeed,
					},
				},
				{
					action: {
						text: 'A different Dark Deed.',
						icon: 'PlotDarkDeed',
					},
					requirements: [
						{
							discipline: Demonology,
							level: 3,
						},
					]
				},
				{
					action: {
						text: 'ALL your Dark Deeds.',
						icon: 'PlotDarkDeed',
					},
					requirements: [
						{
							discipline: Demonology,
							level: 4,
						},
						{
							topCard: 'Creature',
						},
					]
				},
			]
		}
	},
	{
		quantity: 2,
		card: {
			image: 'https://i.imgur.com/CEnDgL2.png',
			name: 'Sentient Kris',
			type: "Item",
			extraTags: ['Creature'],
			power: 3,
			discipline: BloodMagic,
			effects: [
				{
					action: {
						icon: 'PlotDarkDeed',
						text: 'At least 3 cards on it'
					},
					requirements: [
						{
							discipline: BloodMagic,
							level: 1,
						},
					]
				},
				{
					action: {
						icon: 'LevelUp',
						text: 'Lowest level Grimoire',
					},
					requirements: [
						{
							discipline: BloodMagic,
							level: 3,
						}
					]
				}
			]
		}
	},
	{
		quantity: 2,
		card: {
			power: 3,
			image: 'https://i.imgur.com/EkkeHmr.png',
			name: 'Vines of Decay',
			type: SPELL,
			discipline: Necromancy,
			effects: [
				{
					size: 'md',
					action: {
						text: 'Choose a Dark Deed. Until the end of your turn, it requires 2 fewer cards to complete.',
					}
				},
				{
					action: {
						icon: 'PlotDarkDeed',
						text: 'The chosen Dark Deed.',
					},
					requirements: [
						{
							discipline: Necromancy,
							level: 2,
						}
					]
				}
			]
		}
	},
	/**/
	/*
	 * X COST
	 */
	{
		quantity: 2,
		card: {
			power: 3,
			name: 'Ceremonial Maggots',
			type: CREATURE,
			discipline: Necromancy,
			image: 'https://puu.sh/Hjwl8/f69ade70aa.png',
			description: 'Discard X cards from the top of deck, where X is your Necromancy level plus 2. For every Necromancy card discarded this way, you may add to a Dark Deed.',
		}
	},
	{
		quantity: 2,
		card: {
			power: 3,
			name: 'Sacrificial Portal',
			type: SPELL,
			discipline: Demonology,
			image: 'https://i.imgur.com/Qxx1zUt.png',
			description: 'Draw 2 cards then discard 2 plus your Demonology level cards. For every Creatue you discard, you may add to a Dark Deed.',
		}
	},
	{
		quantity: 2,
		card: {
			power: 3,
			name: 'Sanguinary Focus',
			type: ITEM,
			discipline: BloodMagic,
			image: 'https://i.imgur.com/i39u1Vz.png',
			description: 'Add up to X random cards from your hand to a Dark Deed, where X is your Blood Magic level.',
		}
	},
]

const stats : any = {}

function addStat (statName: string, num: number) {
	stats[statName] = stats[statName] || 0
	stats[statName] += num
}

let total = 0
cards.forEach((def) => {
	const num = def.quantity || 0
	total += num
	const card = def.card
	console.log('card', card.name, num)
	console.log('card power', card.power)
	addStat('Power ' + card.power, num)
	addStat('Power ' + card.power + ' ' + card.discipline.name, num)
	const numAddTos = card.effects?.filter(x => x.action && x.action.icon === 'PlotDarkDeed').length || 0
	addStat(numAddTos + ' AddTos', num)
	addStat('HasAddTo', numAddTos > 0 ? num : 0)
	addStat('Type ' + card.type, num)

	const nuStashes = card.effects?.filter(x => x.action && x.action.icon === 'Stash').length || 0
	addStat('Has Stash', nuStashes > 0 ? num : 0)


	const hasTopDiscard = card.effects?.filter(x => {
		const numTop = x.requirements?.filter(x => !!x.topCard).length || 0
		return numTop > 0
	})?.length || false

	addStat('Top Discard YES', hasTopDiscard ? num : 0)
	addStat('Top Discard NO', !hasTopDiscard ? num : 0)
})

const keys = Object.keys(stats).sort()
console.log('TOTAL CARDS', total)
keys.forEach((key) => {
	console.log(key + ':', stats[key] + ' (' + Math.round(stats[key] / total * 100) + '%' + ')')
})

cards = cards.map(x => {
	x.quantity = 1
	return x
})


export default cards.filter((def) => {
	return true
	return def.card.power === 1
}).reverse()
