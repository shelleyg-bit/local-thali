<template>
    <q-card class="recipe-card">
      <q-card-section class="row items-center justify-left">
				  <q-circular-progress
					v-if="startCooking"
      show-value
      font-size="16px"
      class="col-2 text-black q-mt-sm"
      :value="recipeProgress"
      size="60px"
      :thickness="0.05"
      color="black"
      track-color="grey-3"
    >
      
      {{ recipeProgress }} %
    </q-circular-progress>
        <div class="col-6 q-ma-md text-left text-h5">{{ 
					thaliRecipe.name.toLowerCase()
					.split(' ')
    			.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
   				.join(' ') 
				}} </div>
      </q-card-section>

      <q-tabs v-model="tab" class="text-black">
        <q-tab label="Nature's Edibles" name="ingredients" no-caps/>
        <q-tab label="To a HomeCooked Treat" name="steps" no-caps/>
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="ingredients">
					<q-list>
						<Ingredient v-for="(ingredient) in thaliRecipe.ingredients" :ingredient="ingredient"
						:key="ingredient.name"/>
						
					</q-list>
        </q-tab-panel>

        <q-tab-panel name="steps">
					<q-list>
						<Step v-for="(step, i) in thaliRecipe.steps" :step="step" :count="i" :key="step"/>
					</q-list>
        </q-tab-panel>
      </q-tab-panels>

			<q-card-actions v-if="!startCooking" class="row justify-evenly">
				<q-btn class="q-ma-xs col-6" color="black" 
				icon-right="local_grocery_store" 
				label="Yumm! Let's cook that" 
				@click="addThaliToPlan" 
				no-caps v-close-popup/>
				<q-btn class="q-ma-xs col-6" color="grey-14" 
				icon-right="layers_clear" 
				label="Naah! Not feeling it" 
				@click="rejectThali" 
				no-caps v-close-popup/>
			</q-card-actions>

    </q-card>
</template>
<script>
import Ingredient from 'components/Ingredient.vue'
import Step from 'components/Step.vue'
 export default {
	 data() {
		 return {
			 tab: 'ingredients' 
		 }
	 },
	 props: {
		 thaliRecipe: {
			 type: Object,
			 required: true
		 },
		 startCooking: {
			 type: Boolean,
			 required: false,
			 default: false
		 }
	 },
	 components: {
		 Ingredient,
		 Step
	 },
	 computed: {
		 /**@returns { object } */
		 recipeProgress() {
			 return Math.round((this.$store.state.user.recipeProgress / this.thaliRecipe.steps.length) * 100)
		 }
	 },
	 methods: {
		 addThaliToPlan() {
			this.$store.commit('addThali', this.thaliRecipe.name)
			this.$store.commit('addItemsToGrocery', this.thaliRecipe.ingredients)

		 },
		 rejectThali() {
			 this.$store.commit('rejectThali', this.thaliRecipe.name)
		 }
	 },
	 created() {
		 this.$store.commit('resetRecipeProgress')
	 }
 }
</script>
<style lang="scss" scoped>
.recipe-card {
	width: 100%;
}
</style>
