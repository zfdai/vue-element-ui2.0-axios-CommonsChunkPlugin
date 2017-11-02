'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')

var env = process.env.NODE_ENV
var env_auto;
switch(env){
  case 'development':
    env_auto = 'dev';
  break;
  case 'production' :
    env_auto = 'prod';
  break;
  case 'test' :
    env_auto = 'test';
  break;
  default :break;
}
console.log('global_config_file url:',process.env.NODE_ENV)
const global_config_file = '../src/config/global_' + env_auto + '.js'
console.log('global_config_file url:',global_config_file)

// 解决ie下不支持axios的promise
require("babel-polyfill");
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    elementUi:"element-ui",
    vue:"vue",
    axios:"axios",
    vueRouter:"vue-router",
    vuex:"vuex",
    // app: './src/main.js'
    app: ['babel-polyfill','./src/main.js'],

  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : (process.env.NODE_ENV === 'test'?config.test.assetsPublicPath:config.dev.assetsPublicPath)
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'globalConfig':path.resolve(__dirname, global_config_file),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
