import axios from 'axios'

const state = {
  authentication: null
}

const mutations = {

  LOGIN (state, payload) {
    state.authentication = payload
  },
  LOGOUT (state) {
    state.authentication = null
  }
}

const actions = {
  login ({commit}, auth) {
    axios.get(process.env.AUTH_PATH + '/login').then((response) => {
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
