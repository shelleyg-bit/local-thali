export default {
	name: 'recipes',
	state: {
		recipesDb: [
			{
				location: 'Portland, Oregon, USA',
				hasMeat: false,
				recipes: [
					{
						name: 'Potato onion soup',
						ingredients: [{
							name: 'potato',
							category: 'produce',
							quantity: 2,
							units: 'x'
						},
						{
							name: 'onion',
							category: 'produce',
							quantity: 2,
							units: 'x'
						},
						{
							name: 'salt',
							category: 'spice',
							quantity: 2,
							units: 'tsp'
						}],
						steps: [
							'boil & mash potatoes',
							'finely chop onions',
							'throw in a pot & boil'
						]
					},
					{
						name: 'French onion soup',
						ingredients: [{
							name: 'milk',
							category: 'dairy',
							quantity: 2,
							units: 'cups'
						},
						{
							name: 'onion',
							category: 'produce',
							quantity: 2,
							units: 'x'
						},
						{
							name: 'salt',
							category: 'spice',
							quantity: 2,
							units: 'tsp'
						}],
						steps: [
							'boil & mash potatoes',
							'finely chop onions',
							'throw in a pot & boil'
						]
					},
					{
						name: 'Leek onion soup',
						ingredients: [{
							name: 'Leeks',
							category: 'produce',
							quantity: 2,
							units: 'x'
						},
						{
							name: 'onion',
							category: 'produce',
							quantity: 2,
							units: 'x'
						},
						{
							name: 'salt',
							category: 'spice',
							quantity: 2,
							units: 'tsp'
						}],
						steps: [
							'boil & mash potatoes',
							'finely chop onions',
							'throw in a pot & boil'
						]
					}
				]
			},
			{
				location: 'Jaipur, Rajasthan, India',
				hasMeat: false,
				recipes: [
					{
						name: 'aaloo dum banarsi',
						ingredients: [{
							name: 'potato',
							category: 'produce',
							quantity: 4,
							units: 'x'
						},
						{
							name: 'onion',
							category: 'produce',
							quantity: 3,
							units: 'x'
						},
						{
							name: 'salt',
							category: 'spice',
							quantity: 4,
							units: 'tsp'
						},
						{
							name: 'coriander powder',
							category: 'spice',
							quantity: 2,
							units: 'tsp'
						}],
						steps: [
							'boil & lightly fry potatoes',
							'finely chop onions',
							'throw in a pot & let it simmer'
						]
					}
				]
			}
		]

	}
}