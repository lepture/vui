var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var cssLoader = 'vue-style!css?sourceMap!postcss'
if (process.env.NODE_ENV === 'production') {
  cssLoader = ExtractTextPlugin.extract('vue-style', 'css?-reduceTransforms!postcss')
}

var contentBase = __dirname + '/public'
var pkg = require('./package.json')

var plugins = [new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
  }
})]


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
    host: '0.0.0.0',
  },

  plugins: plugins,

  devtool: 'source-map',
}

if (process.env.NODE_ENV === 'production') {
  options.entry.vendor = Object.keys(pkg.dependencies)
  plugins.push(new ExtractTextPlugin('app.css', {disable: false}))
  plugins.push(new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"))
  plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}))
  plugins.push(new webpack.optimize.OccurenceOrderPlugin())
  options.plugins = plugins
}

module.exports = options
