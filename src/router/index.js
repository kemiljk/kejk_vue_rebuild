import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/uses',
    beforeEnter() {location.href = 'https://www.kejk.co/uses'},
    name: 'Uses',
    component: () => import('../views/Uses.vue')
  },
  {
    path: '/login',
    beforeEnter() {location.href = 'https://www.kejk.co/login'},
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/portfolio',
    beforeEnter() {location.href = 'https://www.kejk.co/portfolio'},
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
