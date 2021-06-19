<template>
<div>
	<div class="q-pa-md row items-start q-gutter-md">
		<!-- TODO: add card click show Recipe card -->
    <q-card class="my-card" @click="showRecipeCard">
      <q-card-section>
        {{ thaliName }}
      </q-card-section>
    </q-card>

	</div>
    <q-dialog v-model='showRecipe'>
	    <RecipeCard :thaliRecipe="thaliRecipe" :startCooking="true"/>
    </q-dialog>

</div>
</template>
<script>
import RecipeCard from 'components/RecipeCard.vue'
export default {
	name: 'ThaliCard',
	data() {
		return {
		showRecipe: false,
		thaliRecipe: {}

		}
	},
	props: {
		thaliName: {
			type: String,
			required: true
		}
	},
	components: {
		RecipeCard
	},
	methods: {
		showRecipeCard() {
			this.showRecipe = true
		  const location = this.$store.state.user.location

			const eatsMeat = this.$store.state.user.eatsMeat
			
			let thaliOptions = this.$store.state.recipes.recipesDb.find((db) =>
			db.location === location && db.hasMeat === eatsMeat).recipes
			this.thaliRecipe = thaliOptions.find(thali => thali.name === this.thaliName) 
		}
	}
}
</script>
