<template>
  <div class="sm:grid sm:grid-cols-1 sm:gap-4 sm:items-center sm:pt-5">
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div>{{ login }}</div>
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div class="pb-4">
            <jds-input-text
                v-model="email"
                type="text"
                placeholder="Your email address"
            />
        </div>
        <div class="pb-4">
            <jds-input-text
                v-model="password"
                type="password"
                placeholder="Password"
            />
        </div>
        <div class="justify-center">
            <jds-button
                label="Login"
                variant="primary"
                @click="login"
            />
        </div>
        </div>
    </div>
  </div>
</template>

<script>
  import { GRAPHQL_USER_ID, GRAPHQL_AUTH_TOKEN } from '../graphql/settings'
  import { SIGNIN_USER_MUTATION, TEST } from '../graphql/graphql'

  export default {
    name: 'AppLogin',
    data () {
      return {
        email: '',
        login: true,
        password: ''
      }
    },
    apollo: {
      login: {
        query: TEST
      },
      // login: {
      //   // gql query
      //   query: SIGNIN_USER_MUTATION,
      //   // Static parameters
      //   variables: {
      //     email: "admin@example.com",
      //     password: "admin"
      //   },
      // },
    },
    methods: {
      confirm () {
        // const { email, password } = this.$data
        if (this.login) {
            console.log(SIGNIN_USER_MUTATION)
            const b = this.$apollo.addSmartQuery('login', {
                query: TEST,
                // variables: {
                //     email,
                //     password
                // }
            })
            console.log(b)
            // console.log(this.$apollo.queries.login)
            // this.$apollo.queries.login({
            //     query: SIGNIN_USER_MUTATION,
            //     variables: {
            //         email,
            //         password
            //     }
            // }).then((result) => {
            //     console.log(result)
            // })
            // this.$apollo.mutate({
            //     query: SIGNIN_USER_MUTATION,
            //     variables: {
            //         email,
            //         password
            //     }
            // }).then((result) => {
            //     console.log(result)
            // })
        }
        this.$router.push({path: '/'})
      },
      saveUserData (id, token) {
        localStorage.setItem(GRAPHQL_USER_ID, id)
        localStorage.setItem(GRAPHQL_AUTH_TOKEN, token)
        this.$root.$data.userId = localStorage.getItem(GRAPHQL_USER_ID)
      }
    }
  }
</script>
