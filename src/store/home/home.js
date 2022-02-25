// 引入获取获取数据的接口
import {reqGetCollapse,reqGetProduct,reqGetRecommend,reqGetUserInfo} from '@/network/api.js'
import qs from 'qs'

const state = {
  // 手风琴数据
  collapseList: [],
  // 限时秒杀
  productList: [],
  // 每日推荐
  recommendList: [],
  // 用户信息
  user: {}
}
const mutations = {
  // 手风琴
  GETCOLLAPSE(state,collapse){
    state.collapseList = collapse.data
  },
  // 限时秒杀
  GETPRODUCT(state,product){
    state.productList = product.data
  },
  // 每日推荐
  GETRECOMMEND(state,recommend){
    // console.log(recommend)
    state.recommendList = recommend.data
  },
  // 用户信息
  GETUSERINFO(state,user){
    state.user = user.result
  }
}
const actions = {
  // 获取模拟的手风琴数据
  async getCollapse({commit}){
    let result = await reqGetCollapse()
    if(result.status === 200){
      commit('GETCOLLAPSE',result.data);
    }
  },
  // 获取模拟的限时秒杀商品数据
  async getProduct({commit}){
    let result = await reqGetProduct();
    if(result.status === 200){
      commit('GETPRODUCT',result.data)
    }
  },
  // 获取模拟的每日推荐
  async getRecommend({commit}){
    let result = await reqGetRecommend()
    if(result.status === 200){
      commit('GETRECOMMEND',result.data)
    }
  },
  // 获取用户信息
  async getUserInfo({commit},data){
    // 将组件传递过来的数据进行预处理
    const newData = qs.stringify(data)
    // 发请求
    let result = await reqGetUserInfo(newData)
    if(result.status == 200){
      commit('GETUSERINFO',result.data)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}