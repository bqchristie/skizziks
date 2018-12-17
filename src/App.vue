<template>
  <div id="app">
    <header v-if="showHeader">
      <i class="material-icons" @click="menuOpen=!menuOpen">menu</i>
      <span>Groceries</span>
      <i class="material-icons">add</i>
      <!--<a href="#" @click="logout()">Logout</a>-->
    </header>
    <side-menu :menuOpen="menuOpen"></side-menu>
    <div id="app-content">
    <router-view/>
    </div>
  </div>
</template>

<script>

import sideMenu from './components/common/side-menu'

export default {
  name: 'App',
  components: {sideMenu},
  created: function () {
    this.showHeader = this.$route.path !== '/login'
  },
  data: function () {
    return {
      menuOpen: false,
      showHeader: false
    }
  },
  watch: {
    $route (to, from) {
      this.showHeader = to.path !== '/login'
    }
  }
}

</script>

<style  lang="scss">
  @import "css/root";
</style>
