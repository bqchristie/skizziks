<template>
  <div id="login">

        <img src="../assets/logo_white.png" alt="">
        <form>
          <div class="input-container">
          <i class="material-icons">mail_outline</i>
          <input id="email" type="email" name="email" title="email" placeholder="Email" autofocus>
          </div>
          <div class="input-container">
          <i class="material-icons">lock_outline</i>
          <input id="password" type="password" name="password" title="password" placeholder="Password">
          <button type="submit" class="btn btn-green" @click="login(creds)">Login</button>
          </div>
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

<style lang="scss">
  @import "../css/common";

  #login {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  h1 {
    font-size: 30px;
    color:$white;
  }
  img {
    margin-top: 2em;
    width: 16em;
    margin-bottom: 16px;
  }
  form {
    display: flex;
    width:90%;
    flex-direction: column;
    align-items: center;

    .input-container {
      width:100%;
      position: relative;
      i {
        position: absolute;
        left:10px;
        top: 13px;
        color: #cccccc;
        font-size: 16px;
      }
      input {
        width: 100%;
        margin-bottom: 3px;
        text-indent: 60px;
      }
    }

    button {
      width:100%;
      margin-top: 10px;
    }
  }

</style>
