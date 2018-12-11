<template>
  <div>
    <div id="menu" :class="{'is-open': menuOpen}" @click="menuOpen=!menuOpen">
      <div>
        <div class="menu-title">
          <a href="">Products</a>
        </div>
        <p>Manage you master product list. Add new items, correct spelling,
          conolidate duplicates.
        </p>
      </div>
      <div>
        <div class="menu-title">
          <a href="">Categories</a>
        </div>
        <p>Oragnize products into categories so that you can naigate
          the shopping aisles optimally.</p>
        <div class="menu-title">
          <a href="">Profile</a>
        </div>
        <p>Upload a photo change your password.</p>
        <div class="menu-title">
          <a href="">Signout</a>
        </div>
        <p>Goobye!</p>
      </div>
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

<style lang="scss" scoped>
  @import "../../css/common.scss";
  @import "../../css/side-menu.scss";
</style>
