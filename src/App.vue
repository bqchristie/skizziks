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
import Vue from 'vue'
import axios from 'axios'
import sideMenu from './components/common/side-menu'

const axiosConfig = {
  baseurl: 'http://localhost/api',
  timeout: 30000
}

// Setting up Axios on Vue Instance, for use via this.$axios
Vue.prototype.$axios = axios.create(axiosConfig)

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
  methods: {
    logout: function () {
      Vue.ls.remove('loggedInUser')
      this.$router.replace('/login')
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
