var fs = require('fs')
var webpack = require('webpack')

var ExtractTextPlugin = require('extract-text-webpack-plugin')
var cssLoader = ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')

var contentBase = __dirname + '/public'
var pkg = require('./package.json')
var vendor = Object.keys(pkg.dependencies)

var options = {
  entry: {
    app: ['./app.js', './css/index.css'],
    vendor: vendor,
  },

  output: {
    path: contentBase + '/assets',
    filename: 'app.js',
    contentBase: contentBase,
  },

  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue'},
      {test: /\.css$/, loader: cssLoader},
    ]
  },

  plugins: [
      new ExtractTextPlugin('app.css', {disable: false}),
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
  ],

  vue: {
    loaders: {
      css: cssLoader,
    }
  },

  postcss: function (pack) {
    // use webpack context
    return [
      require('postcss-import')({addDependencyTo: pack}),
      require('postcss-custom-properties')({variables: require('./variables')}),
      require('autoprefixer'),
    ]
  },

  devtool: 'source-map',
}

if (process.env.NODE_ENV === 'production') {
  var defplugin = new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  })
  var minplugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
  options.plugins.push(defplugin)
  options.plugins.push(minplugin)
  options.plugins.push(new webpack.optimize.OccurenceOrderPlugin())
}

module.exports = options
