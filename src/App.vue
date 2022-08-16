<template>
	<ButtonUp />
	<MenuBar />
	<AccordionGallery />
	<Countdown :date="end" @onFinish="finish()" />
	<Banner />
	<Nike />
	<ScrollProgressBar />
	<GridMansory />
	<Contact />
	<!--<Slider />
	 -->
</template>

<script setup>
import AccordionGallery from "@/components/AccordionGallery.vue";
import Contact from "@/components/Contact.vue";
import MenuBar from "@/components/MenuBar.vue";
import Banner from "@/components/Banner.vue";
import Slider from "@/components/Slider.vue";
import GridMansory from "@/components/GridMansory.vue";
import ScrollProgressBar from "@/components/ScrollProgressBar.vue";
import ButtonUp from "@/components/ButtonUp.vue";
import Nike from "@/components/Nike/Nike.vue";
import Countdown from "@/components/Countdown.vue";
import { onMounted } from "vue";

const end = new Date("2022-09-04T16:37:00");

onMounted(() => {});
</script>

<style>
@import "./assets/styles/reset.css";
@import "./assets/fonts/SFProDisplay/index.css";
@import "./assets/fonts/NiagaraSolid/index.css";
@import "./assets/fonts/MadinahAuthentic/index.css";
@import "./assets/fonts/Futura/index.css";
@import "./assets/fonts/Montserrat/index.css";

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	scroll-behavior: smooth;
}

#app {
	display: flex;
	justify-content: center;
	flex-direction: column;
	font-family: "SF Pro Display", Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #ffffff;
	background: black;
	overflow: hidden;
}

h1 {
	color: black;
}
</style>
