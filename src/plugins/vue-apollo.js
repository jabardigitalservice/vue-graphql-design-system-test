import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'

import { GRAPHQL_AUTH_TOKEN } from '../graphql/settings'

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
  
export function createProvider() {
    // Create apollo client
    const apolloProvider = new VueApollo({
        defaultClient: apolloClient,
        defaultOptions: {
            $loadingKey: 'loading'
        }
    })

    return apolloProvider;
}
