<template>
  <div id="app">
    <header v-if="showHeader">
      <i class="material-icons" @click="toggleSideMenu">menu</i>
      <span>Groceries</span>
      <i class="material-icons">add</i>
    </header>
    <spinner/>
    <side-menu></side-menu>
    <fly-up></fly-up>
    <div id="app-content">
    <router-view/>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import sideMenu from './components/common/side-menu'
import flyUp from './components/common/fly-up'
import Spinner from './components/common/spinner'

export default {
  name: 'App',
  components: {Spinner, sideMenu, flyUp},
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
    ...mapActions(['toggleSideMenu'])
  },
  watch: {
    $route (to, from) {
      this.showHeader = to.path !== '/login'
    }
  }
}

</script>

<style  lang="scss">
  @import "css/common";

  body {
    // Needs latest Compass, add '@import "compass"' to your scss
    // Permalink - use to edit and share this gradient:
    // http://colorzilla.com/gradient-editor/$main-color+0,b8ff03+23,a8e000+93
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/$main-color+0,b8ff03+23,a8e000+93 */
    background: $main-color; /* Old browsers */
    background: -moz-linear-gradient(left, $main-color 0%, $main-color 23%, darken($main-color,10%)); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, $main-color 0%,$main-color 23%,darken($main-color,10%)); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, $main-color 0%,$main-color 23%,darken($main-color,10%)); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$main-color', endColorstr='#a8e000',GradientType=1 ); /* IE6-9 */

    height: 100%;
    #app {
      dislay: flex;
      flex-direction: column;
      padding-top: 40px;
      /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
      header {
        height: 60px;
        background-color: $black;
        color: $white;
        position: fixed;
        text-transform: uppercase;
        font-weight: 700;
        top: 0;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        i {
          padding-left: 10px;
          padding-right: 10px;
          color: white;
        }
        a {
          padding-right: 10px;
          text-decoration: none;
          color: white;
        }
      }
      #app-content {
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
</style>
