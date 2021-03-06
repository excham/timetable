var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public/js/');
var APP_DIR = path.resolve(__dirname, 'src/client/app/');

var config = {
  entry: APP_DIR + '/main.js',
  output: {
    path: BUILD_DIR,
    filename: '/bundle.js'
  }
};

module.exports = config;
