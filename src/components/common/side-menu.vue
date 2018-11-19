<template>
  <div>
    <div id="menu" :class="{'is-open': menuOpen}" @click="menuOpen=!menuOpen">
      <a href="">Products</a>
      <a href="">Categories</a>
      <a href="">Profile</a>
      <a href="">Signout</a>
      <div class="screen" :class="{'is-open': menuOpen}">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'side-menu',
  props: {
    menuOpen: Boolean
  }
}
</script>

<style scoped>

</style>
