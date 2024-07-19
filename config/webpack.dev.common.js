const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const proxy = require('./proxy.dev.js');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const reactRefresh = require.resolve('react-refresh/babel');
// const { exec } = require('child_process');

const devConfig = merge(common, {
    mode: 'development',
    target: 'web',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name][local]_[hash:base64:4]',
                            },
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['postcss-preset-env'],
                            },
                        },
                    },
                    'less-loader',
                ],
            },
            {
                test: /\.[jt]sx?$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react'],
                            plugins: [reactRefresh],
                            cacheDirectory: true,
                        },
                    },
                    // {
                    //     loader: 'esbuild-loader',
                    //     options: {
                    //         target: 'es2015',
                    //         loader: 'jsx',
                    //     },
                    // },
                ],
            },
            {
                test: /\.[jt]sx?$/,
                enforce: 'pre',
                use: ['source-map-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [new ReactRefreshWebpackPlugin()],
    cache: {
        type: 'filesystem',
        cacheDirectory: path.resolve(__dirname, '../.cache'), // 指定缓存目录
    },
    devServer: {
        // 热更新开启
        hot: true,
        // 编译完自动打开浏览器
        open: true,
        // 解决 BrowserRouter 跳转后刷新也面404问题
        historyApiFallback: true,
        // 开启gzip压缩
        // compress: true,
        // 开启端口号
        // port: 3000,
        //可通过数组的方式托管多个静态资源文件
        static: {
            directory: path.join(__dirname, '../public'),
        },
        // onListening: function (devServer) {
        //     if (!devServer) {
        //         throw new Error('webpack-dev-server is not defined');
        //     }
        //     const port = devServer.server.address().port;
        //     // 调用自定义脚本打开浏览器
        //     exec(`node ./config/open.js ${port}`);
        // },
        // 接口代理
        proxy,
    },
});

module.exports = devConfig;
