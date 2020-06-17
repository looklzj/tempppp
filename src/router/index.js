import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/records',
    name: 'records',
    component: () => import('../views/records.vue')
  },
  {
    path: '/notice',
    name: 'notice',
    component: () => import('../views/notice.vue')
  },
  {
    path: "/project-input",
    name: "project-input",
    component: () => import("../views/project-input.vue")
  }, ,
  {
    path: "/scenic-input",
    name: "scenic-input",
    component: () => import("../views/scenic-input.vue")
  }, ,
  {
    path: "/merchant-input",
    name: "merchant-input",
    component: () => import("../views/merchant-input.vue")
  },
  {
    path: "/notice-input",
    name: "notice-input",
    component: () => import("../views/notice-input.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
