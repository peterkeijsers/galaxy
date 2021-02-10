var path = require('path');

module.exports = {
    devServer: {
        contentBase: './dist',
        port: 9000
    },
    devtool: 'source-map',
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};