import {ActionCardType, Discipline} from "./types";

export const BloodMagic : Discipline =	{
	name: 'Blood Magic',
	key: 'bloodmagic',
	backImageURL: 'https://i.imgur.com/LDTfXTe.png',
	iconURL: 'https://i.imgur.com/A13jKmQ.png',
}

export const Demonology : Discipline = {
	name: 'Demonology',
	key: 'demonology',
	backImageURL: 'https://i.imgur.com/0CkQq0N.png',
	iconURL: 'https://i.imgur.com/FLPfFpx.png',
}

export const Necromancy : Discipline = {
	name: 'Necromancy',
	key: 'necromancy',
	backImageURL: 'https://i.imgur.com/9teQZ98.png',
	iconURL: 'https://i.imgur.com/WLkuhTG.png',
}

export const DISCIPLINES = [BloodMagic, Demonology, Necromancy]

export const CREATURE : ActionCardType = 'Creature'
export const SPELL : ActionCardType = 'Spell'
export const ITEM : ActionCardType = 'Item'
