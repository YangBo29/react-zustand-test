const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const webpack = require('webpack');
// 克隆不需要编译文件
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 自定义文件引用路径
const alias = require('./alias');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]_[contenthash:4].js',
        chunkFilename: '[name]_[contenthash:4].js',
        asyncChunks: true,
        clean: true,
        // publicPath: './',
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
                generator: {
                    filename: 'static/[name]_[hash:4][ext]',
                },
            },
            {
                test: /\.(otf|eot|woff2?|ttf)$/i,
                type: 'asset',
                generator: {
                    filename: 'static/[name]_[hash:4][ext]',
                },
            },
            {
                test: /\.(txt|xml)$/i,
                type: 'asset/source',
                generator: {
                    filename: 'static/[name]_[hash:4][ext]',
                },
            },
        ],
    },
    // 三方插件
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/pages/document.ejs'),
            filename: 'index.html',
            publicPath: '/',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../public'),
                    to: path.resolve(__dirname, '../dist/public'),
                },
            ],
        }),
        new WebpackBar({
            color: '#abc520', // 默认green，进度条颜色支持HEX
            basic: true, // 默认true，启用一个简单的日志报告器
            profile: true, // 默认false，启用探查器。
        }),
        // webpack5 放弃自动引入node模块，如果想使用node环境变量，需要自己引入
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    // 自定义路径别名
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.vue'], // 省略文件后缀
        alias,
    },
    // 防止将外部资源包打包到自己的bundle中
    externals: {},
};
