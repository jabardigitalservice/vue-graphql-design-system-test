<template>
  <div>
    <p> Hello World</p>
    <p> {{user}}</p>
    <div class="justify-center">
      <jds-button
          label="Detail User"
          variant="primary"
          @click="detailUser"
      />
    </div>
  </div>
</template>

<script>
import { DETAIL_USER } from '../graphql/queries'
export default {
  name: 'HelloWorld',
  apollo: {
    user: {
      query: DETAIL_USER
    }
  },
  methods: {
    async detailUser () {
      const { loading, data } = await this.$apollo.query({
          query: DETAIL_USER
      })
      if (!loading) {
        alert(data.user.name)
      }
    }
  }
}
</script>

