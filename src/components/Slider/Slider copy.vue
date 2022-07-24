<template>
  <swiper :modules="modules" class="swiper" :autoHeight="true" :slides-per-view="1" :space-between="0" :loop="true"
    :loop-fill-group-with-blank="true" :pagination="{ clickable: true }" :breakpoints="{
      '640': {
        slidesPerView: 1,
        spaceBetween: 0
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 16
      }
    }">
    <swiper-slide v-for="foto in fotos" :key="foto.id" class="slide">
      <article class="card" :style="bgCard(foto.image)">
        <a :href="foto.url" class="card__link">
          <div class="card__container">
            <h2 class="card__title">{{ foto.title }}</h2>
            <p class="card__description">{{ foto.description }}</p>
          </div>
        </a>
      </article>
    </swiper-slide>
  </swiper>



</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import HelloWorld from './components/HelloWorld.vue'
import { ref, reactive, onMounted } from "vue";
 import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/vue'
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';

const modules = ref( [Mousewheel, Navigation, Pagination, Scrollbar, A11y])

const fotos = ref([
  {
    image: "./images/lui0.jpg",
    text_alternative: "",
    video: "",
    url: "/",
    title: "Titulo Luisito H2",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?`,
    readMore: "Seguir leyendo ➔",
  }, {
    image: "./images/lui5.jpg",
    text_alternative: "",
    video: "",
    url: "/",
    title: "Titulo Luisito H2",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?`,
    readMore: "Seguir leyendo ➔",
  }
]);

// Load each bg image card
const bgCard = (str) => {
	return `background-image: url(${str})`
}
onMounted(() => {
	bgCard();
});
</script>

<style>
.swiper,
.swiper-wrapper {
  background-color: black;
}

.swiper-slide {
  background-color: black;
}

.card {

  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 460px;
}

.card__link {
  text-decoration: none;
}

.card__container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  padding: 16px;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 30%, rgba(9, 9, 121, 0)60%, rgba(0, 0, 0, 0) 100%);
}

.card__title {
  color: white;
}

.card__description {
  text-align: left;
  width: 95%;
  color: white;
}

.slide__image {
  width: 100%;
  height: auto;
}
</style>
