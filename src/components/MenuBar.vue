<template>
	<nav class="menu">
		<div class="menu__margin">
			<!-- LOGO -->
			<div class="menu-container-logo">
				<img
					
					class="menu-container-logo__image"
					:src="logo.image"
					:alt="logo.alternative_text"
				/>

				<div class="menu-container-logo__namesite">
					<a class="menu-container-logo__link" :href="logo.link">
						<h1 v-if="hasTitle()" class="menu-container-logo__title">
							{{ logo.name }}
						</h1>
					</a>
					<span v-if="hasSlogan()" class="menu-container-logo__slogan">{{
						logo.slogan
					}}</span>
				</div>
			</div>

			<!-- BURGER BUTTON -->
			<div class="menu__burger" @click.prevent="menuFX">
				<div class="menu__strip menu__burger--strip">
					<div class="menu__bar"></div>
					<div class="menu__bar"></div>
					<div class="menu__bar"></div>
				</div>
			</div>

			<!-- LINKS -->
			<ul @click="menuFX" class="menu__list">
				<li
					v-for="linky in navigation"
					:key="linky.id"
					class="menu__list--item progress-bar-fx"
				>
					<a :href="linky.href" class="menu__list--link">{{
						linky.name
					}}</a>
				</li>

				<!-- SOCIAL ICON LINKS -->
				<div class="menu__list-social--container">
					<span class="menu__list-social--title">follow me</span>
					<ul class="menu__list-social">
						<li
							v-for="social in socialLogos"
							:key="social.id"
							class="menu__list-social--item"
						>
							<a href="#" class="menu__list-social--link">
								<img
									class="menu__list-social--icon"
									:src="social.logo"
									:alt="social.name"
							/></a>
						</li>
					</ul>
				</div>
			</ul>
		</div>
	</nav>
</template>

<script setup>
import { ref /*reactive, toRefs, reactive, computed*/ } from "vue";
/** ****************************************************************************************** */
// REACTVE para declarar propiedades dentro de reactive tengo que abrir siempre un objeto y tener en cuenta
// que va aa ser reactivo a todos sus niveles , es decir que va a mutar y se modificara el mismo objeto ,
// para solucionar esto se debe hacer una copia del objeto y para hacer destructuring es recomendable usar [TOREFS(obj)]
// esto no pasa con [REF]
// Para acceder a los valores de [REF] tengo que usar su propiedad value [REF].value
const logo = ref({
	link: "/",
	image: "/images/logo-lq1.png",
	name: "",
	alternative_text: "Logo Luis Quintero",
	slogan: "",
});
const socialLogos = ref([
	{
		name: "facebook",
		logo: "/images/social-icons/facebook.svg",
		link: "#",
	},
	{
		name: "instagram",
		logo: "/images/social-icons/instagram.svg",
		link: "#",
	},
	{
		name: "youtube",
		logo: "/images/social-icons/youtube.svg",
		link: "#",
	},
]);
const navigation = ref([
	{ name: "#LQ10", href: "#home" },
	{ name: "ABOUT ME", href: "#aboutMe" },
	{ name: "HIGHTLIGHTS", href: "#hightlights" },
	{ name: "GALLERY", href: "#gallery" },
	{ name: "CONTACT", href: "#contact" },
]);
const hasTitle = () => (logo.value.name.length > 0 ? true : false);
const hasSlogan = () => (logo.value.slogan.length > 0 ? true : false);

const menuFX = () => {
	let menuList = document.querySelector(".menu__list");
	let mobileMenuIsOpen = menuList.classList.toggle("menu__show");
	let burger = document.querySelector(".menu__burger");
	let barsBurger = document.querySelectorAll(".menu__bar");
	let bar1 = document.querySelector(".menu__bar:first-child");
	let bar2 = document.querySelector(".menu__bar:nth-child(2)");
	let bar3 = document.querySelector(".menu__bar:last-child");
	let boddy = document.querySelector("body");

	mobileMenuIsOpen
		? (boddy.style.overflow = "hidden")
		: barsBurger.forEach(bar => {
				bar.style.backgroundColor = "white";
				boddy.style.overflow = "auto";
		  });
	burger.classList.toggle("superpos");

	bar1.classList.toggle("menu__bar1");
	bar2.classList.toggle("menu__bar2");
	bar3.classList.toggle("menu__bar3");
};
/** ****************************************************************************************** */
</script>

<style scoped>
.superpos {
	z-index: 9999;
}

