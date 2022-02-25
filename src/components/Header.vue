<template>
  <!-- 顶部导航条 -->
  <div>
    <div class="top-bar">
      <div class="wrap">
        <ul class="list">
          <li>
            <a href="javascript:;">欢迎光临本书店！</a>
          </li>
          <div v-if="token">
            <li>
              <a href="javascipt:;">{{userMsg.name}}</a>
            </li>
            <li>
              <a href="javascipt:;">{{userMsg.userGroup}}</a>
            </li>
          </div>
          <div v-else>
            <li>
              <router-link to="/login">请登录</router-link>
            </li>
            <li>
              <router-link to="/register">免费注册</router-link>
            </li>
          </div>
          
        </ul>
        <div class="left">
          <ul class="list list-right">
            <li>
              <a href="#">
                我的书城
                <span class="fas fa-angle-down"></span>
              </a>
              <div class="hideList">
                <p>
                  <a href="#">我的订单</a>
                </p>
                <p>
                  <a href="#">售后退款</a>
                </p>
                <p>
                  <a href="#">暂存条</a>
                </p>
              </div>
            </li>
            <li>
              <a href="#">企业采购 </a>
            </li>
            <li>
              <a href="#">
                客户服务
                <span class="fas fa-angle-down"></span>
                <div class="hideList">
                  <p>
                    <a href="#">在线客服</a>
                  </p>
                  <p>
                    <a href="#">帮助中心</a>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                手机书店
                <span class="fas fa-angle-down"></span>
              </a>
            </li>
            <li>
              <router-link to="/home">返回首页</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="wrap" v-show="$route.path!='/login'">
      <div class="pro-nav">
        <ul>
          <li>
            <a href="#">作品分类</a>
          </li>
          <li>
            <a href="#">新书榜</a>
          </li>
          <li>
            <a href="#">社科榜</a>
          </li>
          <li>
            <a href="#">文学榜</a>
          </li>
          <li>
            <a href="#">音像</a>
          </li>
          <li>
            <a href="#">电子书</a>
          </li>
          <li>
            <a href="#">国际频道</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 处理Cookie的模块
import Cookies from 'js-cookie'
import { mapState } from 'vuex';
export default {
  name: "Header",
  data(){
    return {token:''}
  },
  mounted(){
    // 服务器发请求获取用户数据
    this.$store.dispatch('getUserInfo',{
      appId: 391,
      user: '147258369'
    })
    this.token = Cookies.get('token')
  },
  computed: {
    ...mapState({
      userMsg: (state) =>{
        return state.home.user
      }
    })
  }
};
</script>

<style scoped>
/* 顶部导航 */
.top-bar {
  width: 100%;
  height: 30px;
  background-color: #f7f7f7;
}
.list li {
  line-height: 30px;
  color: #878787;
  float: left;
  margin: 0 15px;
}
.list li a {
  color: #878787;
}
.list li a:hover {
  color: #878787;
}
.left {
  width: 400px;
  height: 30px;
  float: right;
}
.list-right {
  display: flex;
}
.list-right > li {
  margin: 0;
  flex-grow: 1;
  text-align: center;
}
.list-right > li a {
  display: block;
}
.list-right > li > a:hover,
.list-right > li:hover div {
  position: relative;
  display: block;
  color: red;
  background-color: #fff;
  z-index: 9999;
}
.hideList {
  display: none;
  background-color: #fff;
}
.logo {
  width: 150px;
  height: 100px;
}

/* 分类导航条 */
.pro-nav{
  background-color: rgb(221, 44, 44);
  width: 100%;
  height: 40px;
}

.pro-nav li{
  line-height: 40px;
  float: left;
}
.pro-nav li a{
  font-size: 13px;
  display: block;
  padding: 0 30px;
  color: rgb(240, 233, 233);
}
.pro-nav li:nth-child(1){
  padding: 0 50px;
  background-color: rgb(175, 15, 15);
}
.pro-nav li:nth-child(1) a{
  font-size: 14px;
}
.pro-nav li a:hover{
  font-size: 14px;
  background-color: rgb(175, 15, 15);
}
</style>