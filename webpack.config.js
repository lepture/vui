var webpack = require("webpack");

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var cssLoader = ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!postcss-loader");

var contentBase = __dirname + '/public';

module.exports = {
  entry: {
    app: ["./index.js"],
    vendor: ["vue", "vue-router"],
  },

  output: {
    path: contentBase + '/assets',
    filename: 'vui.js',
    library: 'vui',
    libraryTarget: 'umd',
    contentBase: contentBase,
  },

  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue'},
      {test: /\.css$/, loader: cssLoader},
    ]
  },

  plugins: [
      new ExtractTextPlugin("app.css", {disable: false}),
      new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
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

  devtool: "source-map",
};
