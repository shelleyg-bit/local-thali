<template>
<q-layout>
	<q-page-container>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="assets/thali.jpg"
      style="width: 400px; height: 400px"
      @click="generateRecipe"
    >
    <q-dialog v-model='showRecipe'>
	    <RecipeCard :thaliName="thaliName" />
    </q-dialog>


  </q-page>

	</q-page-container>
</q-layout>
</template>

<script>
import RecipeCard from 'components/RecipeCard.vue'
export default {
  name: 'ThaliSpin',
	data() {
		return {
			showRecipe: false,
			thaliName: ''
		}
	},
	
	methods: {
		generateRecipe() {
			this.thaliName='aaloo dum banarsi'
			this.showRecipe = true 
		}
	},
	components: {
		RecipeCard
	}
}
</script>
