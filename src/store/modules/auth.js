import axios from 'axios'
import router from '../../router'
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
    Vue.ls.remove('token')
    state.authentication = null
    router.push('/login')
  }
}

const actions = {
  login ({commit, dispatch}, creds) {
    dispatch('startSpinner')
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
