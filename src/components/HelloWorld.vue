<template>
  <div>
    <p> Hello World</p>
    <p> My Name: {{user.name}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

