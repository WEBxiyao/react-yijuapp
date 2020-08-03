const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://ceshi3.dishait.cn/api',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "/"
    }
  }))
}