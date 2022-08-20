<template>
	<div class="matchcard__container">
		<article
		v-for="matchDay in SEASONMATCHES.matches.slice(0, 3)"
		:key="matchDay.id"
		class="matchcard"
	>
		<div class="matchcard__date">
			<p class="day">{{ new Date(matchDay.date).getDate() }}</p>
			<p class="month">{{ GetMonthName(matchDay.date) }}</p>
		</div>
		<p class="matchcard__hour"></p>
		<p class="matchcard__matchday">{{ matchDay.match }}</p>
		<p class="matchcard__group-league">{{ matchDay.categoryLeague }}</p>
		<p class="matchcard__league">{{ matchDay.league }}</p>
		<div class="matchcard__team">
			<img :src="matchDay.team1.image" alt="" class="shield" />
			<span class="name">{{matchDay.team1.name}}</span>
		</div>
		<span class="matchcard__result">
			{{ matchDay.team1.result1 }}-{{ matchDay.team2.result2 }}
		</span>
		<div class="matchcard__team">
			<img :src="matchDay.team2.image" alt="" class="shield" />
			<span class="name">{{matchDay.team2.name}}</span>
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

onMounted(() => {
	console.log(SEASONMATCHES.matches[0].team1.image);
});
</script>

<style scoped>

.matchcard__container {
	display: flex;
	flex-wrap: wrap;
}
.matchcard {
	background: rgb(157, 157, 157, 0.25);
	border-radius: 8px;
	width: auto;
	margin: 1rem auto;
	padding: 1rem;
	max-width: 300px;
}

.matchcard:nth-of-type(2) {
	max-width: 85%;
}

.matchcard__date {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
	background: white;
	color: black;
	width: 50px;
	height: 50px;
	right: 15%;
}
.matchcard__team,
.matchcard__visitorteam {
	display: inline-block;
}

.matchcard__team{
	display: inline-flex;
	flex-direction: column;
}

.matchcard__team .name{
	text-align: center;
}

.shield {
	/* height: 45px; */
	width: 45px;
	margin: 1rem auto
	;
}
</style>
