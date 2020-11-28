const path = require('path');

module.exports = {
  entry: './src/main/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'src/main/resources/static'),
    library: 'todoLib',
  },
  optimization: {
    // We no not want to minimize our code.
    //minimize: false
  },
};