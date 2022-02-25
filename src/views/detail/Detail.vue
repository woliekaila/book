<template>
  <div class="detail">
    <!-- 主要内容区域 -->
    <section class="con">
      <!-- 主要内容区域 -->
      <div class="mainCon">
        <!-- 左侧放大镜区域 -->
        <div class="previewWrap">
          <!--放大镜效果-->
          <Glass :bookInfo="bookInfo"/>
          <!-- 小图列表 -->
          <!-- <ImageList /> -->
        </div>
        <!-- 右侧选择区域布局 -->
        <div class="InfoWrap">
          <div class="goodsDetail">
            <h3 class="InfoName">{{bookInfo.name}}</h3>
            <p class="news">推荐选择下方[移动优惠购],手机套餐齐搞定,不用换号,每月还有花费返</p>
            <div class="priceArea">
              <div class="priceArea1">
                <div class="title">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</div>
                <div class="price">
                  <i>¥</i>
                  <em>{{bookInfo.price}}</em>
                  <span>降价通知</span>
                </div>
                <div class="remark">
                  <i>累计评价</i>
                  <em>65545</em>
                </div>
              </div>
              <div class="priceArea2">
                <div class="title">
                  <i>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</i>
                </div>
                <div class="fixWidth">
                  <i class="red-bg">加价购</i>
                  <em class="t-gray">满68.00另加20.00元，或满128.00另加30.00元，或满158.00另加40.00元，即可在购物车换购热销商品</em>
                </div>
              </div>
            </div>
            <div class="support">
              <div class="supportArea">
                <div class="title">作&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;者</div>
                <div class="fixWidth">{{bookInfo.autor}}</div>
              </div>
              <div class="supportArea">
                <div class="title">出 版 社</div>
                <div class="fixWidth">{{bookInfo.press}}</div>
              </div>
              <div class="supportArea">
                <div class="title">发 售 日 期</div>
                <div class="fixWidth">{{bookInfo.publishDate}}</div>
              </div>
            </div>
          </div>

          <div class="choose">
            <div class="cartWrap">
              <div class="controls">
                <input autocomplete="off" class="itxt" v-model="skuNum" @change="changeNum('change',$event.target.value*1)">
                <a href="javascript:" class="plus" @click="changeNum('increment',1)">+</a>
                <a href="javascript:" class="mins" @click="changeNum('decrement',-1)">-</a>
              </div>
              <div class="add">
                <a href="javascript:" @click="addShopCart">加入购物车</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 商品描述 -->
    <div class="all-box">
      <div class="box clearfix">
        <div class="public">作者简介</div>
        <div class="content">
          asdasdasdasdadasdasd
        </div>
      </div>

      <div class="box clearfix">
        <div class="public">主编推荐</div>
        <div class="content">
          主编推荐主编推荐主编推荐主编推荐主编推荐主编推荐主编推荐主编推荐主编推荐主编推荐主编推荐
        </div>
      </div>

      <div class="box clearfix">
        <div class="public">价格说明</div>
        <div class="content">
          定价：为出版社全国统一定价；<br />
          文轩价：为商品的销售价，是您最终决定是否购买商品的依据；受系统缓存影响，最终价格以商品放入购物车后显示的价格为准；
        </div>
      </div>

      <div class="box clearfix">
        <div class="public">新广告法声明</div>
        <div class="content">
          新广告法规定所有页面信息中不得出现绝对化用词和功能性用词。<br />
          本店非常支持新广告法，但为了不影响消费者正常购买，页面明显区域本店已在排查修改，对于不明显区域也将会逐步排查并修改，我们此郑重声明：本店所有页面上的绝对化用词与功能性用词在此声明全部失效，不作为赔付理由。涉及“教育部声明”中的商品，均不代表教育部指定、推荐的具体版本，仅代表该商品的内容为指定、推荐书目。因极限用词引起的任何形式的商品赔付，本店不接收且不妥协。希望消费者理解并欢迎联系客服帮助完善，也请职业打假人士高抬贵手。
        </div>
      </div>
    </div>

	</div>
</template>

