<template>
<div>
    <img
      alt="Quasar logo"
      src="assets/thali.jpg"
      style="width: 400px; height: 400px"
      @click="generateRecipe"
    >
    <q-dialog v-model='showRecipe' persistent>
	    <RecipeCard :thaliRecipe="thaliRecipe" />
    </q-dialog>

		<q-dialog v-model='noMoreRecipesLeft'>
			<q-card>
				<q-card-section>
					<div class="text-h6">
		       Congratulations! You have eaten the whole world
					</div>
				</q-card-section>
				
			</q-card>
		</q-dialog>

		<div class="row justify-evenly">
			<q-btn class="q-ma-md col-auto" icon="list" 
			label="What's Cooking?" @click='goToThaliPlan' no-caps/>
			<q-btn class="q-ma-md col-auto" icon="list"
			label="GroceryList" @click='goToGroceryList'/>
		</div>

</div>

</template>

<script>
import RecipeCard from 'components/RecipeCard.vue'
export default {
  name: 'ThaliSpin',
	data() {
		return {
			showRecipe: false,
			noMoreRecipesLeft: false, 
			thaliRecipe: {}
		}
	},
	
	methods: {
		generateRecipe() {
		  const location = this.$store.state.user.location

			const eatsMeat = this.$store.state.user.eatsMeat
			
			let thaliOptions = this.$store.state.recipes.recipesDb.find((db) =>
			db.location === location && db.hasMeat === eatsMeat).recipes
	
	    // filter already thalis which are already shown to user
		  thaliOptions = thaliOptions.filter((thali) => 
			!this.$store.state.user.plannedThalis.includes(thali.name)
			&& !this.$store.state.user.rejectedThalis.includes(thali.name))

      if (thaliOptions.length > 0) {
			// pick a random thali
			this.thaliRecipe = thaliOptions[Math.floor(Math.random()*thaliOptions.length)]

			this.showRecipe = true 

			} else {
				this.noMoreRecipesLeft = true
			}
		},
		goToThaliPlan() {
			if (this.$store.state.user.plannedThalis.length) {
				this.$router.push({name: 'ThaliPlan'})
			} else {
				alert("you have not created any Thalis yet")
			}

		},
		goToGroceryList() {
			if (this.$store.state.user.plannedThalis.length) {
				this.$router.push({name: 'GroceryList'})
			} else {
				alert("you have not created any Thalis yet")
			}
		}
	},
	components: {
		RecipeCard
	}
}
</script>
