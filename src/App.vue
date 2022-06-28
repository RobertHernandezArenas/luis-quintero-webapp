<template>
	<MenuBar />
	<Nike />
	<Contact />
</template>

<script setup>
import MenuBar from "./components/Menu/MenuBar.vue";
import AccordionGallery from "./components/AccordionGallery/AccordionGallery.vue";
import Slider from "./components/Slider/Slider.vue";
import Nike from "./components/Nike/Nike.vue";
import Contact from "./components/Contact/Contact.vue";
import { ref, reactive, onMounted } from "vue";

const resizeScreen = () => {
	return window.addEventListener('change', () => {
		console.log(`este es el tamaño de la pantalla ::::> ${typeof window.innerWidth} ${window.innerWidth}`)
		window.innerWidth;
		if (window.innerWidth <= 1024) {
			return true;
		}
	
	})
}
console.log(resizeScreen())

onMounted(() => {
	resizeScreen();
})

</script>

<style>
@import "./assets/styles/reset.css";
@import "./assets/fonts/SFProDisplay/index.css";
@import "./assets/fonts/NiagaraSolid/index.css";
@import "./assets/fonts/MadinahAuthentic/index.css";
@import "./assets/fonts/Futura/index.css";

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#app {
	display: flex;
	justify-content: center;
	flex-direction: column;
	font-family: "SF Pro Display", Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #ffffff;
	 background: black;	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ;
}

h1 {
	color: black;
}

</style>
