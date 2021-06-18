<template>
	<q-item >
        <q-item-section>
          <q-item-label overline>{{ ingredient.name.toUpperCase() }} </q-item-label>
          <q-item-label caption>{{ ingredient.quantity }} {{ ingredient.units }} </q-item-label>
        </q-item-section>
      </q-item>
</template>
<script>
export default {
	name: 'Ingredient',
	props: {
		ingredient: {
			type: Object,
			required: true
		}   
	}
}
</script>
