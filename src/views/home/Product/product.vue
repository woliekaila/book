<template>
  <div class="wrap">
    <div class="dingbu">
      <div class="b3">
        <span class="s4">限时秒杀</span>
      </div>
      <div class="b4">
        <img src="//static.winxuancdn.com/cms/assets/images/winxuanhome/index/common-module-2020-title-icon.png">
      </div>
    </div>

    <div class="product-list">
      <div class="product" v-for="(p) in productList" :key="p.id" @click="sendInfo(p)">
        <img :src="p.imgUrl">
        <div class="product-title">
          <span class="s7">{{p.name}}</span>
        </div>
        <div class="price">
          <div class="jg1">
            <span class="s2">秒杀价：￥{{p.price}}</span>
          </div>
          <div class="jg2">
            <span class="s3">原价：60.0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'product',
  mounted(){
    //派发action 获取模拟的限时秒杀商品数据
    this.$store.dispatch('getProduct');
  },
  computed: {
    // 获取仓库中存储的商品数据
    ...mapState({
      productList: (state) =>{
        return state.home.productList
      }
    })
  },
  methods: {
    sendInfo(item){
      // console.log(item);
      sessionStorage.setItem('BOOKINFO',JSON.stringify(item))
      let info = sessionStorage.getItem('BOOKINFO')
      if(info){
        this.$router.push({name:'detail'});
      }
    }
  }
}
</script>

<style scoped>
.wrap .dingbu{
	width: 100%;
	height: 60px;

}
.wrap .dingbu .b3 .s4{
	font-size: 30px;
	float: left;
	width: 130px;
	
}
.wrap .dingbu .b4{
line-height: 40px;
}

.wrap .product-list{
	width: 100%;
	height: 600px;
}
  .wrap .product-list .product{
	width: 19.7%;
	height: 300px;
	float: left;
}
.wrap .product-list .product .product-title{
	width: 220px;
	height: 60px;
	text-align: center;
}
.wrap .product-list .product .product-title .s7{
	line-height: 60px;
	font-size: 15px;
}

.wrap .product-list .product .price{
	width: 395px;
	height: 30px;
}
.wrap .product-list .product .price .jg1{
	height: 100%;
	background-color: #FF0000;
	float: left;
	width: 50%px;
	text-align: center;
}
.wrap .product-list .product .price .jg1 .s2{
	line-height: 30px;
	font-size: 15px;
	color: white;
}
.wrap .product-list .product .price .jg2{
	border: 1px solid red;
	height: 100%;
	width: 50%;
	text-align: center;
}
.wrap .product-list .product .price .jg2 .s3{
	line-height: 30px;
	font-size: 15px;
}
</style>