import {SummoningCard} from "../../lib/types";
import {BloodMagic, Demonology, Necromancy} from "../../lib/consts";

const cards : SummoningCard[] = [
	{
		name: 'Queen of Blood',
		disciplines: [BloodMagic, BloodMagic],
		text: 'The players with the most completed Blood Magic Dark Deeds gain 4 points.',
		image: 'https://i.imgur.com/AltFIKg.jpg',
	},
	{
		name: 'The Souldrinker',
		disciplines: [BloodMagic, Demonology],
		textType: 'startofturn',
		text: 'You may Stash a card from hand.',
		image: 'https://i.imgur.com/u0wHOD9.jpg'
	},
	{
		name: 'Crimson Reaper',
		disciplines: [BloodMagic, Necromancy],
		text: 'Players with the most Stashed cards gains 6 points. Players with the second-most Stashed cards gain 3 points.',
		image: 'https://i.imgur.com/o0yiXWK.png',
	},
	{
		name: 'Keeper of Secrets',
		disciplines: [Demonology, Demonology],
		image: 'https://i.imgur.com/rO5QjBk.jpg',
		text: 'The players with the highest total Grimoire levels gain 4 points.',
	},
	{
		name: 'Shepherd of the Damned',
		disciplines: [Demonology, Necromancy],
		image: 'https://i.imgur.com/xcOnkIs.jpg',
		text: 'Gain 1 point for every two cards on your incomplete Dark Deeds.',
	},
	{
		name: `Death's Widow`,
		disciplines: [Necromancy, Necromancy],
		image: 'https://i.imgur.com/27nQyxc.jpg',
		text: 'Necromancy Dark Deeds are worth 1 extra point.',
	},
]
export default cards
