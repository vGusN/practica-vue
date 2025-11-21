// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: HomeView
    },
    */
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../components/Contador.vue') // lazy load
    },
    {
      path: '/lista-de-tareas',
      name: 'lista-de-tareas',
      component: () => import('../components/ListaDeTareas.vue') // lazy load
    }
  ]
})


export default router
