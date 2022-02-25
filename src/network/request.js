import axios from 'axios'
import nprogress from 'nprogress';
const instance = axios.create({
  baseURL: '/api',
  timeout: 5000
})

instance.interceptors.request.use((data) =>{
  // 进度条开始
  nprogress.start();
  return data;
},(err) =>{
  return Promise.reject(err)
})

instance.interceptors.response.use((data) =>{
  // 进度条结束
  nprogress.done();
  return data;
},(err) =>{
  return Promise.reject(err)
})

export default instance