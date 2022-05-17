<template>
	<MenuBar />
	<AccordionGallery />
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import HelloWorld from './components/HelloWorld.vue'
import MenuBar from "./components/Menu/MenuBar.vue";
import AccordionGallery from "./components/AccordionGallery/AccordionGallery.vue";
</script>

<style>
@import "./assets/styles/reset.css";
@import "./assets/fonts/SFProDisplay/index.css";
@import "./assets/fonts/NiagaraSolid/index.css";

body {
	height: 100vmax;
}
#app {
	font-family: "SF Pro Display", Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	scrollbar-width: none;
	background: black;
}

h1 {
	color: black;
}
</style>
