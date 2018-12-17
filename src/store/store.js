import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'
import auth from './modules/auth'
import app from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    product,
    auth
  }
})
