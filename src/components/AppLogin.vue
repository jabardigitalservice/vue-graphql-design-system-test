<template>
  <div class="sm:grid sm:grid-cols-1 sm:gap-4 sm:items-center sm:pt-5">
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div class="pb-4">
            <jds-input-text
                v-model="auth.email"
                type="text"
                placeholder="Your email address"
            />
        </div>
        <div class="pb-4">
            <jds-input-text
                v-model="auth.password"
                type="password"
                placeholder="Password"
            />
        </div>
        <div class="justify-center">
            <jds-button
                label="Login"
                variant="primary"
                @click="loginUser"
            />
        </div>
        </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'AppLogin',
    data () {
      return {
        auth: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      ...mapActions(['login']),
      async loginUser() {
        this.login(this.auth).then(() => this.$router.push('/'))
      }
    }
  }
</script>
