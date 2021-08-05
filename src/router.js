import Vue from 'vue'
import Router from 'vue-router'

import AppLogin from './components/AppLogin'
import HelloWorld from './components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/login',
      component: AppLogin
    }
  ],
  mode: 'history'
})