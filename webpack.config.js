var fs = require('fs');
var path = require('path');
var defaults = require('lodash/defaults');
var argv = require('yargs').argv;
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var options = {
  publicPath: '/assets/',
  path: __dirname + '/web/assets',
  statsPath: __dirname + '/web/stats.json',
  chunkPrefix: '[name].'
};

if (argv) {
  options = defaults(argv, options);
}

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: {
    spa: './apps/spa/index'
  },

  output: {
    path: options.path,
    filename: options.chunkPrefix + 'bundle.js',
    publicPath: options.publicPath
  },

  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.json'],
    modulesDirectories: ['node_modules', 'src/modules', 'src/apps/sh/']
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin(options.chunkPrefix + 'styles.css'),
    function() {
      this.plugin('done', function(stats) {
        fs.writeFileSync(
          options.statsPath,
          JSON.stringify({
            entries: stats.toJson().assetsByChunkName
          }, null, 2)
        );
      });
    }
  ],

  module: {
    loaders: [
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css-loader?sourceMap!less-loader?sourceMap')
        //loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader!less-loader?sourceMap')
      },
      {
        test: /\.(eot|png|jpg|svg|woff|woff2|ttf|gif)(\?.*)?$/,
        loader: 'file'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory'
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
