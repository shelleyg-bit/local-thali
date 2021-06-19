<template>
<div class="column items-center justify-center">
	<div class="text-h6 q-pa-md text-center" > Tap image to Create Thalis</div>
	<q-card flat bordered>
		<q-card-section class="text-subtitle1">
			Thali Count # <b>{{ $store.state.user.plannedThalis.length }}</b>
		</q-card-section>
	</q-card>
	<div class="row justify-center">
    <img
      alt="Quasar logo"
      src="assets/thali.jpg"
      style="width: 400px; height: 400px"
      @click="generateRecipe"
    >

	</div>
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
			<q-btn class="q-ma-md col-6" color="black" icon="shopping_bag"
			label="Hunt & Gather" @click='goToGroceryList'/>
			<q-btn class="q-ma-md col-6" color="black" icon="microwave" 
			label="What's Cooking?" @click='goToThaliPlan' no-caps/>
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
