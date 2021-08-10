<template>
  <div class="sm:grid sm:grid-cols-1 sm:gap-4 sm:items-center sm:pt-5">
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div class="pb-4">
            <jds-input-text
                v-model="user.name"
                type="text"
                placeholder="Username"
            />
        </div>
        <div class="pb-4">
            <jds-input-text
                v-model="user.email"
                type="text"
                placeholder="Your email address"
            />
        </div>
        <div class="pb-4">
            <jds-input-text
                v-model="user.password"
                type="password"
                placeholder="Password"
            />
        </div>
        <div class="w-full">
            <jds-button
                label="Create User"
                variant="primary"
                @click="createUser"
            />
        </div>
        </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Register',
    data () {
      return {
        user: {
          name: '',
          email: '',
          password: ''
        }
      }
    },
    methods: {
      ...mapActions(['register']),
      createUser() {
        this.register(this.user)
          .then((resp) => {
            if (resp.networkError) return alert('gagal')
            return alert('success')
          })
      }
    }
  }
</script>
