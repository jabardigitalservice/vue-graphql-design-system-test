import Vue from 'vue'
import Vuex from 'vuex'
import { apolloClient } from '../plugins/vue-apollo'
import { GRAPHQL_AUTH_TOKEN } from '../graphql/settings'
import { SIGNIN_USER, DETAIL_USER } from '../graphql/queries'
import { CREATE_USER } from '../graphql/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    user: {},
    authStatus: false
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.authStatus,
    user: state => state.user
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    },
    LOGIN_USER (state, user) {
      state.authStatus = true
      state.user = { ...user }
    },
    LOGOUT_USER (state) {
      state.authStatus = ''
      state.token = ''
    }
  },
  actions: {
    async register ({ dispatch }, body) {
      try {
        const { data } = await apolloClient.mutate({ mutation: CREATE_USER, variables: { ...body } })
        dispatch('setUser')
        return data
      } catch (e) {
        console.log(e)
      }
    },
    async login ({ dispatch }, auth) {
      try {
        const { data } = await apolloClient.query({ query: SIGNIN_USER, variables: { ...auth } })
        const token = data?.login?.token || null
        dispatch('setToken', token)
        dispatch('setUser')
      } catch (e) {
        console.log(e)
      }
    },
    async setUser ({ commit }) {
      const { data } = await apolloClient.query({ query: DETAIL_USER })
      commit('LOGIN_USER', data.user)
    },
    async logout ({ commit }) {
      commit('LOGOUT_USER')
      localStorage.removeItem(GRAPHQL_AUTH_TOKEN)
    },
    async setToken ({ commit }, token) {
      commit('SET_TOKEN', token)
      localStorage.setItem(GRAPHQL_AUTH_TOKEN, token)
    },
    checkToken ({ dispatch }) {
      const token = localStorage.getItem(GRAPHQL_AUTH_TOKEN)
      if (token) {
        dispatch('setToken', token)
        dispatch('setUser')
      } else {
        dispatch('logout')
      }
    }
  }
})
