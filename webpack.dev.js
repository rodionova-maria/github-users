const { merge } = require('webpack-merge')
const webpackConfig = require('./webpack.config')

module.exports = merge(webpackConfig, {
  mode: 'development',
  entry: './src/index.tsx',
  devServer: {
    compress: true,
    public: 'github-users-u18z.onrender.com',
    historyApiFallback: true
  }
})
