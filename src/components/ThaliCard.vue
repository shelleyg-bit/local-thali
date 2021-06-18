<template>
	<div class="q-pa-md row items-start q-gutter-md">
		<!-- TODO: add card click show Recipe card -->
    <q-card class="my-card">
      <q-card-section>
        {{ thaliName }}
      </q-card-section>
    </q-card>
	</div>
</template>
<script>
export default {
	name: 'ThaliCard',
	props: {
		thaliName: {
			type: String,
			required: true
		}
	}
}
</script>
