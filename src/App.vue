<template>
	<ButtonUp />
	<!-- <Countdown :date="end" @onFinish="finish()" /> -->
	<MenuBar />
	<ScrollProgressBar />
	<AccordionGallery />
	<!-- <Hello /> -->
	<MatchDays />
	<Nike />
	<!-- <GridMansory /> -->
	<Contact />
</template>

<script setup>
import AccordionGallery from "@/components/AccordionGallery.vue";
import Contact from "@/components/Contact.vue";
import MenuBar from "@/components/MenuBar.vue";
import MatchDays from "@/components/MatchDays.vue";
import Slider from "@/components/Slider.vue";
import GridMansory from "@/components/GridMansory.vue";
import ScrollProgressBar from "@/components/ScrollProgressBar.vue";
import ButtonUp from "@/components/ButtonUp.vue";
import Nike from "@/components/Nike/Nike.vue";
import Countdown from "@/components/Countdown.vue";
import Hello from "@/components/Hello.vue";
import { onMounted } from "vue";

const end = new Date("2022-09-17T17:00:00");

onMounted(() => {});
</script>

<style>
@import "./assets/styles/reset.css";
@import "./assets/fonts/SFProDisplay/index.css";
@import "./assets/fonts/NiagaraSolid/index.css";
@import "./assets/fonts/MadinahAuthentic/index.css";
@import "./assets/fonts/Futura/index.css";
@import "./assets/fonts/Montserrat/index.css";

:root {
	/* --mainColor: linear-gradient(45deg, #080808 50%, #1d1d1d 100%); */
	--mainColor: black;
	--secondaryColor : #E0AE00;
}

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
	font-family: "Montserrat", "Segoe UI", Arial, Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #ffffff;
	background: var(--mainColor);
	overflow: hidden;
}

h1 {
	color: black;
}
</style>