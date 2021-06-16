<template>
	<q-card class="my-card">
		<img src="https://cdn.quasar.dev/img/mountains.jpg">
		<q-card-section>
			<div class="text-h6">{{ thaliName.toUpperCase() }}</div>
			<div class="text-subtitle2">by John Doe</div>
		</q-card-section>
		<q-card-section>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit
		</q-card-section>
	</q-card>
</template>
<script>
 export default {
	 props: {
		 thaliName: {
			 type: String,
			 required: true
		 }
	 }
 }
</script>
