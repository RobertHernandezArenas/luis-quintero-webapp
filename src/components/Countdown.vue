<template>
	<div class="countdown__container">
		<div class="countdown__match">
			<h3 class="countdown__next-match">PRÓXIMO <span>PARTIDO</span></h3>
		</div>
		<div class="countdown">
			<div v-if="days" class="countdown__block">
				<div class="countdown__digit">{{ days | twoDigits }}</div>
				<div class="countdown__text">Días</div>
			</div>
			<div class="countdown__block">
				<div class="countdown__digit">{{ hours | twoDigits }}</div>
				<div class="countdown__text">Hrs</div>
			</div>
			<div class="countdown__block">
				<div class="countdown__digit">{{ minutes | twoDigits }}</div>
				<div class="countdown__text">Min</div>
			</div>
			<div class="countdown__block">
				<div class="countdown__digit">{{ seconds | twoDigits }}</div>
				<div class="countdown__text">Seg</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		date: null,
	},
	data() {
		return {
			now: Math.trunc(new Date().getTime() / 1000),
			event: this.date,
			finish: false,
		};
	},
	mounted() {
		const _self = this;
		window.setInterval(() => {
			this.now = Math.trunc(new Date().getTime() / 1000);
			if (!this.finish && this.calculatedDate - this.now <= 0) {
				_self.finish = true;
				_self.$emit("onFinish");
			}
		}, 1000);
	},
	computed: {
		secondCount() {
			return this.calculatedDate - this.now;
		},
		calculatedDate() {
			return Math.trunc(Date.parse(this.event) / 1000);
		},
		seconds() {
			if (this.secondCount < 0) return 0;
			return this.secondCount % 60;
		},
		minutes() {
			if (this.secondCount < 0) return 0;
			return Math.trunc(this.secondCount / 60) % 60;
		},
		hours() {
			if (this.secondCount < 0) return 0;
			return Math.trunc(this.secondCount / 60 / 60) % 24;
		},
		days() {
			if (this.secondCount < 0) return 0;
			return Math.trunc(this.secondCount / 60 / 60 / 24);
		},
	},
	filters: {
		twoDigits(value) {
			if (value.toString().length <= 1) {
				return "0" + value.toString();
			}
			return value.toString();
		},
	},
};
</script>
<style scoped>
.countdown__container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin: 1rem 0;
}

.countdown__match {
	display: flex;
	justify-content: center;
	align-items: center;
}

.countdown__match h3.countdown__next-match {
	font-size: 1.5rem;
	margin-right: 1rem;
	color: yellow;
	font-style: italic;
	font-weight: 700;
}

.countdown__match h3.countdown__next-match span {
	color: white;
}

.countdown .countdown__block .countdown__digit {
	color: yellow;
}

.countdown {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: .5rem 0;
}
.countdown__block {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0px 15px;
	position: relative;
}
.countdown__block:first-child {
	padding-left: 0;
}
.countdown__block:first-child .countdown__digit:before {
	display: none;
}
.countdown__block:last-child {
	padding-right: 0;
}
.countdown__text {
	text-transform: uppercase;
	margin-bottom: 5px;
}
.countdown__digit {
	font-size: 2.3rem;
	font-weight: bold;
	line-height: 1;
	margin-bottom: 5px;
}
.countdown__digit:before {
	content: ":";
	position: absolute;
	left: -5px;
}
</style>
