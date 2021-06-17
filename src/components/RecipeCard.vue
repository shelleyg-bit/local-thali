<template>
    <q-card class="recipe-card">
      <q-card-section>
        <div class="text-h6">{{ thaliRecipe.name }} </div>
      </q-card-section>

      <q-tabs v-model="tab" class="text-teal">
        <q-tab label="Tab one" name="ingredients" />
        <q-tab label="Tab two" name="steps" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="ingredients">
          The QCard component is a great way to display important pieces of grouped content.
        </q-tab-panel>

        <q-tab-panel name="steps">
          With so much content to display at once, and often so little screen real-estate,
          Cards have fast become the design pattern of choice for many companies, including
          the likes of Google and Twitter.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
</template>
<script>
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
	 created() {
			this.$store.commit('addThali', this.thaliRecipe.name)
	 }
 }
</script>
<style lang="scss" scoped>
.recipe-card {
	width: 100%;
}
</style>
