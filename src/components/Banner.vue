<template>
	<div class="banner">
		<div class="banner-container">
			<img src="./images/luisito-villarreal.png" alt="" />
			<img src="./images/frotamanos-luisito.png" alt="" />
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped>
.banner {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 250px;
	background: rgb(37, 170, 139);
	background: linear-gradient(
		90deg,
		rgb(3, 78, 76) 48%,
		rgb(173, 152, 31) 54%,
		rgba(249, 255, 0, 1) 100%
	);
}

.banner-container {
	display: flex;
	width: 300px;
	position: relative;
	height: 100%;
}

.banner-container img:first-child {
	width: 100%;
	height: 100%;
	position: absolute;
	right: 30px;
}

.banner-container img:nth-child(2) {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 30px;
}
</style>
