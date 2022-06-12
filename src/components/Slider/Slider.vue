<template>
<!-- <AccordionGallery  /> -->
	<!-- <div class="accordion">
		<article v-for="article in articles" :key="article.id" class="accordion__image-bg"
			:style="bgCard(article.image)">
			<div class="accordion__content">
				<h2 class="accordion__title">
					{{ article.title }}
				</h2>
				<p class="accordion__description">
					{{ article.text }}
				</p>
			</div>
		</article>
	</div> -->
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";


const articles = ref([

	{
		image: './images/lui2.jpg',
		url: "#",
		title: "Titulo Luisito H3",
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?`,
		readMore: "Seguir leyendo ➔",
	},
	{
		image: './images/lui.jpg',
		url: "#",
		title: "Titulo Luisito H3",
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?`,
		readMore: "Seguir leyendo ➔",
	}
	,{
		image: './images/lui2.jpg',
		url: "#",
		title: "Titulo Luisito H3",
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?`,
		readMore: "Seguir leyendo ➔",
	},
	{
		image: './images/lui.jpg',
		url: "#",
		title: "Titulo Luisito H3",
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?`,
		readMore: "Seguir leyendo ➔",
	}
]);

const bgCard = (str) => {
	return `background-image: url(${str})`
}
onMounted(() => {
	bgCard();
});

</script>

<style>

.accordion {
	display: flex;
	overflow-x: hidden;
	height: 80vh;
}

.accordion__image-bg {
	display: flex;
	justify-content: flex-end;
	background-size: cover;
	background-repeat: no-repeat;
}

.accordion__content {
	background: rgb(0, 0, 0);
	background: linear-gradient(0deg, rgba(0, 0, 0, 1) 30%, rgba(9, 9, 121, 0)60%, rgba(0, 0, 0, 0) 100%);
	padding: 1rem;
}

.accordion__title {
	color: white;
}

.accordion__description {
	color: white;
}
</style>
