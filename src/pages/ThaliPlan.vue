<template>
<div>
	<div class="text-h2 q-pa-md text-center" > What's cooking? </div>
<div class="row justify-center">
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

