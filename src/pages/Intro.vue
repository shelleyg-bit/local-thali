<template>
<q-layout view="hhh lpr fff">
	<q-page-container>
		<q-page class="flex flex-center">
			
 <div class="q-pa-md">
	 <q-carousel
	 swipeable
	 animated
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
			arrows
			control-type="push"
      control-color="black"
    >
      <q-carousel-slide :name="1" class="column no-wrap flex-center">
        <div class="q-ma-xl text-center text-h3">
          A Thali is a <u>complete</u> Meal
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap flex-center">
        <div class="q-mx-xl text-center text-h3">
          Curated by <u>Farmers</u> & Chefs
        </div>
				<div class="q-mt-md text-center text-h6">From your</div>
				<q-select outlined v-model="userLocation" :options="locations" label="City of" />
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap flex-center">
        <div class="q-ma-xl text-center">
          Home Cooked by You
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap flex-center">
        <div class="q-ma-xl text-center">
          Using Locally grown Nature's Bounty
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="5" class="column no-wrap flex-center">
        <div class="q-ma-xl text-center">
					gathered by you in your neighborhood market
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="6" class="column no-wrap flex-center">
        <div class="q-ma-xl text-center">
					while respecting your choice to eat or not eat meat
        </div>
      </q-carousel-slide>

    </q-carousel>
  </div>
<div v-if="slide === 6" class="row justify-center">
		<q-btn color="black" label="Start Creating" @click="goToThali"/>
	
</div>

		</q-page>
	</q-page-container>

</q-layout>
</template>


<script>
export default {
	name: 'Intro',
  data () {
    return {
      slide: 1,
			userLocation: 'Portland, Oregon, USA',
			locations: ['Portland, Oregon, USA', 'Jaipur, Rajasthan, India']
    }
  },
methods: {
	goToThali() {
		this.$router.push({name: 'ThaliSpin'})
	},
},
beforeDestroy() {
	this.$store.commit('updateLocation', this.userLocation)
}
}
</script>