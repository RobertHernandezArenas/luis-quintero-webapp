<template>
	<div class="accordion">
		<article class="accordion__card">
			<BannerMaskVue />
		</article>
		<article
			v-for="article in articles"
			:key="article.id"
			class="accordion__card"
			:style="bgCard(article.image)"
		>
			<div class="accordion__container">
				<h3 class="accordion__title">{{ article.title }}</h3>
				<p class="accordion__description">
					{{ article.description.slice(0, 150) + " " + "..." }}
				</p>
				<span>{{ article.readMore }}</span>
			</div>
		</article>
	</div>
</template>

<script setup>
import { ref, onMounted /*reactive, toRefs, reactive,*/, computed } from "vue";
import { Navigation } from "swiper";
import BannerMaskVue from "../BannerMask/BannerMask.vue";
const articles = ref([
	{
		image: "/images/luisito.jpg",
		url: "#",
		title: "¡LISTOS PARA LA NUEVA TEMPORADA!",
		description: `Luis Quintero jugador canterano del Villarreal C.F pasó en perfectas condiciones el reconocimiento médico que le certifica como jugador en plenas facultades físicas para afrontar la temporada 22-23 en la ciudad de la ceramica.`,
		readMore: "Seguir leyendo ➔",
	},
	{
		image: "./images/lui5.jpg",
		url: "#",
		title: "NIKE RENUEVA A LUIS QUINTERO.",
		description: `La empresa multinacional nº 1 de ropa deportiva, decide renovar a Luis Quintero como su embajador y representante de su marca. `,
		readMore: "Seguir leyendo ➔",
	},
	{
		image: "./images/slide1.jpg",
		url: "#",
		title: "Titulo Luisito H3",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?`,
		readMore: "Seguir leyendo ➔",
	},
	{
		image: "./images/luis37.jpg",
		url: "#",
		title: "Titulo Luisito H3",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?`,
		readMore: "Seguir leyendo ➔",
	},
]);

const descriptionLimiter = computed(
	description => description.slice(0, 220) + readMore,
);

const bgCard = str => {
	return `background-image: url(${str})`;
};
onMounted(() => {
	bgCard();
});
</script>

<style scoped>
.accordion {
	display: flex;
	height: 70vh;
	gap: 10px;
	overflow: scroll;
	background-color: black;
	scroll-snap-type: x proximity;
}

.accordion__card {
	background-position: center;
	background-repeat: no-repeat;
	width: 100%;
	height: 100%;
	scroll-snap-align: center;
}

.accordion__card:first-child {
}

.accordion__card:last-child {
}

.accordion:hover .accordion__card {
}

.accordion .accordion__card:hover {
}

.accordion__container {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 100%;
	width: 300px;
	padding: 0rem 0.5rem 1rem 0.75rem;
	/* Aqui determinamos las dimensiones de la imagen */
	background: rgb(0, 0, 0);
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 1) 30%,
		rgba(9, 9, 121, 0) 60%,
		rgba(0, 0, 0, 0) 100%
	);
}

.accordion__link {
	padding: 0 0 4.5rem 0;
}

.accordion__title,
.accordion__description {
	display: none;
}
.accordion__title,
.accordion__description {
	display: flex;
	cursor: pointer;
}

.accordion__card span {
	cursor: pointer;
	color: rgb(255, 255, 198);
}

h3.accordion__title {
	font-weight: 700;
	margin-bottom: 0.75rem;
}

.accordion__description {
}

@media only screen and (min-width: 1024px) {
	.accordion {
		width: 90vw;
		margin: 0 auto;
		height: 80vh;
		max-height: 750px;
		overflow: hidden;
		scroll-snap-type: unset;
		gap: 16px;
		max-width: 1920px;
		margin-top: 72px ;
	}

	.accordion__card {
		display: flex;
		filter: grayscale(75%);
		transition: 0.65s all ease-in-out;
		scroll-snap-align: unset;
		max-height: 750px;
	}

	.accordion__card:first-child {
		width: 200%;
		filter: grayscale(0%);
	}

	.accordion__card:first-child > .accordion__container {
		padding-bottom: 3rem;
	}

	.accordion:hover .accordion__card {
		width: 100%;
		transition: width 0.65s ease-in-out;
	}

	.accordion .accordion__card:hover {
		width: 200%;
		filter: grayscale(0%);
	}

	.accordion .accordion__card:hover > .accordion__container {
	}
	.accordion__container {
		width: 100%;
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 1) 15%,
			rgba(9, 9, 121, 0) 60%,
			rgba(0, 0, 0, 0) 100%
		);
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
		display: flex;
		color: #fff;
	}

	.accordion__title {
		font-size: 16px;
		text-align: left;
		font-family: "Inter";
		font-weight: 600;
		font-display: swap;
	}

	.accordion__description {
		font-size: 14px;
		max-width: max-content;
		margin: 0;
		line-height: 1.2rem;
		font-family: "SF Pro Display";
		font-weight: 300;
		text-align: left;
	}
}
</style>
