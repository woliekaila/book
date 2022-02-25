<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>
        注册新用户
        <span class="go"
          >我有账号，去 <a href="#" target="_blank">登陆</a>
        </span>
      </h3>
      <div class="content">
        <label>用户名:</label>
        <input type="text" placeholder="请输入你的用户名" v-model="userName" />
        <span class="error-msg">错误提示信息</span>
      </div>
      <div class="content">
        <label>登录密码:</label>
        <input
          type="text"
          placeholder="请输入你的登录密码"
          v-model="password"
        />
        <span class="error-msg">错误提示信息</span>
      </div>
      <div class="content">
        <label>确认密码:</label>
        <input type="text" placeholder="请输入确认密码" v-model="password2" />
        <span class="error-msg">错误提示信息</span>
      </div>
      <div class="controls">
        <input name="m1" type="checkbox" v-model="isChecked" />
        <span>同意协议并注册《用户协议》</span>
        <span class="error-msg">错误提示信息</span>
      </div>
      <div class="btn">
        <button @click="userRegister">完成注册</button>
      </div>
    </div>
    >
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      // 用户名
      userName: "",
      // 密码
      password: "",
      // 确认密码
      password2: "",
      isChecked: true,
    };
  },
  methods: {
    // 用户注册
    userRegister() {
      // 以下两个参数是用户登陆以及注册所需参数,分别代表:轻奢云用户id和轻奢云用户设备唯一标识
      let appId = 391;
      let device = "3d3b2e5b6f731bd1";
      // 获取用户输入信息
      let { userName, password, password2 } = this;
      if (userName && password && password2) {
        // 派发action发送请求进行用户注册
        this.$store.dispatch("userRegister", {
          user: userName,
          password,
          appId,
          device,
        }).then(res =>{//请求失败
          if(res.data.code === 200){//注册成功
            // alert(res.data.msg)
            this.$router.push({name: 'login'})
          }else{//注册失败
            alert(res.data.msg)
          }
        }).catch(err =>{//请求成功
          alert(err)
        })
      }
    },
  },
};
</script>

<style scoped>
.register-container .register {
  width: 1200px;
  height: 445px;
  border: 1px solid #dfdfdf;
  margin: 0 auto;
}
.register-container .register h3 {
  background: #ececec;
  margin: 0;
  padding: 6px 15px;
  color: #333;
  border-bottom: 1px solid #dfdfdf;
  font-size: 20.04px;
  line-height: 30.06px;
}
.register-container .register h3 span {
  font-size: 14px;
  float: right;
}
.register-container .register h3 span a {
  color: #e1251b;
}
.register-container .register div:nth-of-type(1) {
  margin-top: 40px;
}
.register-container .register .content {
  padding-left: 390px;
  margin-bottom: 18px;
  position: relative;
}
.register-container .register .content label {
  font-size: 14px;
  width: 96px;
  text-align: right;
  display: inline-block;
}
.register-container .register .content input {
  width: 270px;
  height: 38px;
  padding-left: 8px;
  box-sizing: border-box;
  margin-left: 5px;
  outline: none;
  border: 1px solid #999;
}
.register-container .register .content img {
  vertical-align: sub;
}
.register-container .register .content .error-msg {
  position: absolute;
  top: 100%;
  left: 495px;
  color: red;
}
.register-container .register .controls {
  text-align: center;
  position: relative;
}
.register-container .register .controls input {
  vertical-align: middle;
}
.register-container .register .controls .error-msg {
  position: absolute;
  top: 100%;
  left: 495px;
  color: red;
}
.register-container .register .btn {
  text-align: center;
  line-height: 36px;
  margin: 17px 0 0 55px;
}
.register-container .register .btn button {
  outline: none;
  width: 270px;
  height: 36px;
  background: #e1251b;
  color: #fff !important;
  display: inline-block;
  font-size: 16px;
}
</style>