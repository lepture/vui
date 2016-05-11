var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var cssLoader = 'vue-style!css?sourceMap!postcss'

var contentBase = __dirname + '/public'
var pkg = require('./package.json')

var options = {
  entry: {
    app: [
      './app.js',
      './src/css/index.css'
    ],
  },

  output: {
    path: contentBase + '/assets',
    filename: 'app.js',
  },

  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue'},
      {test: /\.css$/, loader: cssLoader},
    ]
  },

  vue: {
    loaders: {
      css: cssLoader,
    }
  },

  postcss: function (pack) {
    // use webpack context
    return [
      require('postcss-import')({path: './src/css', addDependencyTo: pack}),
      require('postcss-css-variables'),
      require('autoprefixer'),
    ]
  },

  devServer: {
    contentBase: contentBase + '/_site',
    publicPath: '/assets/',
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
