// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueLocalStorage from 'vue-localstorage'
import axios from 'axios/index'

Vue.config.productionTip = false
Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const token = Vue.ls.get('token')

  if (token) {
    axios.defaults.headers.common['x-access-token'] = token
  }

  if (requiresAuth && !token) {
    next('/login')
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
