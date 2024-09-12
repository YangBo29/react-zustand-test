/**
 * author : yangbo
 * date : 2023/09/21 14:15:32
 * fileName: webpack.prod.common.js
 * description : 生产环境配置
 **/
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
// 打包后文件视图
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// gz 压缩插件
const CompressionPlugin = require('compression-webpack-plugin');
// css 压缩
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// css文件分离
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 代码压缩
const TerserWebpackPlugin = require('terser-webpack-plugin');
// 代码混淆插件
const WebpackObfuscator = require('webpack-obfuscator');
// 循环依赖
const CircularDependencyPlugin = require('circular-dependency-plugin');

const prodConfig = merge(common, {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'vendor',
            // 打包生成的js文件名的分割符，默认为~
            automaticNameDelimiter: '_',
            cacheGroups: {
                common: {
                    name: 'common',
                    test: /[\\/]node_modules[\\/](mathjs|lodash|moment)[\\/]/,
                    priority: -8,
                },
                echarts: {
                    name: 'e',
                    test: /[\\/]node_modules[\\/](echarts|echarts-gl)[\\/]/,
                    priority: -9,
                },
                componentsNode: {
                    name: 'cpn',
                    test: /[\\/]node_modules[\\/](hls.js|flv.js|jquery|ace-builds|ruler|react-ace|react-datepicker|rayslider|html2canvas|spreadsheet|rayecharts)[\\/]/,
                    priority: -10,
                },
                vendors: {
                    name: 'vendors',
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -11,
                    reuseExistingChunk: true,
                },
            },
        },
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin({
                // 关闭生成监听文件
                extractComments: false,
                // 开启多线程压缩
                parallel: true,
                // 过滤文件类型
                test: /\.jsx?$|\.tsx?$/,
                // 压缩过滤条件
                terserOptions: {
                    compress: {
                        drop_console: true /* 过滤console.log */,
                    },
                },
                exclude: ['public'],
            }),
            new CssMinimizerPlugin({
                // 过滤文件类型
                test: /\.css$/g,
                // 开启多线程压缩
                parallel: true,
            }),
        ],
    },
    plugins: [
        new CircularDependencyPlugin({
            // 排除检测的文件或目录
            exclude: /node_modules/,
            // 在控制台显示循环依赖
            failOnError: true,
            allowAsyncCycles: false,
            cwd: process.cwd(),
        }),
        new WebpackObfuscator(
            {
                // 压缩代码
                compact: false,
                // 随机的死代码块(增加了混淆代码的大小)
                deadCodeInjection: false,
                // 死代码块的影响概率
                deadCodeInjectionThreshold: 0.3,
                // TODO 可能会和忽略文件冲突 此选项几乎不可能使用开发者工具的控制台选项卡
                debugProtection: false,
                // 如果选中，则会在“控制台”选项卡上使用间隔强制调试模式，从而更难使用“开发人员工具”的其他功能。
                debugProtectionInterval: 0,
                // 通过用空函数替换它们来禁用console.log，console.info，console.error和console.warn。这使得调试器的使用更加困难。
                disableConsoleOutput: false,
                // 标识符的混淆方式 hexadecimal(十六进制) mangled(短标识符)
                identifierNamesGenerator: 'hexadecimal',
                // 是否启用全局变量和函数名称的混淆
                renameGlobals: false,
                // 通过固定和随机（在代码混淆时生成）的位置移动数组。这使得将删除的字符串的顺序与其原始位置相匹配变得更加困难。如果原始源代码不小，建议使用此选项，因为辅助函数可以引起注意。
                rotateStringArray: true,
            },
            ['node_modules/*'],
        ),
        new MiniCssExtractPlugin({
            filename: `css/[name]_[contenthash:4].css`,
        }),
        new CompressionPlugin({
            filename: '[path][base].gz',
            algorithm: 'gzip',
            minRatio: 0.8,
            threshold: 10240,
            deleteOriginalAssets: false,
        }),
        new BundleAnalyzerPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name][local]_[contenthash:4]',
                            },
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: { postcssOptions: { plugins: ['postcss-preset-env'] } },
                    },
                    'less-loader',
                ],
            },
            {
                test: /\.[jt]sx?$/,
                use: 'babel-loader',
                exclude: [/node_modules/],
            },
        ],
    },
});

module.exports = prodConfig;
