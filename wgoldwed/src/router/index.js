import Vue from 'vue'
import Router from 'vue-router'
import Box from '@/components/Box/Box'
import Home from '@/components/Home/Home'
import Login from '@/components/Login/Login'
import Register from '@/components/Register/Register'
import List from '@/components/List/List'
import Details from '@/components/Details/Details'
import Cart from '@/components/Cart/Cart'
import Member from '@/components/Member/Member'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/box',
      name: 'Box',
      component: Box,
      children:[
        { path: '', name: 'Home', component: Home },
        { path: 'list', name: 'List', component: List },
        { path: 'details', name: 'Details', component: Details },
        { path: 'cart', name: 'Cart', component: Cart },
        { path: 'member', name: 'Member', component: Member },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
