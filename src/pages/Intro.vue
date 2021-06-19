<template>
<q-layout view="hhh lpr fff">
	<q-page-container>
		<q-page class="q-mt-lg">
			
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
        <div class="q-ma-xl text-center">
          A Thali is a complete Meal
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap flex-center">
        <div class="q-ma-xl text-center">
          Curated by Chefs & Farmers from your city of 
        </div>
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
  data () {
    return {
      slide: 1,
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?'
    }
  },
methods: {
	goToThali() {
		this.$router.push({name: 'ThaliSpin'})
	}
}
}
</script>