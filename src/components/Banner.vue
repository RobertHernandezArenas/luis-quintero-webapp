<template>
	<div class="banner">
		<div class="banner-container">
			<!-- <img src="/images/luisito-villarreal.png" alt="" /> -->
			<div class="banner__welcome">
				<span>BIENVENIDOS A LA </span>
				<h2>WEB DE LUIS QUINTERO</h2>
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
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: auto;
	background: url("/images/stadium-green12.jpg"); /*url("/images/fx-img.png") black;*/
	background-size: cover;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	position: static;
	margin: 2rem 0;
	/* animation-name: zoom-out;
	animation-duration: 10s; */
}

@keyframes zoom-out {
	from {
		transform: matrix(2, 0, 0, 2, 0, 0);
	}
	to {
		transform: matrix(1, 0, 0, 1, 0, 0);
	}
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
	padding: 0.5rem 3rem;
	color: #017b75;
	font-size: 1.3rem;
	opacity: 0.8;
}

.banner__welcome h2 {
	position: absolute;
	top: 40%;
	background: #017b75;
	padding: 0.5rem 3rem;
	font-size: 1.3rem;
	opacity: 0.8;
}

.banner-container img {
	height: 850px;
	max-height: 450px;
}
</style>
