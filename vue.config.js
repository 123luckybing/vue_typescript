module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      //  /api 就是 target的别名，所以调接口的时候，应该在前面加上 /api
      '/api': {
        target: 'https://vuets-api.herokuapp/api/',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    before: app => {}
  },
}

// 只要修改了vue.config.js里面的内容就一定要重新启动服务（ yarn run serve ）～不然不会生效