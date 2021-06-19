<template>
<q-page class="flex flex-center">
<div>
	<div class="q-pa-md q-gutter-sm">
    <q-tree
      :nodes="groceryList"
      node-key="name"
			label-key="name"
			tick-strategy="leaf"
			:selected.sync="selected"
			:expanded.sync="expanded"
			:ticked.sync="ticked"
    />
  </div>
	<div class="row justify-evenly">
	<q-btn class="col-auto" icon="list" label="Start Cooking" @click='$router.push({name: "ThaliPlan"})' no-caps/>

	</div>
</div>

</q-page>



</template>

<script>
const categoryMap = {
	'produce': 'Eat your Fruits & Veggies',
	'dairy': 'Delicious Dairy',
	'grain': 'Grains of Truth',
	'meat': 'Meat Matters?',
	'spice': 'Season of Taste'
}

export default {
	name: 'GroceryList',
	data() {
		return {
			groceryList: [],
			expanded: [],
			selected: '',
			ticked: []
		}
	},
	
	methods: {
		updateGrocerylist() {
			const userGroceryList = this.$store.state.user.groceryList
			const categories = Object.keys(userGroceryList)
			this.expanded.push(categoryMap[categories[0]])
			for (const category of Object.keys(userGroceryList)) {
				const gItem = {name: categoryMap[category]}
				gItem.children = userGroceryList[category]
				this.groceryList.push(gItem)
			}
			console.log(JSON.stringify(this.groceryList))
		}
	},
	created() {
		this.updateGrocerylist()
	}
}

</script>
