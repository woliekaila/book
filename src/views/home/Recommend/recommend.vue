<template>
  <div class="wrap">
    <div class="dingbu">
      <div class="b3">
        <span class="s4">每日精选</span>
      </div>
      <div class="b4">
        <img src="//static.winxuancdn.com/cms/assets/images/winxuanhome/index/common-module-2020-title-icon.png">
      </div>
    </div>
    
    <div class="b5 clearfix">
      <div class="b51" v-for="(r) in recommendList" :key="r.id" @click="sendInfo(r)">
        <div class="b52">
          <img :src="r.imgUrl">
        </div>
        <div class="b53">
          <p class="p1">{{r.name}}</p>
          <p class="p2">{{r.autor}}</p>
          <div class="b54">
            <div class="b55">
              <span class="s5">
                ￥{{r.price}}
              </span>
            </div>
            <div class="b56">
              <span class="s6">
                原价：100.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'recommend',
  mounted(){
    this.$store.dispatch('getRecommend')
  },
  computed:{
    ...mapState({
      recommendList: (state) =>{
        return state.home.recommendList
      }
    })
  },
  methods: {
    // 将点击的书籍的信息传递给detail组件
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
  .wrap  .b5{
	width: 100%;
	height: 100%;
  padding-bottom: 10px;
}
.wrap  .b5 .b51{
	width: 20%;
	height: 300px;
	float: left;
	/* margin: 15px 0; */
}

.wrap  .b5 .b51 .p1{
	font-size: 15px;
	font-weight: bold;
}
.wrap  .b5 .b51 .b52{
	width: 100%;
	height: 200px;
	text-align: center;
}
.wrap  .b5 .b51 .b53{
	width: 90%;
	height: 90px;
	/* margin-left: 10px; */
}
.wrap  .b5 .b51 .b53 .b54{
	width: 100%;
	height: 30px;
	margin-top: 10px;
}
.wrap  .b5 .b51 .b53 .b54 .b55{
	height: 100%;
	width: 130px;
	float: left;
}
.wrap  .b5 .b51 .b53 .b54 .b55 .s5{
	font-size: 20px;
	color: red;
}
.wrap  .b5 .b51 .b53 .b54 .b56 .s6{
	line-height: 30px;
}
</style>