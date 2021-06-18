export default {
	name: 'user',
	state: {
		location: 'Portland, OR, USA',
		eatsMeat: false,
		plannedThalis: [],
		rejectedThalis: [],
		groceryList: null
	},
	mutations: {
		addThali(state, thaliName) {
			state.plannedThalis.push(thaliName)

		},
		rejectThali(state, thaliName) {
			state.rejectedThalis.push(thaliName)

		}
	}
}