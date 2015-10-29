var webpack = require("webpack");
var vue = require("vue-loader");

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var cssLoader = ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!postcss-loader");

var contentBase = __dirname + '/public';

module.exports = {
  entry: {
    app: ["./docs/index.js"],
    vendor: ["vue", "vue-router"],
  },

  output: {
    path: contentBase + '/assets',
    filename: 'app.js',
    contentBase: contentBase,
  },

  module: {
    loaders: [
      {test: /\.vue$/, loader: vue.withLoaders({css: cssLoader})},
      {test: /\.css$/, loader: cssLoader},
    ]
  },

  plugins: [
      new ExtractTextPlugin("app.css", {disable: false}),
      new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
  ],

  postcss: function (pack) {
    // use webpack context
    return [
      require('postcss-import')({addDependencyTo: pack}),
      require('postcss-custom-properties')({variables: require('./variables')}),
      require('autoprefixer'),
    ]
  },

  devtool: "source-map",
};
