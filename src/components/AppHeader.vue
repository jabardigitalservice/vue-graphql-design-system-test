<template>
  <div>
    <div>
      <router-link v-if="authStatus" to="/register">register</router-link>
      <router-link v-else to="/login">login</router-link>
    </div>
    <div>
      <div v-if="authStatus" @click="logoutUser()">logout</div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'

  export default {
    name: 'AppHeader',
    computed: {
      ...mapGetters(['user']),
      ...mapGetters(['authStatus']),
      ...mapGetters(['isAuthenticated'])
    },
    methods: {
      ...mapActions(['logout']),
      logoutUser () {
        this.logout().then(() => this.$router.push('/login'))
      }
    }
  }
</script>