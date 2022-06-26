const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '黑马头条'
        return args
      })
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            hack: `true;@import "${path.join(__dirname, 'src/styles/theme.less')}"`
          }
        }
      }
    }
  }
})
