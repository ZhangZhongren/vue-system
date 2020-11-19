// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  configureWebpack: config => {
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
    [
      generateAssetAppConfig(),
      new webpack.DllReferencePlugin({
        context: path.resolve(__dirname, './'),
        manifest: require('./build/dll/vendor.manifest.json')
      }),
      new webpack.ContextReplacementPlugin(
        /moment[\\\/]locale$/,
        /^\.\/(zh-cn)$/
      ),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, './static'),
          to: './static',
          ignore: ['.*']
        }
      ]),
    ]
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('assets', resolve('./src/assets'))
      .set('com', resolve('./src/components'))
      .set('views', resolve('./src/views'))
      .set('@style', resolve('./src/style'))
      .set('@libs', resolve('./src/libs'))

    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
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
