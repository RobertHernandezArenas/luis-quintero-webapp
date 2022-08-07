<template>
	<div id="go-up" class="mostrar">
		<i @click="toGoUp" class="button-up fa fa-angle-up fa-4x"></i>
	</div>
</template>

<script setup>
import { onMounted } from "vue";
let distanceToTop = () =>
		document.documentElement.scrollTop || document.body.scrollTop;
	const toGoUp = () => {
		if (distanceToTop() > 0 || distanceToTop() != 0) {
			scrollTo(0, 0);
		}
	};
onMounted(() => {
	
});
</script>

<style scoped>
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
