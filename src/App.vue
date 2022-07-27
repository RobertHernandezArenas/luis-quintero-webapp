<template>
	<MenuBar />
	<AccordionGallery />
	<!-- <Banner /> -->
	<div class="progress-bar-container">
		<div class="progress-bar"></div>
	</div>
	<div id="go-up" class="mostrar">
		<i @click="toGoUp" class="button-up fa fa-angle-up fa-4x"></i>
	</div>
	<Nike />
	<Contact />
</template>

<script setup>
import { onMounted, watch } from "vue";
import MenuBar from "@/components/Menu/MenuBar.vue";
import AccordionGallery from "@/components/AccordionGallery/AccordionGallery.vue";
import Slider from "@/components/Slider/Slider.vue";
import Nike from "@/components/Nike/Nike.vue";
import Contact from "@/components/Contact/Contact.vue";
import Banner from "@/components/Banner.vue"

// VARIABLES
// ScrollTop devuelve la distancia de desplazamiento referente al top
let distanceToTop = () =>
	document.documentElement.scrollTop || document.body.scrollTop;

const toGoUp = () => {
	if (distanceToTop > 0 || distanceToTop != 0) scrollTo(0, 0);
};

onMounted(() => {
	// let progressBar = document.querySelector(".progress-bar");
	// addEventListener("scroll", () => {
	// 	let alto =
	// 		document.documentElement.scrollHeight -
	// 		document.documentElement.clientHeight;
	// 	console.log(
	// 		`ScrollHeight:::> ${document.documentElement.scrollHeight} \n ClientHeight :::> ${document.documentElement.clientHeight}`,
	// 	);
	// 	let avanceScroll = (distanceToTop / alto) * 100;
	// 	progressBar.style.width = avanceScroll + "vw";
	// });
});
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
	scroll-behavior: smooth;
}

/* ::-webkit-scrollbar {
	width: 7px;
}
::-webkit-scrollbar-track {
	background: #888;
}
::-webkit-scrollbar-thumb {
	background: yellow;
} */

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

#go-up {
	position: fixed;
	z-index: 1000;
	right: 25px;
	bottom: 25px;
	background-color: yellow;
	width: 40px;
	height: 40px;
	color: white;
	text-align: center;
	border-radius: 50%;
	transition: all 0.2s;
}

#go-up:hover {
	cursor: pointer;
	transform: scale(1.1);
}

.button-up {
	font-size: 2.5rem;
	-webkit-filter: drop-shadow(5px 5px 5px #666666);
	filter: drop-shadow(5px 5px 5px #666666);
}

.progress-bar-container {
	width: 100%;
	position: fixed;
	top: 0;
	height: 7px;
	z-index: 1001;
}

.progress-bar {
	height: 100%;
	width: 0;
	background-color: yellow;
}

.ocultar {
	opacity: 0;
	visibility: hidden;
}

.mostrar {
	opacity: 1;
	visibility: visible;
}
@media only screen and (min-width: 1024px) {
	#go-up {
		width: 65px;
		height: 65px;
	}
	.button-up {
		font-size: 4rem;
	}
}
</style>
