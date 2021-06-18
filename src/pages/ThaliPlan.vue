<template>
<div>
	<div class="text-h3 q-pa-md justify-center" > What's cooking? </div>
<div class="row justify-evenly">
<ThaliCard class="col-auto" v-for='thali in $store.state.user.plannedThalis'
:key='thali' :thaliName="thali"/>

</div>

</div>
	
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

