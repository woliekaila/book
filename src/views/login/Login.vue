<template>
  <div class="login-container">
    <!-- 登录 -->
    <div class="login-wrap">
      <div class="login">
        <div class="loginform">
          <ul class="tab clearFix">
            <li>
              <a href="##" style="border-right: 0;">扫描登录</a>
            </li>
            <li>
              <a href="##" class="current">账户登录</a>
            </li>
          </ul>
          <div class="content">
            <form>
              <div class="input-text clearFix">
                <span></span>
                <input type="text" placeholder="用户名" v-model="userName">
              </div>
              <div class="input-text clearFix">
                <span class="pwd"></span>
                <input type="password" placeholder="请输入密码" v-model="password">
              </div>
              <div class="setting clearFix">
                <label class="checkbox inline">
                  <input name="m1" type="checkbox" value="2" v-model="isChecked">
                  自动登录
                </label>
                <span class="forget">忘记密码？</span>
              </div>
              <button class="btn" @click.prevent="userLogin">登&nbsp;&nbsp;录</button>
            </form>

            <div class="call clearFix">
              <ul>
                <li><img src="./images/qq.png" alt=""></li>
                <li><img src="./images/sina.png" alt=""></li>
                <li><img src="./images/ali.png" alt=""></li>
                <li><img src="./images/weixin.png" alt=""></li>
              </ul>
              <router-link class="register" to="/register">立即注册</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引用处理cookie的库
import Cookies from 'js-cookie'
export default {
  name: 'login',
  data() {
    return {
      userName: '',
      password: '',
      isChecked: true
    }
  },
  methods: {
    // 用户登录
    userLogin(){
      // 以下两个参数是用户登陆以及注册所需参数,分别代表:轻奢云用户id和轻奢云用户设备唯一标识
      let appId = 391;
      let device = "3d3b2e5b6f731bd1";
      // 获取用户输入信息
      let { userName, password} = this;
      if(userName && password){
        this.$store.dispatch('userLogin',{
          user: userName,
          password,
          appId,
          device,
        }).then(res =>{
          if(res.data.code == 200){
            alert(res.data.result)
            this.$router.push({name: 'home'})
          }else{
            alert(res.data.msg)
          }
        }).catch(err =>{
          alert(err)
        })
      }
    }
  }
}
</script>

<style scoped>
  .login-container .login-wrap {
  height: 487px;
  background-color: #e93854;
}
.login-container .login-wrap .login {
  width: 1200px;
  height: 487px;
  margin: 0 auto;
  background: url(https://static.winxuancdn.com/frontstatic/pc/dist/img/login_bg.png) no-repeat;
}
.login-container .login-wrap .loginform {
  width: 420px;
  height: 406px;
  box-sizing: border-box;
  background: #fff;
  float: right;
  top: 45px;
  position: relative;
  padding: 20px;
}
.login-container .login-wrap .loginform .tab li {
  width: 50%;
  float: left;
  text-align: center;
}
.login-container .login-wrap .loginform .tab li a {
  width: 100%;
  display: block;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-weight: 700;
  color: #333;
  border: 1px solid #ddd;
  box-sizing: border-box;
  text-decoration: none;
}
.login-container .login-wrap .loginform .tab li .current {
  border-bottom: none;
  border-top-color: #28a3ef;
  color: #e1251b;
}
.login-container .login-wrap .loginform .content {
  width: 380px;
  height: 316px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-top: none;
  padding: 18px;
}
.login-container .login-wrap .loginform .content form {
  margin: 15px 0 18px 0;
  font-size: 12px;
  line-height: 18px;
}
.login-container .login-wrap .loginform .content form .input-text {
  margin-bottom: 16px;
}
.login-container .login-wrap .loginform .content form .input-text span {
  float: left;
  width: 37px;
  height: 32px;
  border: 1px solid #ccc;
  /* background: url(../../assets/images/icons.png) no-repeat -10px -201px; */
  box-sizing: border-box;
  border-radius: 2px 0 0 2px;
}
.login-container .login-wrap .loginform .content form .input-text .pwd {
  background-position: -72px -201px;
}
.login-container .login-wrap .loginform .content form .input-text input {
  width: 302px;
  height: 32px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-left: none;
  float: left;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 14px;
  line-height: 22px;
  padding-right: 8px;
  padding-left: 8px;
  border-radius: 0 2px 2px 0;
  outline: none;
}
.login-container .login-wrap .loginform .content form .setting label {
  float: left;
}
.login-container .login-wrap .loginform .content form .setting .forget {
  float: right;
}
.login-container .login-wrap .loginform .content form .btn {
  background-color: #e1251b;
  padding: 6px;
  border-radius: 0;
  font-size: 16px;
  font-family: 微软雅黑;
  word-spacing: 4px;
  border: 1px solid #e1251b;
  color: #fff;
  width: 100%;
  height: 36px;
  margin-top: 25px;
  outline: none;
}
.login-container .login-wrap .loginform .content .call {
  margin-top: 30px;
}
.login-container .login-wrap .loginform .content .call ul {
  float: left;
}
.login-container .login-wrap .loginform .content .call ul li {
  float: left;
  margin-right: 5px;
}
.login-container .login-wrap .loginform .content .call .register {
  float: right;
  font-size: 15px;
  line-height: 38px;
}
.login-container .login-wrap .loginform .content .call .register:hover {
  color: #4cb9fc;
  text-decoration: underline;
}

</style>