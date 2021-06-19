<template>
	<q-item >
		<q-checkbox  v-if='$route.name === "ThaliPlan"' v-model="done" @input="updateProgress">

		</q-checkbox>
        <q-item-section class="text-left text-body1">
          {{ step }}
          
        </q-item-section>
      </q-item>
</template>
<script>
export default {
	name: 'Step',
	data() {
		return {
			done: false
		}
	},
	props: {
		step: {
			type: String,
			required: true
		},
		count: {
			type: Number,
			required: true
		}   
	},
	methods: {
		updateProgress() {
			console.log("updating progress")
			if (this.done) {
				this.$store.commit('incrementRecipeProgress')
			} else {
				this.$store.commit('decrementRecipeProgress')

			}
		}
	}
}
</script>