<script>
import Glass from './glass/Glass.vue'
import {reqAddShopCart} from '@/network/api'
export default {
  name: 'detail',
  data() {
    return {
      // 产品数量
      skuNum: 1
    }
  },
  components: {
    Glass
  },
  computed: {
    bookInfo(){
      return JSON.parse(sessionStorage.getItem('BOOKINFO'))
    }
  },
  methods: {
    // 修改购买商品数量
    changeNum(type,num){
      let {skuNum} = this
      // type: 修改商品数量的类型,num修改的数量
      
      if(type == 'increment'){ //代表点击的是 按钮+
        this.skuNum+=num
      }

      if(type == 'decrement'&& skuNum>1){//代表点击的是 按钮-
        this.skuNum+= num
      }

      if(type == 'change'){ //代表直接修改input中的值
        this.skuNum = (isNaN(num) || num<1) ? 1 : parseInt(num)
        /* if(isNaN(num) || num<1){
          this.skuNum = 1
        }else{
          this.skuNum = parseInt(num)
        } */
      }
    },
    // 添加至购物车
    async addShopCart(){
      let result = await reqAddShopCart(this.bookInfo)
      // console.log(result)
      if(result.status>=200 && result.status<300){
        alert('添加到购物车成功！')
        this.$router.push({name:'shopcart'})
      }else{
        return Promise.reject(new Error('添加失败'))
      }
    }
  }
}
</script>

<style scoped>
  .detail .con {
  width: 1200px;
  margin: 15px auto 0;
}
.detail .con .conPoin {
  padding: 9px 15px 9px 0;
}
.detail .con .conPoin > span + span:before {
  content: "/\00a0";
  padding: 0 5px;
  color: #ccc;
}
.detail .con .mainCon {
  overflow: hidden;
  margin: 5px 0 15px;
}
.detail .con .mainCon .previewWrap {
  float: left;
  width: 400px;
  position: relative;
}
.detail .con .mainCon .InfoWrap {
  width: 700px;
  float: right;
}
.detail .con .mainCon .InfoWrap .InfoName {
  font-size: 14px;
  line-height: 21px;
  margin-top: 15px;
}
.detail .con .mainCon .InfoWrap .news {
  color: #e12228;
  margin-top: 15px;
}
.detail .con .mainCon .InfoWrap .priceArea {
  background: #fee9eb;
  padding: 7px;
  margin: 13px 0;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea1 {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea1 .title {
  float: left;
  margin-right: 15px;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea1 .price {
  float: left;
  color: #c81623;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea1 .price i {
  font-size: 16px;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea1 .price em {
  font-size: 24px;
  font-weight: 700;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea1 .price span {
  font-size: 12px;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea1 .remark {
  float: right;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea2 {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea2 .title {
  margin-right: 15px;
  float: left;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea2 .fixWidth {
  width: 520px;
  float: left;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea2 .fixWidth .red-bg {
  background: #c81623;
  color: #fff;
  padding: 3px;
}
.detail .con .mainCon .InfoWrap .priceArea .priceArea2 .fixWidth .t-gray {
  color: #999;
}
.detail .con .mainCon .InfoWrap .support {
  border-bottom: 1px solid #ededed;
  padding-bottom: 5px;
}
.detail .con .mainCon .InfoWrap .support .supportArea {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.detail .con .mainCon .InfoWrap .support .supportArea .title {
  margin-right: 15px;
  float: left;
}
.detail .con .mainCon .InfoWrap .support .supportArea .fixWidth {
  width: 520px;
  float: left;
  color: #999;
}
.detail .con .mainCon .InfoWrap .choose .cartWrap .controls {
  width: 48px;
  position: relative;
  float: left;
  margin-right: 15px;
}
.detail .con .mainCon .InfoWrap .choose .cartWrap .controls .itxt {
  width: 38px;
  height: 37px;
  border: 1px solid #ddd;
  color: #555;
  float: left;
  border-right: 0;
  text-align: center;
}
.detail .con .mainCon .InfoWrap .choose .cartWrap .controls .plus,
.detail .con .mainCon .InfoWrap .choose .cartWrap .controls .mins {
  width: 15px;
  text-align: center;
  height: 17px;
  line-height: 17px;
  background: #f1f1f1;
  color: #666;
  position: absolute;
  right: -8px;
  border: 1px solid #ccc;
}
.detail .con .mainCon .InfoWrap .choose .cartWrap .controls .mins {
  right: -8px;
  top: 19px;
  border-top: 0;
}
.detail .con .mainCon .InfoWrap .choose .cartWrap .controls .plus {
  right: -8px;
}
.detail .con .mainCon .InfoWrap .choose .cartWrap .add {
  float: left;
}
.detail .con .mainCon .InfoWrap .choose .cartWrap .add a {
  background-color: #e1251b;
  padding: 0 25px;
  font-size: 16px;
  color: #fff;
  height: 36px;
  line-height: 36px;
  display: block;
}

.detail .all-box{
  width: 1200px;
  margin: 0 auto;
}
.detail .box{
  margin: 20px 0;
}
.public{
  width: 100px;
  height: 39px;
  line-height: 39px;
  border: 1px #ddd solid;
  border-top: 2px red solid;
  font-size: 14px;
  text-align: center;
  color: #000;
}
.content{
  padding: 20px 30px;
  border: 1px #ddd solid;
  font-size: 13px;
}
</style>