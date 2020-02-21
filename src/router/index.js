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
    name: 'Uses',
    component: () => import('../views/Uses.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/posts',
    name: 'Currently Thinking',
    component: () => import('../views/Posts.vue')
  },
  { 
    path: '/posts/getting-to-yes',
    name: 'Getting to yes',
    component: () => import('../views/posts/sales-sales-sales.vue')
  },
  { 
    path: '/posts/frontend-designer',
    name: 'Frontend Designer',
    component: () => import('../views/posts/frontend-designer.vue')
  },
  {
    path: '/posts/human-centricity',
    name: 'Human Centricity',
    component: () => import('../views/posts/human-centricity.vue')
  },
  {
    path: '/portfolio',
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
