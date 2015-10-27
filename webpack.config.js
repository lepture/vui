var webpack = require("webpack");
var vue = require("vue-loader");
var cssLoader = "style-loader!css-loader?sourceMap!postcss-loader";

var publicPath = "/build/";

module.exports = {
  entry: {
    app: ["./index.js"],
    vendor: ["vue", "vue-router"],
  },

  output: {
    path: __dirname + publicPath,
    filename: 'app.js',
    publicPath: publicPath,
  },

  module: {
    loaders: [
      {test: /\.vue$/, loader: vue.withLoaders({css: cssLoader})},
      {test: /\.css$/, loader: cssLoader},
    ]
  },

  plugins: [
      new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
  ],

  postcss: function () {
    // use webpack context
    var postcssImport = require('postcss-import');

    return [
      postcssImport({
        onImport: function (files) {
          files.forEach(this.addDependency);
        }.bind(this)
      }),

      require('postcss-custom-properties'),
    ]
  },

  devtool: "source-map",
};
