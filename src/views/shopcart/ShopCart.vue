<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="(cart) in shopCartList" :key="cart.id">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" :checked="cart.isChecked" @change="changeChecked(cart)">
          </li>
          <li class="cart-list-con2">
            <img :src="cart.imgUrl">
            <div class="item-msg">{{cart.name}}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{cart.price}}</span>
          </li>
          <li class="cart-list-con5">
            <!-- 修改服务器商品数量 -->
            <a href="javascript:void(0)" class="mins" @click="changeNum('decrement',-1,cart)">-</a>
            <input autocomplete="off" type="text" :value="cart.num" minnum="1" class="itxt" @change="changeNum('change',$event.target.value*1,cart)">
            <a href="javascript:void(0)" class="plus" @click="changeNum('increment',1,cart)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{cart.num * cart.price}}</span>
          </li>
          <li class="cart-list-con7">
            <a href="javascript:;" class="sindelet" @click="removeChecked(cart)">删除</a>
            <br>
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" :checked="isAllChecked && shopCartList.length!=0" @change="changeAllChecked">
        <span>全选</span>
      </div>
      <div class="option">
        <a href="javascript:;" @click="removeAllChecked">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{allPrice}}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn" href="javascript:;" target="_blank">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Shopcart',
  methods: {
    // 获取购物车中的数据
    getData(){
      this.$store.dispatch('getShopcart');
    },
    // 修改购买商品数量
    changeNum(type,bookNum,book){
      // type: 修改商品数量的类型,bookNum修改的数量,book修改的书籍
      
      if(type == 'increment'){ //代表点击的是 按钮+
        bookNum = book.num + 1
      }

      if(type == 'decrement'){//代表点击的是 按钮-
        bookNum = book.num>1 ? book.num-1 : book.num
      }

      if(type == 'change'){ //代表直接修改input中的值
        if(isNaN(bookNum) || bookNum < 1){
          bookNum = book.num
        }else{
          bookNum = parseInt(bookNum)
        }
      }
      // 需要带给服务器的商品数量
      book.num = bookNum
      const newbook = {}
      Object.keys(book).forEach(key =>{
        newbook[key] = book[key]
      })
      delete newbook.id
      this.$store.dispatch('updateNum',{bookId:book.id,book:newbook}).then(res =>{//修改成功则重新获取数据并展示
        this.getData()
      }).catch(err =>{
        console.log(err)
      })
    },
    // 删除单个商品
    removeChecked(book){
      this.$store.dispatch('removeBook',book.id).then(res =>{
        this.getData()
      }).catch(err =>{
        console.log(err)
      })
    },
    // 删除所选的全部商品
    removeAllChecked(){
      this.$store.dispatch('removeCheckedBook').then(res =>{
        this.getData()
      }).catch(err =>{
        console.log(err)
      })
    },
    // 修改单个产品的选中状态,book代表要修改哪一本书的状态
    changeChecked(book){
      book.isChecked = !book.isChecked
      const newbook = {}
      Object.keys(book).forEach(key =>{
        newbook[key] = book[key]
      })
      delete newbook.id
      this.$store.dispatch('changeChecked',{bookId:book.id,book:newbook}).then(res =>{
        this.getData()
      }).catch(err =>{
        console.log(err)
      })
    },
    // 点击全选按钮修改购物车内全部商品的状态
    changeAllChecked(){
      this.$store.dispatch('changeAllChecked',!this.isAllChecked).then(res =>{
        this.getData()
      }).catch(err =>{
        console.log(err)
      })
    }
  },
  mounted(){
    this.getData()
  },
  computed: {
    ...mapState({
      shopCartList: (state) =>{
        return state.shopcart.shopCartList
      }
    }),
    // 计算总价
    allPrice(){
      let sum = 0
      this.shopCartList.forEach(item => {
        sum += item.num * item.price
      })
      return sum
    },
    // 控制全选按钮是否全选
    isAllChecked(){
      // 默认状态为选中
      let flag = true
      this.shopCartList.forEach((item) =>{
        if(item.isChecked == false){
          flag =false
        }
      })
      return flag
    },

  }
}
</script>

<style scoped>
  .cart {
  width: 1200px;
  margin: 0 auto;
}
.cart h4 {
  margin: 9px 0;
  font-size: 14px;
  line-height: 21px;
}
.cart .cart-main .cart-th {
  background: #f5f5f5;
  border: 1px solid #ddd;
  padding: 10px;
  overflow: hidden;
}
.cart .cart-main .cart-th > div {
  float: left;
}
.cart .cart-main .cart-th .cart-th1 {
  width: 25%;
}
.cart .cart-main .cart-th .cart-th1 input {
  vertical-align: middle;
}
.cart .cart-main .cart-th .cart-th1 span {
  vertical-align: middle;
}
.cart .cart-main .cart-th .cart-th2 {
  width: 25%;
}
.cart .cart-main .cart-th .cart-th3,
.cart .cart-main .cart-th .cart-th4,
.cart .cart-main .cart-th .cart-th5,
.cart .cart-main .cart-th .cart-th6 {
  width: 12.5%;
}
.cart .cart-main .cart-body {
  margin: 15px 0;
  border: 1px solid #ddd;
}
.cart .cart-main .cart-body .cart-list {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
}
.cart .cart-main .cart-body .cart-list > li {
  float: left;
}
.cart .cart-main .cart-body .cart-list .cart-list-con1 {
  width: 15%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con2 {
  width: 35%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con2 img {
  width: 82px;
  height: 82px;
  float: left;
}
.cart .cart-main .cart-body .cart-list .cart-list-con2 .item-msg {
  float: left;
  width: 150px;
  margin: 0 10px;
  line-height: 18px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con4 {
  width: 10%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con5 {
  width: 17%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con5 .mins {
  border: 1px solid #ddd;
  border-right: 0;
  float: left;
  color: #666;
  width: 6px;
  text-align: center;
  padding: 8px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con5 input {
  border: 1px solid #ddd;
  width: 40px;
  height: 33px;
  float: left;
  text-align: center;
  font-size: 14px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con5 .plus {
  border: 1px solid #ddd;
  border-left: 0;
  float: left;
  color: #666;
  width: 6px;
  text-align: center;
  padding: 8px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con6 {
  width: 10%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con6 .sum {
  font-size: 16px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con7 {
  width: 13%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con7 a {
  color: #666;
}
.cart .cart-tool {
  overflow: hidden;
  border: 1px solid #ddd;
}
.cart .cart-tool .select-all {
  padding: 10px;
  overflow: hidden;
  float: left;
}
.cart .cart-tool .select-all span {
  vertical-align: middle;
}
.cart .cart-tool .select-all input {
  vertical-align: middle;
}
.cart .cart-tool .option {
  padding: 10px;
  overflow: hidden;
  float: left;
}
.cart .cart-tool .option a {
  float: left;
  padding: 0 10px;
  color: #666;
}
.cart .cart-tool .money-box {
  float: right;
}
.cart .cart-tool .money-box .chosed {
  line-height: 26px;
  float: left;
  padding: 0 10px;
}
.cart .cart-tool .money-box .sumprice {
  width: 200px;
  line-height: 22px;
  float: left;
  padding: 0 10px;
}
.cart .cart-tool .money-box .sumprice .summoney {
  color: #c81623;
  font-size: 16px;
}
.cart .cart-tool .money-box .sumbtn {
  float: right;
}
.cart .cart-tool .money-box .sumbtn a {
  display: block;
  position: relative;
  width: 96px;
  height: 52px;
  line-height: 52px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-family: "Microsoft YaHei";
  background: #e1251b;
  overflow: hidden;
}
</style>