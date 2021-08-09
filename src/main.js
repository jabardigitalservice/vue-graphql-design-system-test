import Vue from 'vue'

import { DesignSystem } from '@jabardigitalservice/jds-design-system'

import App from './App.vue'
import router from './router'

import './style/tailwind.css'
import { createProvider } from './plugins/vue-apollo'

import store from './store'

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
