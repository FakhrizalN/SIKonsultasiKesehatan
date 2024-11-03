import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import AskDoctors from '../views/AskDoctors.vue';
import Contact from '../views/Contact.vue';
import Home from '../views/Home.vue';

const routes = [
  { path: '/', name: 'HomePage', component: Home },
  { path: '/ask-doctors', name: 'AskDoctorsPage', component: AskDoctors },
  { path: '/about', name: 'AboutPage', component: About },
  { path: '/contact', name: 'ContactPage', component: Contact },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
