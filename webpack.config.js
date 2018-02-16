const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    polyfills: ['./compile_output/src/polyfills.js'],
    app: ['./compile_output/src/main.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
        include: [path.resolve(__dirname, 'src', 'styles.css')]
      },
      {
        test: /\.(js)$/,
        loaders: [
          'angular-router-loader?aot=true'
        ]
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core/,
      path.resolve(__dirname, './src')
    ),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'manual',
      chunks: ['polyfills', 'app']
    }),
    new ExtractTextPlugin("styles.css"),
    new CopyWebpackPlugin([{
      from: 'src/favicon.ico'
    }])
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    port: 9000,
    open: true,
    quiet: false,
    historyApiFallback: true,
  }
};
