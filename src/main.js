import Vue from 'vue'

import { DesignSystem } from '@jabardigitalservice/jds-design-system'

import App from './App.vue'
import router from './router'

import { createProvider } from './plugins/vue-apollo'

import store from './store'

import './style/tailwind.css'
import '@jabardigitalservice/jds-design-system/css/jds-design-system.css'

Vue.config.productionTip = false

Vue.use(DesignSystem)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider: createProvider(),
  router,
  store,
  render: h => h(App)
})
