import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import Login from '../pages/login.vue';
import Empresas from "../pages/Empresas.vue";
import Ventas from "../pages/Ventas.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/empresas',
      name: 'empresas',
      component: Empresas
    },    
    {
      path: '/home',
      name: 'home',
      component: Home
    },        
    {
      path: '/ventas',
      name: 'ventas',
      component: Ventas
    },            
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
