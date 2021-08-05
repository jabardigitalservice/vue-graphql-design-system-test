import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'

import { DesignSystem } from '@jabardigitalservice/jds-design-system'

import Vue from 'vue'
import VueApollo from 'vue-apollo'

import App from './App.vue'
import router from './router'
import { GRAPHQL_USER_ID, GRAPHQL_AUTH_TOKEN } from './graphql/settings'

import './tailwind.css'

Vue.config.productionTip = false

Vue.use(DesignSystem)

console.log(process.env.VUE_APP_GRAPHQL_URI)
const httpLink = new HttpLink({
  uri: process.env.VUE_APP_GRAPHQL_URI
})

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = localStorage.getItem(GRAPHQL_AUTH_TOKEN)
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null
    }
  })

  return forward(operation)
})

const apolloClient = new ApolloClient({
  link: authMiddleware.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

let userId = localStorage.getItem(GRAPHQL_USER_ID )

/* eslint-disable no-new */
new Vue({
  el: '#app',
  provide: apolloProvider.provide(),
  router,
  data: {
    userId
  },
  render: h => h(App)
})
