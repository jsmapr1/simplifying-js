const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    loaders: [
      {
        test: /\.js?/,
        use: 'babel-loader',
      },
    ],
  },
  output: {
    filename: 'build/bundle.js',
    path: path.resolve(__dirname),
  },
};
