import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d042fa9 = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _c6e2c382 = () => interopDefault(import('../pages/posts/dagatal.vue' /* webpackChunkName: "pages/posts/dagatal" */))
const _79e08aeb = () => interopDefault(import('../pages/posts/vaktatal.vue' /* webpackChunkName: "pages/posts/vaktatal" */))
const _39398bf2 = () => interopDefault(import('../pages/users/register.vue' /* webpackChunkName: "pages/users/register" */))
const _5eb20686 = () => interopDefault(import('../pages/users/signin.vue' /* webpackChunkName: "pages/users/signin" */))
const _5bfc0851 = () => interopDefault(import('../pages/posts/_id.vue' /* webpackChunkName: "pages/posts/_id" */))
const _494f1325 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/posts",
    component: _7d042fa9,
    name: "posts"
  }, {
    path: "/posts/dagatal",
    component: _c6e2c382,
    name: "posts-dagatal"
  }, {
    path: "/posts/vaktatal",
    component: _79e08aeb,
    name: "posts-vaktatal"
  }, {
    path: "/users/register",
    component: _39398bf2,
    name: "users-register"
  }, {
    path: "/users/signin",
    component: _5eb20686,
    name: "users-signin"
  }, {
    path: "/posts/:id",
    component: _5bfc0851,
    name: "posts-id"
  }, {
    path: "/",
    component: _494f1325,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
