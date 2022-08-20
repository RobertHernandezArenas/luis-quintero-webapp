<template>
	<div class="banner">
		<div class="banner__container">
			<div class="banner__box">
				<h3 class="banner__title">BIENVENIDOS A LA</h3>
				<h2>WEB DE LUIS QUINTERO</h2>
			</div>
			<img :src="ball.ball1" alt="" />
			<img :src="ball.ball2" alt="">
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const ball = ref({
	ball1: "/images/nike-balon.png",
	ball2: "/images/nike-balon1.png",
});

const image = ref({
	image: "/images/gol-luisito-png.png",
	alternative_text: "Luis Quintero",
	fx: "animate__animated animate__zoomIn",
});
</script>

<style scoped>
.banner {
	/* FLEX */
	display: flex;
	/* */
	background: url("/images/gol-luisito-png1.png") no-repeat -95px;
	background-size: 380px;
	height: 450px;
	margin: 2rem 0;
	width: 100vw;
}

.banner .banner__container {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 4rem;
	background-image: url("/images/nike-balon1.png"),
		url("/images/nike-balon.png"), url("/images/nike-balon.png");
	background-position: right 350px, 10px center, 180px 140px;
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: 100px, 20px, 60px;
	width: 100%;
}

.banner .banner__container img {
	top: 0;
	max-height: 55px;
}

.banner .banner__container .banner__box h3 {
	background-color: yellow;
	max-width: 190px;
	color: rgb(0, 147, 139);
	padding: 0.25rem 0.5rem;
}

.banner .banner__container h2 {
	background-color: rgb(0, 147, 139);
	font-size: 1.3rem;
	padding: 0.25rem 0.5rem;
}
</style>
