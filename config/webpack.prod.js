/**
 * author : yangbo
 * date : 2023/09/21 14:16:16
 * fileName: webpack.prod.js
 * description : 公配置
 **/
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.prod.common.js');
// 环境变量
const env = require('./prod.env.js');
// 版本信息
const version = require('../public/version/public.json');

const prodConfig = merge(common, {
    output: {
        filename: `[name]_${version.versionCount}_[contenthash:4].js`,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                ...env,
                'DEPLOY': '"public"',
            },
        }),
    ],
});

module.exports = prodConfig;
