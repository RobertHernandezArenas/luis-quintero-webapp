<template>
	<div class="container">
  <div class="panel active" style="background-image:url('./images/lui.jpg');">
    <h3>CSS Script</h3>
  </div>
  <div class="panel" style="background-image:url('./images/lui2.jpg');">
    <h3>CSS Script</h3>
  </div>
  <div class="panel" style="background-image:url('./images/lui1.jpg');">
    <h3>CSS Script</h3>
  </div>
  <div class="panel" style="background-image:url('./images/lui2.jpg');">
    <h3>CSS Script</h3>
  </div>
  <div class="panel" style="background-image:url('./images/lui5.jpg');">
    <h3>CSS Script</h3>
  </div>
 
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
const panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

const bgCard = (str) => {
	return `background-image: url(${str})`
}
onMounted(() => {
	bgCard();
	const panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
});

</script>

<style scoped>
.container
{
  display: flex;
  width: 100vw;
}
.panel
{
  position: relative;
  background-size: cover 50%;
  background-position: center;
  background-repeat: no-repeat;
  height: 85vh;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  flex: .5;
  margin: 10px;
  transition: all .5s ease-in;
}
.panel h3
{
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
  
}
.panel.active
{
  flex: 1;
  width: 100%;
}
.panel.active h3
{
  opacity: 1;
  transition: opacity .3s ease-in .4s;
}
@media(max-width:480px)
{
  .container
  {
      width: 100vw;
  }
  .panel:nth-last-of-type(6),
  .panel:nth-last-of-type(7)
  {
      display: none;
  }
}
</style>
