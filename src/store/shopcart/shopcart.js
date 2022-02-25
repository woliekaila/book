import {reqShopCart,reqUpdateNum,reqRemoveBook,reqChangeChecked} from '@/network/api'

const state = {
  shopCartList: []
}
const mutations = {
  GETSHOPCART(state,shopCartList){
    state.shopCartList = shopCartList
  }
}
const actions = {
  // 获取购物车信息
  async getShopcart({commit}){
    let result = await reqShopCart()
    if(result.status == 200){
      commit('GETSHOPCART',result.data)
    }
  },
  // 修改购物车中商品的数量
  updateNum({commit},data){
    return reqUpdateNum(data)
  },
  // 删除单本书籍
  removeBook({commit},bookId){
    // console.log(bookId)
    return reqRemoveBook(bookId)
  },
  // 删除所选的全部书籍
  removeCheckedBook({state,dispatch}){
    let promiseArr = []
    state.shopCartList.forEach(book => {
      if(book.isChecked){
        let promise = dispatch('removeBook',book.id)
        promiseArr.push(promise)
      }
    })
    return Promise.all(promiseArr)
  },
  // 修改书籍的选中状态
  changeChecked({commit},bookInfo){
    return reqChangeChecked(bookInfo)
  },
  // 修改所有书籍的选中状态
  changeAllChecked({state,dispatch},isChecked){
    let promiseArr = []
    state.shopCartList.forEach((book) =>{
      book.isChecked = isChecked
      const newbook = {}
      Object.keys(book).forEach(key =>{
        newbook[key] = book[key]
      })
      delete newbook.id
      let promise = dispatch('changeChecked',{bookId:book.id,book:newbook})
      promiseArr.push(promise)
    })
    return Promise.all(promiseArr);
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}