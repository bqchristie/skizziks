import Vue from 'vue'
import Router from 'vue-router'
import GroceryList from '@/components/GroceryList'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GroceryList',
      component: GroceryList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
