<template>
	<div class="accordion" id="home">
		<!-- <article class="accordion__card">
			<BannerMaskVue />
		</article> -->
		<article
			v-for="article in articles"
			:key="article.id"
			class="accordion__card"
			:style="bgCard(article.image)"
		>
			<div class="accordion__container">
				<h3 class="accordion__title">{{ article.title.toUpperCase() }}</h3>
				<p class="accordion__description">
					{{ article.description.slice(0, 150) + " " + "..." }}
				</p>
			</div>
		</article>
	</div>
</template>

<script setup>
import { ref, onMounted /*reactive, toRefs, reactive,*/, computed } from "vue";
import BannerMaskVue from "./BannerMask.vue";

const articles = ref([
	{
		image: "/images/luis01.jpg",
		url: "#",
		title: "¡LISTOS PARA LA NUEVA TEMPORADA!",
		description: `Luis Quintero jugador canterano del Villarreal C.F pasó en perfectas condiciones el reconocimiento médico que le certifica como jugador en plenas facultades físicas para afrontar la temporada 22-23 en la ciudad de la ceramica.`,
		readMore: "Seguir leyendo ➔",
	},
	{
		image: "/images/villa1.jpg",
		url: "#",
		title: "EMBAJADOR NIKE",
		description: `La empresa multinacional nº 1 de ropa deportiva renueva a Quintero como embajador y representante de su marca`,
		readMore: "Seguir leyendo ➔",
	},
	{
		image: "/images/luis03.jpg",
		url: "#",
		title: "Bienvenidos a mi web",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?`,
		readMore: "Seguir leyendo ➔",
	},
	{
		image: "/images/nike1.jpg",
		url: "#",
		title: "Titulo Luisito H3",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					dolores voluptates rem ea eaque sunt nulla ut dolorum asperiores
					aut eius ipsa obcaecati natus, earum error consequatur eum! Vero,
					totam?`,
		readMore: "Seguir leyendo ➔",
	},
	{
		image: "/images/luis04.jpg",
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
	description => description.slice(0, 220) /*+ readMore*/,
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
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	height: 80vh;
	gap: 0.5rem;
	overflow: scroll;
	background-color: var(--mainColor);
	-ms-scroll-snap-type: x mandatory;
	    -webkit-scroll-snap-type: x mandatory;
	        scroll-snap-type: x mandatory;
	margin: 6rem 0;
}

.accordion__card {
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	width: 100%;
	/*height: 100%; */
	scroll-snap-align: center;
	/* border-bottom: 0.5rem solid yellow;
	border-image: linear-gradient(to left, #ffe000, #f2ff00, #00416a) 1; */
}

.accordion__card:first-child {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	    -ms-flex-pack: center;
	        justify-content: center;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
}

.accordion__container {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	    -ms-flex-direction: column;
	        flex-direction: column;
	-webkit-box-pack: end;
	    -ms-flex-pack: end;
	        justify-content: flex-end;
	height: 100%;
	width: 300px;
	padding: 0rem 0.5rem 1rem 0.75rem;
	/* Aqui determinamos las dimensiones de la imagen */
	/* background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 1) 15%,
		rgba(9, 9, 121, 0) 45%,
		rgba(0, 0, 0, 0) 100%
	); */
}

.accordion__link {
	padding: 0 0 4.5rem 0;
}

.accordion__title,
.accordion__description {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	cursor: pointer;
}

h3.accordion__title {
	font-weight: 700;
	margin-bottom: 0.75rem;
}

@media only screen and (min-width: 1024px) {
	.accordion {
		width: 90vw;
		margin: 6rem auto 32px auto;
		height: 800px; /** 80vh */
		max-height: 750px;
		overflow: hidden;
		-ms-scroll-snap-type: unset;
		    -webkit-scroll-snap-type: unset;
		        scroll-snap-type: unset;
		gap: 0px;
		max-width: 1920px;
	}

	.accordion__card {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-filter: grayscale(70%);
		        filter: grayscale(70%);
		-webkit-transition: all .85s ease-in-out;
		transition: all .85s ease-in-out;
		scroll-snap-align: unset;
		max-height: 750px;
	}

	.accordion__card:nth-child(3) {
		width: 200%;
		-webkit-filter: grayscale(0%);
		        filter: grayscale(0%);
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		    -ms-flex-pack: center;
		        justify-content: center;
		-webkit-box-align: center;
		    -ms-flex-align: center;
		        align-items: center;
	}

	.accordion:hover .accordion__card {
		width: 100%;
		-webkit-transition: all 0.65s ease-in-out;
		transition: all 0.65s ease-in-out;
	}

	.accordion .accordion__card:hover {
		width: 200%;
		-webkit-filter: grayscale(0%);
		        filter: grayscale(0%);
	}

	.accordion .accordion__card *.accordion__container {
		background: none;
	}

	.accordion .accordion__card:hover .accordion__container:hover {
		background: -webkit-gradient(
			linear,
			left bottom, left top,
			from(rgb(0, 0, 0)),
			color-stop(60%, rgba(9, 9, 121, 0)),
			to(rgba(0, 0, 0, 0))
		);
		background: -webkit-linear-gradient(
			bottom,
			rgb(0, 0, 0) 0%,
			rgba(9, 9, 121, 0) 60%,
			rgba(0, 0, 0, 0) 100%
		);
		background: linear-gradient(
			0deg,
			rgb(0, 0, 0) 0%,
			rgba(9, 9, 121, 0) 60%,
			rgba(0, 0, 0, 0) 100%
		);
	}
	.accordion .accordion__card:nth-child(3) .accordion__container {
		background: -webkit-gradient(
			linear,
			left bottom, left top,
			from(rgb(0, 0, 0)),
			color-stop(60%, rgba(9, 9, 121, 0)),
			to(rgba(0, 0, 0, 0))
		);
		background: -webkit-linear-gradient(
			bottom,
			rgb(0, 0, 0) 0%,
			rgba(9, 9, 121, 0) 60%,
			rgba(0, 0, 0, 0) 100%
		);
		background: linear-gradient(
			0deg,
			rgb(0, 0, 0) 0%,
			rgba(9, 9, 121, 0) 60%,
			rgba(0, 0, 0, 0) 100%
		);
	}

	.accordion
		.accordion__card:nth-child(3)
		.accordion__container
		.accordion__title,
	.accordion
		.accordion__card:nth-child(3)
		.accordion__container
		.accordion__description {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}

	/** desactivar titulo y desription todas las cards */

	.accordion
		.accordion__card:hover
		.accordion__container:hover
		.accordion__title,
	.accordion
		.accordion__card:hover
		.accordion__container:hover
		.accordion__description {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}

	.accordion .accordion__title:not(.accordion__card:hover .accordion__title),
	.accordion
		.accordion__description:not(.accordion__card:hover
			.accordion__description) {
		visibility: visible;
		opacity: 1;
		-webkit-transition: all 0.45s ease-in-out;
		transition: all 0.45s ease-in-out;
	}

	.accordion:hover
		.accordion__title:not(.accordion__card:hover .accordion__title),
	.accordion:hover
		.accordion__card
		span:not(.accordion__card:hover .accordion__card span),
	.accordion:hover
		.accordion__description:not(.accordion__card:hover
			.accordion__description) {
		visibility: hidden;
		opacity: 0;
		-webkit-transition: all 0.45s ease-in-out;
		transition: all 0.45s ease-in-out;
	}

	.accordion__container {
		width: 100%;
	}

	.accordion__image {
		position: fixed;
		-o-object-fit: cover;
		   object-fit: cover;
		width: 100%;
		height: 100%;
	}

	.accordion__link {
		text-decoration: none;
	}

	.accordion__title,
	.accordion__description {
		display: none;
		color: #fff;
	}

	.accordion__title {
		font-size: 1.8rem;
		text-align: left;
		font-family: "Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		font-weight: 600;
		margin: 0 1.5rem 1.5rem 1.5rem;
	}

	.accordion__description {
		font-size: 1rem;
		max-width: -webkit-max-content;
		max-width: -moz-max-content;
		max-width: max-content;
		margin: 0 1.5rem 1.5rem 1.5rem;
		line-height: 1.5rem;
		font-family: "SF Pro Display", "Inter", "Segoe UI", Tahoma, Geneva,
			Verdana, sans-serif;
		font-weight: 300;
		text-align: left;
	}
}
</style>
