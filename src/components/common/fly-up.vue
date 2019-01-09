<template>
  <div ng-if="flyUpOpen">
    <p>
      this is the flyup
    </p>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'fly-up',
  computed: {
    ...mapGetters(['flyUpOpen'])
  }
}
</script>

<style scoped>

</style>
