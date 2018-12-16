import axios from 'axios'
import Vue from 'vue'

const state = {
  authentication: null
}

const mutations = {

  LOGIN (state, payload) {
    state.authentication = payload
    if (payload.auth) {
      Vue.ls.set('token', payload.token)
      axios.defaults.headers.common['x-access-token'] = payload.token
    }
  },
  LOGOUT (state) {
    console.log('in the logout')
    Vue.ls.remove('token')
    state.authentication = null
    this.$router.replace('/login')
  }
}

const actions = {
  login ({commit}, creds) {
    axios.post(process.env.AUTH_PATH + '/login', creds).then((response) => {
      commit('LOGIN', response.data)
    })
  },
  logout ({commit}) {
    commit('LOGOUT', null)
  }
}

const getters = {
  authentication: state => state.authentication
}

const authModule = {
  state,
  mutations,
  actions,
  getters
}

export default authModule
