<template>
	<MenuBar />
	<Nike />
</template>

<script setup>
import MenuBar from "./components/Menu/MenuBar.vue";
import AccordionGallery from "./components/AccordionGallery/AccordionGallery.vue";
import Slider from "./components/Slider/Slider.vue";
import Nike from "./components/Nike/Nike.vue";

</script>

<style>
@import "./assets/styles/reset.css";
@import "./assets/fonts/SFProDisplay/index.css";
@import "./assets/fonts/NiagaraSolid/index.css";
@import "./assets/fonts/MadinahAuthentic/index.css";

#app {
	display: flex;
	justify-content: center;
	flex-direction: column;
	font-family: "SF Pro Display", Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #ffffff;
	background: black;
}

h1 {
	color: black;
}

</style>
