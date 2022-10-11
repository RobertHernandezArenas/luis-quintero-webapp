import { createApp } from "vue";
import App from "./App.vue";

import axios from 'axios'
import VueAxios from 'vue-axios'

const baseURL = `http://localhost:3001`;
axios.defaults.baseURL = baseURL;



createApp(App).use(VueAxios, axios).mount("#app");
