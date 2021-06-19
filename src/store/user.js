export default {
	name: 'user',
	state: {
		location: 'Portland, Oregon, USA',
		eatsMeat: false,
		plannedThalis: [],
		rejectedThalis: [],
		groceryList: {}
	},
	mutations: {
		updateLocation(state, location) {
			state.location = location
		},
		addThali(state, thaliName) {
			state.plannedThalis.push(thaliName)

		},
		rejectThali(state, thaliName) {
			state.rejectedThalis.push(thaliName)

		},
		addItemsToGrocery(state, ingredients) {
			for (const item of ingredients) {
				let categoryItems = state.groceryList[item.category]
					? state.groceryList[item.category]
					: null
				let existingItem = categoryItems
					? categoryItems.find((gItem) => gItem.name === item.name)
					: null
				if (existingItem) {
					existingItem.quantity += item.quantity

				} else {
					if (!categoryItems) {
						state.groceryList[item.category] = []
					}
					state.groceryList[item.category].push({ name: item.name, quantity: item.quantity, units: item.units })

				}

			}
		}
	}
}