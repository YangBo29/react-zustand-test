const { merge } = require('webpack-merge');
const common = require('./webpack.dev.common.js');
const env = require('./dev.env.js');
const webpack = require('webpack');

const devConfig = merge(common, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                ...env,
                'DEPLOY': '"private"',
            },
        }),
    ],
});

module.exports = devConfig;
