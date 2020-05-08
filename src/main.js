import Vue from 'vue';
import Vuex from  'vuex';
import App from './components/App.vue';
import VueRouter from "vue-router";
import store from './store/store';
import VueLocalStorage from 'vue-localstorage';


import ListDetail from "./components/ListDetail";
import Login from "./components/Login";
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true
})
Vue.use(VueRouter)
Vue.use(Vuex)





// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    { path: '/', redirect: '/list' },
    { path: '/list', component: ListDetail, meta: {requiresAuth:true} },
    { path: '/list/:id', component: ListDetail, meta: {requiresAuth:true} },
    { path: '/login', component: Login },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
   // short for `routes: routes`
  routes: routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const token = Vue.ls.get('token')

  if (token) {
    //axios.defaults.headers.common['x-access-token'] = token
  }

  if (requiresAuth && !token) {
    next('/login')
  } else {
    next()
  }
})

router.afterEach(() => {
  store.dispatch('hideMenus').then(()=>{});
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
// new Vue({
//   router
// }).$mount('#app')

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
