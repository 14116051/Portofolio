
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Major from "../views/MajorPage.vue"
import Experience from "../views/ExperiencePage.vue"


export default createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component: HomePage,
      },
      {
        path: '/about',
        component: () => import('../views/AboutPage.vue'),
      },
      {
        path: '/major',
        component: Major,
      },
      {
        path: '/experience',
        component: Experience,
      },
    ],
  })