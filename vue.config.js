module.exports = {
  // 关闭eslint
  lintOnSave: false,
  devServer: {
    // 配置代理服务器
    proxy: {
      '/api': {
        target: 'https://sl.hlunn.com',
        // pathRewrite: {'/api': ''} 路径重写
        changeOrgin: true
      },
      '/info': {
        target: 'http://127.0.0.1:3000' 
      }
    }
  }
}