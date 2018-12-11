<template>
  <div id="login">
        <h1>Please Sign In</h1>
        <form>
          <input id="email" type="email" name="email" title="email" placeholder="Email" required autofocus>
          <input id="password" type="password" name="password" title="password" placeholder="Password" required>
          <button type="submit" class="btn btn-primary" @click="login()">Login</button>
        </form>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Login',
  methods: {
    login
  }
}

function login () {
  Vue.ls.set('loggedInUser', '12897shiahsoiha9621')
  this.$router.replace('/')

}
</script>

<style type="scss" scoped>
  form {
    display: flex;
    flex-direction: column;
  }
</style>
