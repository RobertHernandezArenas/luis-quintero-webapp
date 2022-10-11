<template>
	<div class="hello">
		<video :src="video" playsinline loop autoplay muted></video>
		<video
			class="prueba"
			:src="video"
			playsinline
			loop
			autoplay
			muted
		></video>
	</div>
</template>

<script setup>
import { onMounted, ref, computed, onUpdated, reactive } from "vue";
const video = ref("./videos/nike-shot.mp4");
</script>

<style scoped>
.hello {
	width: 100vw;
	margin: 2rem 0;
}

.hello video:first-of-type {
	width: 100%;
	-webkit-filter: blur(8px);
	-moz-filter: blur(8px);
	-o-filter: blur(8px);
	-ms-filter: blur(8px);
	filter: blur(8px);
}

.hello .prueba {
	position: relative;
	width: 800px;
	top: -750px;
	left: 150px;
}
</style>