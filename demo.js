//---------- AHORA Y FECHA OBJETIVO ---------- //
let dateTargets = [
	new Date("2022-08-25 13:40:00"),
	new Date("2022-08-27 21:40:00"),
	new Date("2022-08-28 13:40:00"),
	new Date("2022-08-29 13:40:00"),
];

let dateMatch = [];

let targetDate = new Date("2022-08-25 13:40:00");
let now = new Date();

const GetTimeDistanceIn = (now, dateTarget) => {
	let distance = dateTarget - now;
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

	return {
		dateNow: distance,
		days: days(),
		hours: hours(),
		minutes: minutes(),
		seconds: seconds(),
	};
};

let GetMatchCardStatus = TimeDistanceIn => {
	if (
		TimeDistanceIn.days == 0 &&
		TimeDistanceIn.hours == 0 &&
		TimeDistanceIn.minutes == 0 &&
		TimeDistanceIn.seconds == 0
	) {
		return "FINALIZADO";
	}
	if (
		TimeDistanceIn.days == 0 &&
		TimeDistanceIn.hours <= 12 &&
		(TimeDistanceIn.minutes > 0 || TimeDistanceIn.seconds > 0)
	) {
		return "HOY SE JUEGA";
	} else {
		return "PROXIMO";
	}
};

// ----------- FILTRO
dateTargets.map(date => {
	let distance = GetTimeDistanceIn(now, date);
	let status = GetMatchCardStatus(distance);
	// console.log(distance, status);
	if (status == "HOY SE JUEGA" || status == "PROXIMO") {
		dateMatch.push(date);
	}
});
console.log("FILTRADO :::>", dateMatch);

//console.log(GetMatchCardStatus(GetTimeDistanceIn(now, targetDate)));

// .shift()
