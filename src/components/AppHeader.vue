<template>
  <div>
    <div>
      <div class="fw7 mr1">Test Graphql</div>
      <router-link to="/">new</router-link>
      <div v-if="userId">
        <div>|</div>
        <router-link to="/create">submit</router-link>
      </div>
    </div>
    <div>
      <div v-if="userId" @click="logout()">logout</div>
      <router-link v-else to="/login">login</router-link>
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
    created() {
        console.log(this.userId )
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