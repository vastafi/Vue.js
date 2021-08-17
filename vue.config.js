module.exports = {
  transpileDependencies: [
    'vuetify'
  ]
}
module.exports = {
  devServer: {
    proxy: {
      '^/api/categories': {
        target: 'http://localhost:9000/categories',
        pathRewrite:{
          '^/api/categories': ''
        },
        ws: true,
        changeOrigin: true
      },
      '^/api/products': {
        target: 'http://localhost:9000/page',
        pathRewrite: {
          '^/api/products': ''
        },
        ws: true,
        changeOrigin: true,
      },
      '^/api/suggestions': {
        target: 'https://999.md/suggestions',
        pathRewrite: {
          '^/api/suggestions': ''
        },
        ws: true,
        changeOrigin: true,
      },
      '^/api/item': {
        target: 'http://localhost:9000/item',
        pathRewrite: {
          '^/api/item': ''
        },
        ws: true,
        changeOrigin: true,
      },
    }
  }
}
