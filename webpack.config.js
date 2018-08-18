const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/app.jsx'),
  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/',
    filename: 'mendelBundle.js',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      }
    ]
  }
};
