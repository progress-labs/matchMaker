const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');
const libName = 'matchMaker'
const libTarget = 'umd';

module.exports = {
  entry: {
    'matchMaker': ['./src/index.js'],
    'matchMaker.min': ['./src/index.js'],
  },
  devtool: "source-map",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: libTarget,
    library: libName,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              ["env", {
                "targets": {
                  "browsers": ["last 2 versions", "safari >= 7", "ie 11"]
                }
              }]
            ]
          }
        }
      }
    ]
  }
};