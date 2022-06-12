<template>
	<div class="nike">

		<video class="nike__video" playsinline autoplay loop muted>
			<source src="videos/nike-shot.mp4" type="video/mp4" />
		</video>

		<div class="nike__story-box">
			<h2 class="nike__title">JUST DO IT</h2>
			<p class="nike__content">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente ut quae architecto quam animi?
				Nesciunt odio nihil accusamus temporibus! Vel nulla ducimus vitae ea fugit rem totam voluptatem odit
				atque!
			</p>
		</div>

	</div>
</template>

<script setup>

</script>

<style scoped>
.nike {
	display: flex;
	flex-wrap: wrap;
}

.nike__video {
	margin: 0 auto;
	width: 90%;
}

.nike__story-box {
	margin: 0 auto;
	padding: 2rem 0;
}

.nike__title {
	font-size: 42px;
	text-align: center;
	font-weight: 900;
}

.nike__content {
	padding: .5rem .25rem;
	max-width: 90%;
	text-align: inherit;
    margin: 0 auto;
}

@media only screen and (min-width: 768px) {

	
}

@media only screen and (min-width: 1024px) {

	.nike {
		display: flex;
		justify-content: space-evenly;
		padding: 2rem 0;
		width: 100vw;
	}

	.nike__video {
		flex: 1;
		max-width: 450px;
		margin: 0;
	}

	.nike__story-box {
		flex: 1;
		margin: auto 0;
		max-width: 672px;
	}
}

@media only screen and (min-width: 1200px) {

	.nike__video {
		max-width: 550px;
	}
}

@media only screen and (min-width: 1344px) {

	.nike__video {
		max-width: 750px;
		
	}
	.nike__story-box{
		padding: 0;
		flex: 2;
	}
}
</style>