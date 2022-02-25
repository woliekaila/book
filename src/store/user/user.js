import qs from 'qs'

// 引入用户注册以及登录接口
import {reqUserRegister,reqUserLogin} from '@/network/api'

const state = {}
const mutations = {}
const actions = {
  userRegister(miniStore,userInfo){
    // 将收集到的用户信息以k/v的形式传递给服务器
    let info = qs.stringify(userInfo)
    return reqUserRegister(info)
    
  },
  userLogin(miniStore,userInfo){
    // 将收集到的用户信息以k/v的形式传递给服务器
    let info = qs.stringify(userInfo)
    return reqUserLogin(info)
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}