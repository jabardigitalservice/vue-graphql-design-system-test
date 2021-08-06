<template>
  <div>
    <div>
      <div class="mb-2">Test Graphql</div>
      {{ userId }}
      <router-link v-if="userId !== null" to="/">new</router-link>
      <router-link v-else to="/login">login</router-link>
    </div>
    <div>
      <div v-if="userId" @click="logout()">logout</div>
    </div>
  </div>
</template>

<script>
  import { GRAPHQL_USER_ID, GRAPHQL_AUTH_TOKEN } from '../graphql/settings'

  export default {
    name: 'AppHeader',
    computed: {
      userId () {
        return this.$root.$data.userId
      }
    },
    methods: {
      logout () {
        localStorage.removeItem(GRAPHQL_USER_ID)
        localStorage.removeItem(GRAPHQL_AUTH_TOKEN)
        this.$root.$data.userId = localStorage.getItem(GRAPHQL_USER_ID)
      }
    }
  }
</script>