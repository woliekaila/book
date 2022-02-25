<template>
  <div class="wrap">
    <div class="box">
      <ul ref="coll">
      <li v-for="(item,index) in collapseList" :key="item.id" @mouseenter="toggleClassOn(index)"
      :class="{on: currentIndex === index}">
        <a href="#">
          <div class="title">{{item.id}}</div>
          <div class="sub">{{item.sub}}</div>
          <div class="go">GO</div>
          <img :src="item.imgUrl"/>
        </a>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "collapse",
  data() {
    return {
      currentIndex: 0
    }
  },
  mounted(){
    // 派发action获取手风琴数据
    this.$store.dispatch('getCollapse')
  },
  computed: {
    ...mapState({
      collapseList: (state) =>{
        return state.home.collapseList
      }
    })
  },
  methods: {
    // 实现手风琴效果
    toggleClassOn(index){
      // console.log(index)
      this.currentIndex = index
    }
  }
};
</script>

<style scoped>
.box{
  width: 100%;
  height: 320px;
  margin-top: 10px;
}
.wrap ul li{
	float: left;
	list-style: none;
	width: 200px;
	height: 300px;
	background-color: pink;
	box-shadow: 3px 2px 30px rgba(0,0,0,1);
	position: relative;
	transition: all 1s; 
}
.wrap ul li img{
	width: 130px;
	height: 170px;
	position: absolute;
	right: 35px;
	bottom: 40px;
	transition: all 1s;
	
}
.wrap .title{
	width: 100%;
	height: 30px;
	text-align: center;
	margin-top: 30px;
	font-size: 16px;
	color: #333;
}
.wrap .sub{
	width: 100%;
	height: 30px;
	text-align: center;
	color: #666;
}
.wrap ul li a{
	text-decoration: none;
}
.wrap ul li .go{
	display: none;
}
.wrap ul .on{
	background:url(./img/bg.png) no-repeat;
	width: 370px;
	padding-left: 20px;
}
.wrap ul .on .title{
	text-align: left;
  color: white;
}
.wrap ul .on .sub{
	text-align: left;
  color: white;
}
.wrap ul .on img{
	 width: 270px;
	 height: 270px;
	 right: 0;
	 bottom: 0;
}
.wrap ul .on .go{
	display: block;
	margin-top: 20px;
	width: 75px;
	height: 34px;
	border: 2px solid #fff;
	border-radius: 19px;
	text-align: center;
line-height: 34px;	
}
</style>