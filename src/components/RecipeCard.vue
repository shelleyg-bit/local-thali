<template>
    <q-card class="recipe-card">
      <q-card-section>
        <div class="text-h6">{{ 
					thaliRecipe.name.toLowerCase()
					.split(' ')
    			.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
   				.join(' ') 
				}} </div>
      </q-card-section>

      <q-tabs v-model="tab" class="text-teal">
        <q-tab label="Ingredients" name="ingredients" />
        <q-tab label="How to Cook?" name="steps" />
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

			<q-card-actions class="row justify-evenly">
				<q-btn class="q-ma-xs col-6" color="secondary" 
				icon-right="local_grocery_store" 
				label="Yumm! Let's cook that" 
				@click="addThaliToPlan" 
				no-caps v-close-popup/>
				<q-btn class="q-ma-xs col-6" color="secondary" 
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
		 }
	 },
	 components: {
		 Ingredient,
		 Step
	 },
	 methods: {
		 addThaliToPlan() {
			this.$store.commit('addThali', this.thaliRecipe.name)

		 },
		 rejectThali() {
			 this.$store.commit('rejectThali', this.thaliRecipe.name)
		 }
	 }
 }
</script>
<style lang="scss" scoped>
.recipe-card {
	width: 100%;
}
</style>
