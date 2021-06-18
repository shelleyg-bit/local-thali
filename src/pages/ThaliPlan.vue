<template>
<q-page class="flex flex-center">
<div>
	<div class="text-h3 q-pa-md justify-center" > What's cooking? </div>
<div class="row justify-evenly">
<ThaliCard class="col-auto" v-for='thali in $store.state.user.plannedThalis'
:key='thali' :thaliName="thali"/>

</div>

</div>

</q-page>
	
</template>
<script>
import ThaliCard from 'components/ThaliCard.vue'
export default {
	name: 'ThaliPlan',
	components: {
		ThaliCard
	}
}
</script>

