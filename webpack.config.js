const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
    library: 'todoLib',
  },
  optimization: {
    // We no not want to minimize our code.
    //minimize: false
  },
};