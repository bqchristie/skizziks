const state = {
  sideMenuOpen: null,
  flyUpOpen: null,
  loading: false
}

const mutations = {
  TOGGLE_SIDE_MENU (state) {
    state.sideMenuOpen = !state.sideMenuOpen
  },
  TOGGLE_FLY_UP (state) {
    state.flyUpOpen = !state.flyUpOpen
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
  toggleFlyUp ({commit}) {
    console.log('Hey now');
    commit('TOGGLE_FLY_UP')
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
  flyUpOpen: state => state.flyUpOpen,
  loading: state => state.loading
}

const appModule = {
  state,
  mutations,
  actions,
  getters
}

export default appModule
