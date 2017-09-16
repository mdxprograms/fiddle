const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'main.js'),
  output: {
    path: path.resolve(__dirname), // eslint-disable-line
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'main.js') // eslint-disable-line
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css',
          'postcss'
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'sass'
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loaders: [
          'url'
        ]
      }
    ]
  }
}
