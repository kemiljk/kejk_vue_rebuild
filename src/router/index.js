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
    name: 'Posts',
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
    path: '/posts/ten-principles-wallpaper',
    name: 'Ten Principles Wallpaper',
    component: () => import('../views/posts/ten-principles-wallpaper.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/lazy-pdf',
    name: 'Lazy PDF',
    component: () => import('../views/LazyPDF.vue')
  },
  {
    path: '/portfolio/neuerenergy',
    name: 'NeuerEnergy',
    component: () => import('../views/portfolio/NeuerEnergy.vue')
  },
  {
    path: '/portfolio/duchenne-and-me',
    name: 'Duchenne and Me',
    component: () => import('../views/portfolio/DandMe.vue')
  },
  {
    path: '/portfolio/make-me-a-cocktail',
    name: 'Make Me A Cocktail',
    component: () => import('../views/portfolio/MakeMeACocktail.vue')
  },
  {
    path: '/portfolio/santen-dyed',
    name: 'Dyed',
    component: () => import('../views/portfolio/Dyed.vue')
  },
  {
    path: '/portfolio/enel-battery-storage',
    name: 'Enel',
    component: () => import('../views/portfolio/Enel.vue')
  },
  {
    path: '/portfolio/project-nimbus',
    name: 'Nimbus',
    component: () => import('../views/portfolio/Nimbus.vue')
  },
  {
    path: '/portfolio/kejk-update',
    name: 'KEJK',
    component: () => import('../views/portfolio/KEJK.vue')
  },
  {
    path: '/portfolio/truelayer-challenge',
    name: 'TrueLayer',
    component: () => import('../views/portfolio/challenges/TrueLayer.vue')
  },
  {
    path: '/portfolio/cmc-challenge',
    name: 'CMC',
    component: () => import('../views/portfolio/challenges/CMC.vue')
  },
  {
    path: '/portfolio/stint-challenge',
    name: 'Stint',
    component: () => import('../views/portfolio/challenges/Stint.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
