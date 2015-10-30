
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

config.entry.app.unshift("webpack-dev-server/client?http://localhost:9090", "webpack/hot/dev-server");

config.plugins.push(new webpack.HotModuleReplacementPlugin());

config.devtool = 'eval';

var app = new WebpackDevServer(webpack(config), {
  contentBase: config.output.contentBase + '/_site',
  publicPath: '/assets/',
  historyApiFallback: true,
  hot: true,
});

app.listen(9090, '0.0.0.0', function (err, result) {
  console.log('http://localhost:9090');
  if (err) {
    console.log(err);
  }
});
