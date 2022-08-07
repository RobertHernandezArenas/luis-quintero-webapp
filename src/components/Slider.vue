<template>
	<swiper
		:slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: false,
    }"
    :navigation="true"
    :modules="modules"
    class="my"
	>
		<swiper-slide v-for="slide in slides" :key="slide.id" class="slide">
			<!-- <img :src="slide.image" alt="" /> -->
			<h2 class="slide__title">
				{{ slide.title }}
			</h2>
		</swiper-slide>
	</swiper>
</template>

<script>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

// const slideImages = ref([
// 	{ image: "/images/slider/silde10.jpg", title: "H2 Title", description: "" },
// 	{ image: "/images/slider/silde20.jpg", title: "H2 Title", description: "" },
// 	{ image: "/images/slider/silde30.jpg", title: "H2 Title", description: "" },
// 	{ image: "/images/slider/silde40.jpg", title: "H2 Title", description: "" },
// ]);

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return {
			modules: [Pagination, Navigation],
			slides: [
				{
					image: "/images/slider/silde10.jpg",
					title: "H2 Title",
					description: "",
				},
				{
					image: "/images/slider/silde20.jpg",
					title: "H1 Title",
					description: "sgergrettberterbterbterbb5",
				},
				{
					image: "/images/slider/silde30.jpg",
					title: "H4 Title",
					description: "",
				},
				{
					image: "/images/slider/silde40.jpg",
					title: "H3 Title",
					description: "",
				},
			],
		};
	},
};
</script>

<style scoped>
.my {
	width: 100%;
	height: auto;
}
.slide {
	background-color: aliceblue;
}
</style>
