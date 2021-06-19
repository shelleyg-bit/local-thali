
const routes = [
	{
		path: '/',
		component: () => import('pages/Intro.vue'),
	},
	{
		path: '/createthali',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'ThaliSpin',
				component: () => import('pages/ThaliSpin.vue')
			},
			{
				path: '/groceryList',
				name: 'GroceryList',
				component: () => import('pages/GroceryList.vue'),
			},
			{
				path: '/thaliPlan',
				name: 'ThaliPlan',
				component: () => import('pages/ThaliPlan.vue'),
			}

		]

	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '*',
		component: () => import('pages/Error404.vue')
	}
]

export default routes
