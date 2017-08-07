var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: {

   countSecond: APP_DIR + '/countSecond.jsx',
   countLike: APP_DIR + '/countLike.jsx'
  },

  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },

  module: {

    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: {
          loader: 'babel-loader'
        }
      }
    ]

  }
  
};

module.exports = config;