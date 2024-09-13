/**
 * author : yangbo
 * date : 2024/09/13 14:06:10
 * fileName: babel.config.js
 * description :
 **/

/**
 * react-refresh/babel 这个库涉及到一个热更新的库，在生产环境是用不到的，所以在打包编译生产环境时，
 * 不应该引用，否则会导致执行报错
 */
module.exports = function (api) {
    // 获取当前环境变量，这个环境变量来自于命令行中 cross-env 写入;
    // 在webpack中配置的环境变量和这个文件有先后顺序，无法在 webpack.dev.js 设置后再读取
    const env = api.env();
    // 开发环境
    const isDevelopment = env === 'development';
    // const isProduction = env === 'production';
    return {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-transform-runtime', isDevelopment && 'react-refresh/babel'].filter(
            Boolean,
        ),
    };
};
