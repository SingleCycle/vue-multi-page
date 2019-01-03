var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV != 'dev'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: process.env.NODE_ENV === 'dev' ?
      config.dev.cssSourceMap : config.build.productionSourceMap,
    extract: isProduction,
  }),
  postcss: [
    require('autoprefixer')({
      browsers: ['last 10 versions', '>1%'],
    }),
  ],
}