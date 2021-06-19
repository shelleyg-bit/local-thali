<template>
<div class="column items-center">
	<div class="text-h2 q-pa-md text-center" > Hunt & <u>Gather</u></div>
	<div class="q-mt-lg q-gutter-sm">
    <q-tree
      :nodes="groceryList"
      node-key="name"
			label-key="name"
			tick-strategy="leaf"
			:selected.sync="selected"
			:expanded.sync="expanded"
			:ticked.sync="ticked"
    >
		<template v-slot:default-header="prop">
			<div class="row items-center">
				<div class="q-ml-sm text-weight-bold text-h6 text-black">{{ prop.node.name }}</div>
			</div>
		</template>
		<template v-slot:default-body="prop">
			<div v-if="prop.node.quantity">
			Quantity: <span class="text-weight-bold text-black">{{ prop.node.quantity }} {{prop.node.units}}</span>
			</div>

		</template>
		</q-tree>
  </div>
	<div class="row q-mt-lg justify-evenly">
	<q-btn color="black" class="text-h6 col-auto" icon="microwave" label="Start Cooking" @click='$router.push({name: "ThaliPlan"})' no-caps/>

	</div>
</div>




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
