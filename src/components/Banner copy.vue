<template>
	<div class="banner">
		<div class="banner-container animate__animated animate__zoomIn">
			<!-- <img src="/images/luisito-villarreal.png" alt="" /> -->
			<img  :src="image.image" :alt="image.alternative_text" />
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const image = ref({
	image: "/images/frotamanos-luisito.png",
	alternative_text: "Luis Quintero",
	fx: "animate__animated animate__zoomIn"
})

 
</script>

<style scoped>
.banner {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 450px;
	background: url('/images/fx-img.png') rgb(10, 10, 10);
	background-size: cover;
	background-repeat:  no-repeat;
	background-size: 500px;
	background-position: center center;
}

.banner-container {
}

.banner-container img:first-child {
	height:  400px;
}
</style>
