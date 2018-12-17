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
  @import "../../css/common";
  #menu {
    position: fixed;
    top: 0;
    height: 100%;
    color: white;
    margin-left: -75%;
    width: 75%;
    background-color: green;
    /*opacity: 0.9;*/
    padding-top: 40px;
    transition: 0.5s;
    z-index: 10000;
    img {
      padding-left: 20px;
      padding-bottom: 20px;
      width:50%;
    }
    &.is-open {
      margin-left: 0px;
    }
    .menu-title {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-right: 20px;
    }
    a {
      display: block;
      color: white;
      padding-bottom: 3px;
      padding-left: 20px;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: bold;
    }
    p {
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 12px;
      font-size: 0.8em;
      color: lighten(green, 65%);
      text-align: justify;
    }

    div.go {
      text-align: right;
      padding-right: 20px;
      padding-bottom: 20px;
    }

    .screen {
      display: none;
      opacity: 0.5;
      &.is-open {
        z-index: 1000;
        display: block;
        position: fixed;
        height: 100%;
        width:100%;
        //background-color: aquamarine;
        top:0;
      }
    }
  }
</style>
