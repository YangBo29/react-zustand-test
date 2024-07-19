/**
 * author : yangbo
 * date : 2023/09/14 16:06:44
 * fileName: proxy.dev.js
 * description : 接口代理配置
 **/

module.exports = {
    '/apis': {
        target: 'http://9.134.210.121',
        pathRewrite: { '^/apis': '' },
        changeOrigin: true,
    },
};
