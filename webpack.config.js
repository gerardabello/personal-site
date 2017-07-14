const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: './src/index.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,

      compress: {
        warnings: false,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true
      },

      sourceMap: true
    })
  ],
  output: {
    library: ['bundle'],
    libraryTarget: 'var',
    publicPath: '/',
    filename: '[name].js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    quiet: false,
    noInfo: false,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    publicPath: '/',
    // headers: { "X-Custom-Header": "yes" },
    stats: {
      colors: true
    }
  }
}
