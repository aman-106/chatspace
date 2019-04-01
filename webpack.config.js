const path = require('path');
// const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
    entry: {
        client: './src/index.js',
    },
    mode:'development',
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: '[name].js',
        publicPath: '/',
    },
    node: {
        fs: 'empty',
        net: 'empty',
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    }

}

