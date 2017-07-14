const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
    context: srcPath,
    target: 'web',
    entry: {
        client: `${srcPath}/client/index.js`,
    },
    output: {
        path: distPath,
        filename: '[name].js',
        publicPath: '/assets/',
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['*', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: { compact: false },
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Get real playlists to share with Spotify',
            template: path.resolve(__dirname, 'src/client/index.ejs'),
        }),
    ],
    devtool: 'source-map',
};
