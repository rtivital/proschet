const path = require('path');

module.exports = {
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, './lib'),
    filename: 'index.js',
    publicPath: '/',
    libraryTarget: 'umd',
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/,
    }],
  },
};
