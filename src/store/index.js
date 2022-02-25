import Vue from 'vue'
import Vuex from 'vuex'

// 引入home模块的数据
import home from './home/home.js'
// 引入detail模块的数据
import user from './user/user.js'
// 引入shopcart模块的数据
import shopcart from './shopcart/shopcart.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    home,
    user,
    shopcart
  }
})