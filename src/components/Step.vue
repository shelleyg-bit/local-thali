<template>
	<q-item >
        <q-item-section>
          {{ count }}. {{ step }}
          
        </q-item-section>
      </q-item>
</template>
<script>
export default {
	name: 'Step',
	props: {
		step: {
			type: String,
			required: true
		},
		count: {
			type: Number,
			required: true
		}   
	}
}
</script>