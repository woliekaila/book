import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false
// 引入swiper样式
import 'swiper/css/swiper.css'
// 引入mock数据
import '@/mock/mockServe.js'

new Vue({
  router,
  store,
  render: h => h(App),
  
}).$mount('#app')
