import { onMounted } from 'vue';
<template>
	<div class="progress-bar-container">
		<div class="progress-bar"></div>
	</div>
</template>

<script setup>
import { onMounted } from "vue";
// ScrollTop devuelve la distancia de desplazamiento referente al top
let distanceToTop = () =>
	document.documentElement.scrollTop || document.body.scrollTop;

onMounted(() => {
	let progressBar = document.querySelector(".progress-bar");
	addEventListener("scroll", () => {
		let alto =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		// console.log(
		// 	`ScrollHeight:::> ${document.documentElement.scrollHeight} \n ClientHeight :::> ${document.documentElement.clientHeight}`,
		// );
		let avanceScroll = Math.ceil((distanceToTop() / alto) * 100);
		progressBar.style.width = avanceScroll + "vw";
		// console.log(
		// 	`VALOR PARA ASIGNAR A WIDTH::::> ${(progressBar.style.width =
		// 		avanceScroll.toString().concat("vw"))}`,
		// );
	});
});
</script>

<style scoped>
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
	background: #00416a; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to left,
		#ffe000,
		#f2ff00,
		#00416a
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to left,
		#ffe000,
		#f2ff00,
		#00416a
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
