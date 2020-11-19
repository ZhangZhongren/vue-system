// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     config.plugins.push(
  //       new CompressionWebpackPlugin({
  //         filename: '[path].gz[query]',
  //         algorithm: 'gzip',
  //         test: productionGzipExtensions,
  //         threshold: 10240,
  //         minRatio: 0.8
  //       })
  //     )
  //   }
  //   if (process.env.NODE_ENV === 'production') {
  //     config.plugins.push(
  //       new BundleAnalyzerPlugin({
  //         analyzerHost: '127.0.0.1',
  //         analyzerPort: 9099
  //       })
  //     )
  //   }
  // },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('@assets', resolve('./src/assets'))
      .set('@com', resolve('./src/components'))
      .set('@views', resolve('./src/views'))
  },
  devServer: {
    hot: true,
    clientLogLevel: 'warning',
    proxy: {
      '/api': {
        target: 'http://localhost:9999/api',
        changeOrigin: true,
        pathRewrite: {}
      }
    }
  }
}
