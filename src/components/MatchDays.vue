<template>
	<div class="matchcard__container">
		<!-- <div class="matchcard__image">
			<img :src="image.image" alt="" />
		</div> -->
		<!-- -------------------------------------- -->

		<article
			v-for="matchDay in SEASONMATCHES.matches.slice(0, 4)"
			:key="matchDay.id"
			class="matchcard"
		>
			<div class="matchcard__wrapper">
				<div class="matchcard__date">
					<p class="day">{{ new Date(matchDay.date).getDate() }}</p>
					<p class="month">{{ GetMonthName(matchDay.date) }}</p>
				</div>
				<div class="matchcard__box">
					<p class="matchcard__hour"></p>
					<p class="matchcard__matchday">{{ matchDay.match }}</p>
					<p class="matchcard__group-league">
						{{ matchDay.categoryLeague }}
					</p>
				</div>
			</div>
			<div class="matchcard__box">
				<p class="matchcard__league">{{ matchDay.league }}</p>
				<div class="matchcard__team">
					<div class="matchcard__box">
						<img :src="matchDay.team1.image" alt="" class="shield" />
						<span class="name">{{ matchDay.team1.name }}</span>
					</div>
					<p
						v-if="isRender(matchDay.team1.result1)"
						class="matchcard__result"
					>
						{{ matchDay.team1.result1 }}
					</p>

					<p class="matchcard__result">-</p>
					<p
						v-if="isRender(matchDay.team2.result2)"
						class="matchcard__result"
					>
						{{ matchDay.team2.result2 }}
					</p>
					<div class="matchcard__box">
						<img :src="matchDay.team2.image" alt="" class="shield" />
						<span class="name">{{ matchDay.team2.name }}</span>
					</div>
				</div>
			</div>
			<div class="matchcard__bx">
				<p>FINALIZADO</p>
			</div>
		</article>
	</div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import SEASONMATCHES from "@/assets/data/matches.json";

const GetMonthName = date => {
	let months = [
		"ENE",
		"FEB",
		"MAR",
		"ABR",
		"MAY",
		"JUN",
		"JUL",
		"AGO",
		"SEP",
		"OCT",
		"NOV",
		"DIC",
	];
	let monthFormatted = new Date(date).getMonth();
	let month = months.filter((month, index) => index == monthFormatted);
	return month.toString();
};
const isRender = str => {
	return str.length > 0 ? true : false;
};

const ball = ref({
	ball1: "/images/nike-balon.png",
	ball2: "/images/nike-balon1.png",
});

const image = ref({
	image: "/images/gol-luisito-png.png",
	alternative_text: "Luis Quintero",
	fx: "animate__animated animate__zoomIn",
});

onMounted(() => {
	console.log(SEASONMATCHES.matches[0].team1.image);
});
</script>

<style scoped>
.matchcard__bx{
	display: flex;
	justify-content: center;
	background-color: yellow;
	color: black;
	font-weight: 700;
	border-bottom-left-radius: 2rem;
}

.matchcard__container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	gap: 1rem;
	width: 90%;
	margin: 1rem auto; /**/
	max-width: 1920px;
	height: 1100px;
}

.matchcard__image img {
	/* width: 650px; */
	width: 320px;
}
.matchcard {
	background-color: rgb(157, 157, 157, 0.2);
	/* padding: 1rem; */
	width: 300px;
	border-bottom: 2px solid yellow;
	border-top-right-radius: 1.5rem;
	border-bottom-left-radius: 1.5rem;
	max-height: 250px;
}

.matchcard__date {
	/* flex */
	display: inline-flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	/* font style */
	color: black;
	/* styles */
	background: yellow;
	height: 50px;
	padding: 2.3rem;
	width: 50px;
	border-bottom-right-radius: 1.5rem;
}

.matchcard .matchcard__wrapper {
	display: flex;
}

.matchcard__date .day,
.matchcard__date .month {
	font-weight: 900;
	font-size: 21px;
}
.matchcard__wrapper > .matchcard__box {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
}

.matchcard .matchcard__box {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0.5rem;
}

.matchcard__matchday {
	font-weight: 700;
	font-size: 1.5rem;
	margin: 0.25rem;
}

.matchcard__team {
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
}
.matchcard__team .matchcard__box {
	display: flex;
}

.matchcard__team .name {
	text-align: center;
}

.matchcard__result {
	font-size: 2rem;
	font-weight: 600;
}
.shield {
	/* height: 45px; */
	width: 35px;
	margin: 1rem auto;
}

@media only screen and (min-width: 1024px) {
	.matchcard__container {
		height: 350px;
	}
}
/*
@media only screen and (min-width: 1024px) {
	.matchcard {
		height: 500px;
		max-height: 550px;
	}
	.matchcard__image img {
		width: 550px;
	}

	.matchcard__team {
		flex-direction: column;
	}

	.shield {
	/* height: 45px; 
	width: 60px;
	margin: 1rem auto;
}
}*/
</style>
