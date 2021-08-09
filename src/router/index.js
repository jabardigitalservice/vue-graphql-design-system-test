import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

// import { GRAPHQL_AUTH_TOKEN } from '../graphql/settings'
import AppLogin from '../components/AppLogin'
import HelloWorld from '../components/HelloWorld'
import Register from '../components/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HelloWorld,
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    component: Register,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: AppLogin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

router.beforeEach(async (to, from, next) => {
  // Check if the user is logged in
  await store.dispatch('checkToken')
  const isUserLoggedIn = store.getters.isAuthenticated
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isUserLoggedIn) {
      await store.dispatch('logout')
      await next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
