<template>
<q-layout view="hhh lpr fff">
	<q-page-container>
		<q-page class="column flex flex-center">
			
 <div>
	 <q-carousel
	 swipeable
	 animated
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
			arrows
			control-type="push"
      control-color="black"
			class="q-ma-none"
    >
      <q-carousel-slide :name="1" class="column no-wrap flex-center">
        <div class="q-pa-xl text-center text-h4">
          A Thali is a <u>complete</u> Meal
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap flex-center">
        <div class="q-pa-xl text-center text-h4">
          Curated by <u>Farmers</u> & Chefs
        </div>
				<div class="q-pa-md text-center text-h6">From your City of</div>
				<q-select outlined color="black" v-model="userLocation" :options="locations">
					<template v-slot:prepend>
          <q-icon name="place" />
        </template>
				</q-select>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap flex-center">
        <div class="q-pa-xl text-center text-h4">
          Home Cooked by <u>You</u>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap flex-center">
        <div class="q-pa-xl text-center text-h4">
          Using Locally grown <u>Nature's Bounty</u>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="5" class="column no-wrap flex-center">
        <div class="q-pa-xl text-center text-h4">
					gathered by you in your <u>neighborhood</u> market
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="6" class="column no-wrap flex-center">
        <div class="q-pa-xl text-center text-h4">
					while respecting your choice to
					<q-chip :selected.sync="eatMeat" color="red-5" text-color="white" size="30px">
						Eat
					</q-chip>
					Or
					<q-chip :selected.sync="notEatMeat" color="pink-7" text-color="white" size="30px">
						Not Eat
					</q-chip>	
					Meat
					 
        </div>
      </q-carousel-slide>

    </q-carousel>
  </div>
<div v-if="slide === 6" class="q-pt-md">
		<q-btn color="black" label="Start Creating" @click="goToThali" size="30px"/>
	
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
			eatMeat: false,
			notEatMeat: true,
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
	this.$store.commit('updateMeatChoice', this.notEatMeat ? false : this.eatMeat )
}
}
</script>