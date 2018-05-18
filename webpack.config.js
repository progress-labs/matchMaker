const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');
const libName = 'matchMaker'
const libTarget = 'umd';


module.exports = {
  entry: {
    'matchMaker': './src/index.js',
    'matchMaker.min': './src/index.js'
  },
  devtool: "source-map",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: libTarget,
    library: libName,
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};