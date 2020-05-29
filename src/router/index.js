import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/a',
    name: 's',
    component: Home
  },
  {
    path: '/project_input',
    name: 'xiang_mu_lu_ru',
    component: () => import(/* webpackChunkName: "about" */ '../views/project_input.vue')
  },
  {
    path: '/scenic_input',
    name: 'scenic_input',
    component: () => import(/* webpackChunkName: "about" */ '../views/scenic_input.vue')
  },  {
    path: '/merchant_input',
    name: 'merchant_input',
    component: () => import(/* webpackChunkName: "about" */ '../views/merchant_input.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
