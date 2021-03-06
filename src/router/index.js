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
    path: '/posts/:slug',
    name: 'BlogView',
    props: true,
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/public-projects',
    name: 'Public Projects',
    component: () => import('../views/PublicProjects.vue')
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
    path: '/portfolio/moneybox-challenge',
    name: 'Moneybox',
    component: () => import('../views/portfolio/challenges/Moneybox.vue')
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