.menu {
	display: flex;
	justify-content: center;
	background-color: black;
	padding: 16px 0;
	max-height: 72px;
	position: fixed;
	top: 0;
	width: 100vw;
	z-index: 1001;
}
.menu__margin {
	display: flex;
	justify-content: space-between;
	width: 90%;
}
.menu-container-logo {
	display: flex;
	gap: 16px;
}
.menu-container-logo__link {
	display: block;
	text-decoration: none;
}
.menu-container-logo__image {
	cursor: pointer;
	object-fit: scale-down;
	height: 42px;
}
.menu-container-logo__link {
}
.menu-container-logo__namesite {
	display: flex;
	justify-content: center;
	align-items: center;
}
.menu-container-logo__title {
	color: white;
	font-weight: 300;
	font-size: 16px;
	text-align: start;
	font-family: "Madinah Authentic", "SF Pro Display", "Segoe UI",
		"Helvetica Neue", Arial;
	letter-spacing: 2px;
}
.menu-container-logo__slogan {
	color: white;
	font-size: 14px;
}
/* :::::::::: BURGER BUTTON :::::::::: */
.menu__burger {
	width: 40px;
	border-radius: 2px;
	background: transparent;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.25s ease;
}
.menu__burger--strip {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 0.3s ease;
}
.menu__strip .menu__bar {
	height: 4px;
	border-radius: 8px;
	background-color: white;
	margin: 2px;
	transition: all 0.35s cubic-bezier(0.075, 0.82, 0.165, 1);
	width: 24px;
}
.menu__bar1 {
	background-color: yellow;
	transform: translateY(6px) rotate(45deg);
}
.menu__bar2 {
	opacity: 0;
}
.menu__bar3 {
	background-color: yellow;
	transform: translateY(-6px) rotate(-45deg);
}
/* :::::::::: LINKS :::::::::: */
.menu__list {
	align-items: center;
	background: url("/images/luis-desafiante.png"),
		url("/images/stadium-green2.jpeg");
	background-position: -50px, center;
	background-size: contain, cover;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	gap: 14px;
	justify-content: center;
	list-style: none;
	opacity: 0;
	position: absolute;
	left: 0;
	top: 0;
	height: 100vh;
	transform: translate(-100vw, 0);
	transition: opacity 0.25s ease-in-out;
	width: 100vw;
	z-index: 99;
	overflow: hidden;
}
.menu__list.menu__show {
	opacity: 1;
	transform: translateX(0vw);
	transition: opacity 0.25s ease-in-out;
}
.menu__list--item {
	display: inline-block;
	height: 32px;
	border: 0;
	position: relative;
}
.menu__list--link:hover {
	color: yellow;
}
.menu__list--link {
	color: white;
	text-decoration: none;
	font-weight: bold;
	font-size: 24px;
	text-transform: uppercase;
}
/* :::::::::: PROGRESS BAR HOVER :::::::::: */
.progress-bar-fx:after {
	position: absolute;
	bottom: 0;
	left: 0;
	top: 100%;
	width: 0;
	height: 4px;
	background: linear-gradient(to left, #FFE000, #f2ff00, #00416A);
	display: block;
	content: "";
	transition: width 0.35s ease-in-out;
}
.progress-bar-fx:hover:after {
	width: 100%;
}
/* :::::::::: SOCIAL LINKS ICON :::::::::: */
.menu__list-social--container {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	top: 80px;
}
.menu__list-social--title {
	color: white;
	font-size: 18px;
}
.menu__list-social {
	display: flex;
	gap: 16px;
	list-style: none;
	margin: 16px;
}
.menu__list-social--item {
	display: flex;
	justify-content: center;
	align-items: center;
}
.menu__list-social--icon {
	height: 24px;
	transform: scale(1, 1);
	transition: transform 0.25s ease-in;
}
.menu__list-social--icon[alt="youtube"] {
	height: 32px;
}
.menu__list-social--icon[alt="facebook"]:hover,
.menu__list-social--icon[alt="instagram"]:hover,
.menu__list-social--icon[alt="youtube"]:hover {
	transform: scale(1.15, 1.15);
	transition: transform 0.25s ease-in;
}
.menu__list-social--icon[alt="facebook"]:hover {
	filter: invert(49%) sepia(44%) saturate(7496%) hue-rotate(218deg)
		brightness(91%) contrast(92%);
}
.menu__list-social--icon[alt="instagram"]:hover {
}
.menu__list-social--icon[alt="youtube"]:hover {
	filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg)
		saturate(1600%) contrast(1);
}
/*//////// MEDIA QUERIES ///////*/
@media only screen and (min-width: 1024px) {
	.menu__burger {
		display: none;
	}
	.menu__list {
		/* pointer-events: none; */
		background: black;
		position: unset;
		transform: unset;
		opacity: 1;
		width: auto;
		gap: 80px;
		justify-content: flex-end;
		flex-direction: row;
		width: auto;
		height: auto;
	}
	.menu__list--item {
		position: unset;
		height: auto;
	}
	.menu__list-social--container {
		display: none;
	}
	.menu__list--link {
		color: white;
		text-decoration: none;
		font-weight: 700;
		font-size: 16px;
		text-transform: none;
	}
	.progress-bar-fx:after {
		position: unset;
	}
}
</style>
