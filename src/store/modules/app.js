const state = {
  sideMenuOpen: null
}

const mutations = {
  TOGGLE_SIDE_MENU (state, payload) {
    state.sideMenuOpen = !state.sideMenuOpen
  }
}

const actions = {
  toggleSideMenu ({commit}) {
    commit('TOGGLE_SIDE_MENU')
  }
}

const getters = {
  sideMenuOpen: state => state.sideMenuOpen
}

const appModule = {
  state,
  mutations,
  actions,
  getters
}

export default appModule
