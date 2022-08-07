<template>
	<div class="banner">
		<div class="banner-container animate__animated animate__zoomIn">
			<!-- <img src="/images/luisito-villarreal.png" alt="" /> -->
			<div class="banner__welcome">
				<span>Bienvenidos a la</span>
				<h2>Web de Luis Quintero</h2>
			</div>
			<img :src="image.image" :alt="image.alternative_text" />
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const image = ref({
	image: "/images/gol-luisito-png.png",
	alternative_text: "Luis Quintero",
	fx: "animate__animated animate__zoomIn",
});
</script>

<style scoped>
.banner {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100vw;
	height: auto;
	background: url("/images/fx-img.png") black;
	background-size: cover;
	background-repeat: no-repeat;
	background-size: 500px;
	background-position: left center;
	position: static;
}

.banner-container {
	position: relative;
}
.banner__welcome {
	width: 100%;
	height: 100%;
}

.banner__welcome span {
	position: absolute;
	top: 32%;
	background: #ffe000;
	padding: .5rem 2rem;
	color: #017b75;
	font-size: 2rem;
	opacity: .80;
}

.banner__welcome h2 {
	position: absolute;
	top: 40%;
	background: #017b75;
	padding: .5rem 1rem;
	font-size: 3rem;
	opacity: .80;
}

.banner-container img {
	height: 850px;
}
</style>
