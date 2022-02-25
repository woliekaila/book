import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home'
import Detail from '@/views/detail/Detail.vue'
import ShopCart from '@/views/shopcart/ShopCart.vue'
import Register from '@/views/register/Register.vue'
import Login from '@/views/login/Login.vue'

Vue.use(VueRouter);


const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: Home
  },
  {
    name: 'detail',
    path: '/detail',
    component: Detail
  },
  {
    name: 'shopcart',
    path: '/shopcart',
    component: ShopCart
  },
  {
    name: 'register',
    path: '/register',
    component: Register
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  }
]


const router =new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // 程序滚动位置
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { y: 0 }
  },
  
})

export default router