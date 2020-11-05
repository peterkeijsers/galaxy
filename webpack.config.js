var path = require('path');

module.exports = {

    // Dev server config
    devServer: {
        contentBase: './dist',
        port: 9000
    },

    // General webpack config
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },

    // Build config
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader',
            ],
          },
        ],
      },
};