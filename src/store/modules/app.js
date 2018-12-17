const state = {
  sideMenuOpen: null,
  loading: false
}

const mutations = {
  TOGGLE_SIDE_MENU (state) {
    state.sideMenuOpen = !state.sideMenuOpen
  },
  START_SPINNER (state) {
    state.loading = true
  },
  STOP_SPINNER (state) {
    state.loading = false
  }
}

const actions = {
  toggleSideMenu ({commit}) {
    commit('TOGGLE_SIDE_MENU')
  },
  startSpinner ({commit}) {
    commit('START_SPINNER')
  },
  stopSpinner ({commit}) {
    commit('STOP_SPINNER')
  }
}

const getters = {
  sideMenuOpen: state => state.sideMenuOpen,
  loading: state => state.loading
}

const appModule = {
  state,
  mutations,
  actions,
  getters
}

export default appModule
