import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import Login from '../pages/login.vue';
import Empresas from "../pages/Empresas.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'empresas',
      component: Empresas
    },    
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
