const path = require('path');

module.exports = {
  entry: './src/index.js',
  // START:loader
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.js?/,
        use: 'babel-loader',
      },
    ],
  },
  //  END:loader
  output: {
    filename: 'build/bundle.js',
    path: path.resolve(__dirname),
  },
};
