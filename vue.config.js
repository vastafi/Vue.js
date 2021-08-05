module.exports = {
  transpileDependencies: [
    'vuetify'
  ]
}
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:9000/categories',
        pathRewrite:{
          '^/api': ''
        },
        ws: true,
        changeOrigin: true
      },
    }
  }
}
