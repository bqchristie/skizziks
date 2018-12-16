<template>
  <div id="login">
        <h1>Please Sign In</h1>
        <form>
          <input id="email" type="email" name="email" title="email" placeholder="Email" required autofocus>
          <input id="password" type="password" name="password" title="password" placeholder="Password" required>
          <button type="submit" class="btn btn-primary" @click="login(creds)">Login</button>
        </form>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      creds: {
        email: 'Rubye4@yahoo.com',
        password: 'password'
      }
    }
  },
  methods: {
    ...mapActions(['login'])
  },
  computed: {
    ...mapGetters(['authentication'])
  },
  watch: {
    authentication: function (authentication) {
      if (authentication.auth) {
        this.$router.replace('/')
      } else {
        console.log('Fail...')
      }
    }
  }
}

</script>

<style type="scss" scoped>
  form {
    display: flex;
    flex-direction: column;
  }
</style>
