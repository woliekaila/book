import axios from 'axios'
import nprogress from 'nprogress';
const instance2 = axios.create({
  baseURL: '/info',
  timeout: 5000
})

instance2.interceptors.request.use((data) =>{
  // 进度条开始
  nprogress.start();
  return data;
},(err) =>{
  return Promise.reject(err)
})

instance2.interceptors.response.use((data) =>{
  // 进度条结束
  nprogress.done();
  return data;
},(err) =>{
  return Promise.reject(err)
})

export default instance2