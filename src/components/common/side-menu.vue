<template>
  <div>
    <div id="menu" :class="{'is-open': sideMenuOpen}" v-on:click.self="hideMenu()">
      <img src="../../assets/logo_alternate_layout_white.png" alt="">
      <div class="menu-item">
        <div class="menu-title">
          <a href="">Plan & Shop</a>
        </div>
        <p>Manage you master product list. Add new items, correct spelling,
          conolidate duplicates.
        </p>
      </div>
      <div class="menu-item">
        <div class="menu-title">
          <a href="">Products</a>
        </div>
        <p>Manage you master product list. Add new items, correct spelling,
          conolidate duplicates.
        </p>
      </div>
      <div class="menu-item">
        <div class="menu-title">
          <a href="">Categories</a>
        </div>
        <p>Oragnize products into categories so that you can naigate
          the shopping aisles optimally.</p>
        <div class="menu-item">
          <div class="menu-title">
            <a href="">Profile</a>
          </div>
          <p>Upload a photo change your password.</p>
        </div>
        <div class="menu-item">
          <div class="menu-title">
            <a href="#" v-on:click.self="signout()">Signout</a>
          </div>
          <p>Goobye!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'side-menu',
  props: {
    menuOpen: Boolean
  },
  data: () => {
    return {
      isOpen: this.menuOpen
    }
  },
  methods: {
    ...mapActions(['toggleSideMenu', 'logout']),
    hideMenu: function () {
      // console.log('side menu open' + this.sideMenuOpen);
      if (this.sideMenuOpen) {
        this.toggleSideMenu()
      }
    },
    signout: function () {
      this.logout()
      this.hideMenu()
    }
  },
  computed: {
    ...mapGetters(['sideMenuOpen'])
  }
}
</script>

<style lang="scss" scoped>
  @import "../../css/common.scss";
  @import "../../css/side-menu.scss";
</style>
