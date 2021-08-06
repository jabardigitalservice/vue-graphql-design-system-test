import Vue from 'vue'

import { DesignSystem } from '@jabardigitalservice/jds-design-system'

import App from './App.vue'
import router from './router'

import './tailwind.css'
import { GRAPHQL_USER_ID } from './graphql/settings'
import { createProvider } from './plugins/vue-apollo'

Vue.config.productionTip = false

Vue.use(DesignSystem)

let userId = localStorage.getItem(GRAPHQL_USER_ID)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider: createProvider(),
  router,
  data: {
    userId
  },
  render: h => h(App)
})
