const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
      app:[
          'babel-polyfill',
          './src/js/app.js'
      ]
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist'
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test:/\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'stage-0']
                }
            }
                
        },
    ]
  }
};