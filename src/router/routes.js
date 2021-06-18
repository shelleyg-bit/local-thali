
const routes = [
	{
		path: '/',
		component: () => import('pages/ThaliSpin.vue'),
	},
	{
		path: '/grocerylist',
		name: 'GroceryList',
		component: () => import('pages/GroceryList.vue'),
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '*',
		component: () => import('pages/Error404.vue')
	}
]

export default routes
