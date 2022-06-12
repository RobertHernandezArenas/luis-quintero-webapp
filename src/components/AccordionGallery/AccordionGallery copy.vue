<template>
	<div class="accordion">
		<article v-for="article in articles" :key="article.id" class="accordion__card" :style="bgCard(article.image)">

			<div class="accordion__container">
				<a class="accordion__link" :href="article.url">
					<h3 class="accordion__title">{{ article.title }}</h3>
					<p class="accordion__description">{{ article.description }}</p>
				</a>
			</div>

		</article>
	</div>
</template>

<script setup>
import { ref, onMounted /*reactive, toRefs, reactive,*/, computed } from "vue";
const articles = ref([
	
	{
		image: "./images/lui1.jpg",
		url: "#",
		title: "Titulo Luisito H3",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?`,
		readMore: "Seguir leyendo ➔",
	},
	{
		image: "./images/lui.jpg",
		url: "#",
		title: "Titulo Luisito H3",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?`,
		readMore: "Seguir leyendo ➔",
	}
]);

const descriptionLimiter = computed(() => this.description.slice(0, 220) + this.readMore);

const bgCard = (str) => {
	return `background-image: url(${str})`
}
onMounted(() => {
	bgCard();
});

</script>

<style scoped>
.accordion {
	display: flex;
	background-repeat: no-repeat;
	gap: 8px;
	width: 100vw;
	z-index: 0;
}

.accordion__card {
	background-position: center;
	background-repeat: no-repeat;
	width: 100%;
	height: 80vh;
}

.accordion__card:first-child {}

.accordion__card:last-child {}

.accordion:hover .accordion__card {}

.accordion .accordion__card:hover {}

.accordion__container {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 100%;
	width: 100%;
	background: rgb(0, 0, 0);
	background: linear-gradient(0deg, rgba(0, 0, 0, 1) 30%, rgba(9, 9, 121, 0)60%, rgba(0, 0, 0, 0) 100%);
}

.accordion__link {
	    padding: 0 0 4.5rem 0;
}

.accordion__title,
.accordion__description {}

.accordion__title {
	
}

.accordion__description {}

@media only screen and (min-width: 1024px) {
	.accordion {
		display: flex;
		height: 80vh;
		gap: 16px;
		margin: 0 0 2rem 0;
	}

	.accordion__card {
		display: flex;
		filter: grayscale(75%);
		flex-direction: column;
		justify-content: flex-end;
		object-fit: cover;
		width: 100%;
		transition: 0.35s all ease-in-out;
	}

	.accordion__card:first-child {
		width: 200%;
		filter: grayscale(0%);
	}

	.accordion:hover .accordion__card {
		width: 100%;
	}

	.accordion .accordion__card:hover {
		width: 200%;
		filter: grayscale(0%);
		background-image: url("../assets/lu1.jpg");
		background-size: cover;
	}

	.accordion__image {
		position: fixed;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	.accordion__link {
		text-decoration: none;
	}

	.accordion__title,
	.accordion__description {
		color: #fff;
	}

	.accordion__title {
		font-size: 1.6rem;
		text-align: center;
		margin: 1rem 0;
		font-family: "Inter";
		font-weight: 600;
		font-display: swap;
	}

	.accordion__description {
		font-size: 14px;
		max-width: max-content;
		margin: 0;
		line-height: 1.5rem;
		font-family: "Poppins";
		font-weight: normal;
		text-align: left;
		padding: 0 .5rem .5rem .5rem ;
	}
}
</style>
