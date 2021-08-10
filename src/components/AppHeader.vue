<template>
  <div class="app-header">
    <div class="app-header__content">
      <div class="app-header__content__sect">
        <div class="app-header__content__sect__menu">
          <router-link to="/">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <img class="h-8 w-auto sm:h-10" src="../assets/logo.png" alt="">
            </a>
          </router-link>
        </div>
        <div class="app-header__content__sect__button">
          <router-link v-if="!authStatus" to="/login">
            <button class="app-header__content__sect__button-login">
              Login
            </button>
          </router-link>
          <router-link v-else to="/register">
            <button class="app-header__content__sect__button-register">
              Register
            </button>
          </router-link>
          <button
            v-if="authStatus"
            class="app-header__content__sect__button-logout"
            @click="logoutUser()"
          >
            Logout
          </button>
        </div>
      </div>
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
<style lang="scss" scoped>
  .app-header {
    @apply relative bg-white;

    &__content {
      @apply mx-auto;
      
      @screen sm {
        @apply px-5;
      }

      &__sect {
        @apply flex justify-between items-center border-b-2 border-gray-100 py-6;
        
        @screen md {
          @apply justify-start space-x-10;
        }

        &__menu {
          @apply flex justify-start;

          @screen lg { 
            @apply w-0 flex-1;
          }
        }

        &__button {
          @apply hidden items-center justify-end;

          @screen md {
            @apply flex flex-1;
          }

          @screen lg {
            @apply w-0;
          }

          &-login {
            @apply whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900;
          }

          &-register {
            @apply ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700;
          }

          &-logout {
            @apply ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700;
          }
        }
      }
    }
  }
</style>