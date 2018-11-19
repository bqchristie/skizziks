<template>
  <div id="app">
    <header>
      <i class="material-icons" @click="menuOpen=!menuOpen">menu</i>
      <a href="#" @click="logout()">Logout</a>
    </header>
    <div id="menu" :class="{'is-open': menuOpen}" @click="menuOpen=!menuOpen">
      <a href="">Products</a>
      <a href="">Categories</a>
      <a href="">Profile</a>
      <a href="">Signout</a>
      <div class="screen" :class="{'is-open': menuOpen}">
      </div>
    </div>
    <div id="app-content">
    <router-view/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

const axiosConfig = {
  baseurl: 'http://localhost/api',
  timeout: 30000
}

// Setting up Axios on Vue Instance, for use via this.$axios
Vue.prototype.$axios = axios.create(axiosConfig)

export default {
  name: 'App',
  data: function () {
    return {
      menuOpen: false
    }
  },
  methods: {
    logout: function () {
      Vue.ls.remove('loggedInUser')
      this.$router.replace('/login')
    }
  }
}

</script>

<style  lang="scss">
  body {
    background-color: lighten(#6481b8,40%);
    height: 100%;
    #app {
      dislay: flex;
      flex-direction: column;
      padding-top: 40px;
      /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
      #menu {
        position: fixed;
        top: 0;
        height: 100%;
        color: white;
        margin-left: -50%;
        width: 50%;
        background-color: darken(#6481b8,40%);
        /*opacity: 0.9;*/
        padding-top: 40px;
        transition: 0.5s;
        z-index: 999;
        &.is-open {
          margin-left: 0px;
        }
        a {
          display: block;
          color: white;
          padding-bottom: 10px;
          padding-left: 20px;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: bold;
        }
        .screen {
          display: none;
          opacity: 0.5;
          &.is-open {
            z-index: 100;
            display: block;
            position: fixed;
            height: 100%;
            width:100%;
            background-color: aquamarine;
            top:0;
          }
        }
      }
      header {
        height: 40px;
        background-color: #6481b8;
        position: fixed;
        top: 0;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        i {
          padding-left: 10px;
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
