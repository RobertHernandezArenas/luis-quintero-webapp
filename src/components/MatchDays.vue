<template>
	<div class="matchcard__container">
		<!-- <h2 class="matchcard__title">CALENDARIO</h2> -->
		<article
			v-for="matchData in matches.slice(0, 3)"
			:key="matchData.id"
			class="matchcard"
		>
			<!-- DATE CARD -->
			<div class="matchcard__wrapper">
				<div class="matchcard__date">
					<p class="matchcard__day">{{ GetDayMatch(matchData.date) }}</p>
					<p class="matchcard__month">
						{{ GetMonthName(matchData.date) }}
					</p>
				</div>
				<div class="matchcard__matchday">
					<p>{{ matchData.match }}</p>
				</div>
			</div>

			<!-- LEAGUE AND GROUP -->
			<div class="matchcard__wrapper matchcard__wrapper--col">
				<p class="matchcard__category-league">
					{{ matchData.categoryLeague }}
				</p>
				<p class="matchcard__league">{{ matchData.league }}</p>
			</div>

			<!-- SHIELDS IMAGES -->
			<div class="matchcard__wrapper matchcard__wrapper--spe">
				<img
					:src="matchData.team1.image"
					:alt="`Escudo ${matchData.team1.name}`"
					class="matchcard__team-shield"
				/>
				<p
					class="matchcard__score"
					v-if="isRender(matchData.team1.result1)"
				>
					{{ matchData.team1.result1 }}
				</p>
				-
				<p
					class="matchcard__score"
					v-if="isRender(matchData.team2.result2)"
				>
					{{ matchData.team2.result2 }}
				</p>
				<img
					:src="matchData.team2.image"
					:alt="`Escudo ${matchData.team2.name}`"
					class="matchcard__team-shield"
				/>
			</div>

			<!-- TEAM NAMES -->
			<div class="matchcard__wrapper matchcard__wrapper--spe">
				<p class="matchcard__team-name">{{ matchData.team1.name }}</p>
				<p class="matchcard__team-name">{{ matchData.team2.name }}</p>
			</div>

			<!-- CARD STATUS -->
			<div class="matchcard__wrapper matchcard__wrapper--yellow">
				<p class="matchcard__status">{{ f }}</p>
			</div>
		</article>
	</div>
</template>

<script setup>
import { onMounted, ref, computed, onUpdated, reactive } from "vue";
import SEASONMATCHES from "@/assets/data/matches.json";
import { gsap } from "gsap";

const GetDayMatch = date => {
	return new Date(date).getDate();
};
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
const matches = ref([]);

let now = new Date();
let targetDate = date => {
	return new Date(date);
};

// let distance = (date, now) => {
// 	return new Date(date) - now;
// };

const isRender = str => {
	return str.length > 0 ? true : false;
};

let r = ref([]);
let f = ref("");

const GetTimeDistanceIn = (now, date) => {
	let distance = new Date(date) - now;
	let days = () => {
		let daysFormatted = Math.floor(distance / (1000 * 60 * 60 * 24));
		return daysFormatted <= 0 ? 0 : daysFormatted;
	};

	let hours = () => {
		let hoursFormatted = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
		);
		return hoursFormatted <= 0 ? 0 : hoursFormatted;
	};
	let minutes = () => {
		let minutesFormatted = Math.floor(
			(distance % (1000 * 60 * 60)) / (1000 * 60),
		);
		return minutesFormatted <= 0 ? 0 : minutesFormatted;
	};
	let seconds = () => {
		let secondsFormatted = Math.floor((distance % (1000 * 60)) / 1000);
		return secondsFormatted <= 0 ? 0 : secondsFormatted;
	};

	if (days() == 0 && hours() == 0 && minutes() == 0 && seconds() == 0) {
		matches.value.map(match => {
			if (match.date < now) {
				console.log(`ESTO ES MATCH :::> ${match}`);
				r.value.push(match);
			}
		});
		r.value.shift();
		return (f = "FINALIZADO");
	}
	if (days() == 0 && hours() <= 12 && (minutes() > 0 || seconds() > 0)) {
		return (f = "HOY SE JUEGA");
	} else {
		return (f = "PRÓXIMO PARTIDO");
	}
};

onMounted(() => {
	SEASONMATCHES.matches.map(match => matches.value.push(match));
	//console.log(matches.value);

	matches.value.forEach(matchDate => {
		GetTimeDistanceIn(now, matchDate.date);
	});
	matches.value.shift()
	matches.value.shift()
	matches.value.shift()
});
</script>

<style scoped>
.matchcard__container {
	/* background: url("/images/stadium-green12.jpg") bottom; */
	display: flex;
	/* justify-content: space-around; */
	justify-content: center;
	flex-wrap: wrap;
	gap: 4.5rem;
	margin: 2rem auto;
	height: 1420px;
	width: 320px;
	max-width: 1920px;
	/* overflow: scroll;
	scroll-snap-type: x proximity; */
}

.matchcard__title {
	display: inline;
	margin: 0 auto;
	font-size: 2rem;
}
.matchcard {
	display: inline-flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: space-around;
	background-color: rgb(157, 157, 157, 0.2);
	background: rgba(33, 33, 33, 0.65);
	border-top-right-radius: 1.5rem;
	border-bottom-left-radius: 1.5rem;
	max-height: 300px;
	width: 300px;
	gap: 1rem;
	/* scroll-snap-align: center; */
	/* transition: all 0.45s ease-in-out; */
}

.matchcard__wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
}

.matchcard__wrapper--col {
	flex-direction: column;
}

.matchcard__wrapper--spe {
	justify-content: space-evenly;
}

.matchcard__date {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: var(--secondaryColor);
	border-bottom-right-radius: 1.5rem;
	height: 50px;
	padding: 2.3rem;
	width: 50px;
}

.matchcard__day {
	font-weight: 900;
	font-size: 21px;
	color: black;
}

.matchcard__month {
	font-weight: 900;
	font-size: 21px;
	color: black;
}

.matchcard__matchday {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}

.matchcard__matchday p {
	font-weight: 700;
	font-size: 1.5rem;
}

.matchcard__wrapper .matchcard__team-shield {
	width: 45px;
}

.matchcard__score {
	font-weight: 900;
	font-size: 32px;
	font-family: Tahoma, Geneva, Verdana, sans-serif;
}

.matchcard__wrapper--spb {
	justify-content: space-between;
}

.matchcard__wrapper--yellow {
	color: black;
	background: var(--secondaryColor);
	border-bottom-left-radius: 1.5rem;
	padding: 0.5rem;
	height: 40px;
}

.matchcard__wrapper .matchcard__status {
	font-weight: 700;
}

@media only screen and (min-width: 768px) {
	.matchcard__container {
		align-items: center;
		height: 740px;
		width: 90vw;
		margin: 0 auto;
	}

	.matchcard {
		/* width: 320px; */
	}
}

@media only screen and (min-width: 1024px) {
	.matchcard__container {
		width: 95vw;
	}
	.matchcard {
		/* width: 380px; */
	}
}

@media only screen and (min-width: 1200px) {
	.matchcard__container {
		/* height: 420px; */
		height: auto;
		margin: 8rem auto;
	}
	.matchcard {
		/* width: 350px; */
	}
}
</style>
