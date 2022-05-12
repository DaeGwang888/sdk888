// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave:false,
// })

module.exports = {
  devServer: { //api 요청 있을 때 어디서 처리할 지 설정
    proxy: 'http://localhost:5000'
  }
};