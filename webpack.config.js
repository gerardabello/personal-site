const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  output: {
    publicPath: '/',
    chunkFilename: '[name]-[chunkhash].js',
    filename: '[hash]-[name]-entry.js'
  },
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|otf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
  devServer: {
    disableHostCheck: true,
    compress: true
  }
}
