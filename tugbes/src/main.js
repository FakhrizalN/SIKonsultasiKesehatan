import { createApp } from 'vue';
import App from './App.vue';
import './main.css';
import router from './router';
import theme from './theme';

const app = createApp(App);
app.provide('theme', theme);

createApp(App).use(router).mount('#app');
