import instance from "./request";
import mockAjax from './mockAjax';
import instance2 from "./cart";


// 获取模拟的手风琴数据
export function reqGetCollapse(){
  return mockAjax({
    url: '/collapse',
    method: 'get'
  })
}
// 获取模拟的限时秒杀商品数据
export function reqGetProduct(){
  return mockAjax({
    url: '/product',
    method: 'get'
  })
}
// 获取模拟的每日推荐商品数据
export function reqGetRecommend(){
  return mockAjax({
    url: '/recommend',
    method: 'get'
  })
}

// 用户注册
export function reqUserRegister(userInfo){
  return instance({
    url: '/register',
    method: 'post',
    data: userInfo,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  })
}

// 用户登录
export function reqUserLogin(userInfo){
  return instance({
    url: '/login',
    method: 'post',
    data: userInfo,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  })
}

// 获取用户信息
export function reqGetUserInfo(data){
  return instance({
    url: '/getUser',
    method: 'post',
    data,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      // 'Cookie': `token=${token}`
    }
  })
}

// 添加到购物车
export function reqAddShopCart(data){
  return instance2({
    // url: '/p',
    method: 'post',
    data 
  })
}

// 获取购物车中的数据
export function reqShopCart(){
  return instance2({
    method: 'get'
  })
}

// 修改购物车中商品数量 data 代表需要给服务器带的数据
export function reqUpdateNum(data){
  let {bookId,book} = data
  let {autor,name,imgUrl,price,press,publishDate,isChecked,num} = book
  return instance2({
    url: `/${bookId}`,
    method: 'put',
    data: {autor,name,imgUrl,price,press,publishDate,isChecked,num}
  })
}

// 删除所选商品
export function reqRemoveBook(bookId){
  return instance2({
    url: `/${bookId}`,
    method: 'delete'
  })
}

// 修改产品的1选中状态
export function reqChangeChecked(data){
  let {bookId,book} = data
  let {autor,name,imgUrl,price,press,publishDate,isChecked,num} = book
  return instance2({
    url: `/${bookId}`,
    method: 'put',
    data:{autor,name,imgUrl,price,press,publishDate,isChecked,num}
  })
}