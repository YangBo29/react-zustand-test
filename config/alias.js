const path = require('path');

module.exports = {
    //配置别名
    '@': path.resolve(__dirname, '../src'),
    '@assets': path.resolve(__dirname, '../src/assets'),
    '@components': path.resolve(__dirname, '../src/components'),
    '@module': path.resolve(__dirname, '../src/components/module'),
    '@template': path.resolve(__dirname, '../src/components/template'),
    '@pages': path.resolve(__dirname, '../src/pages'),
    '@routes': path.resolve(__dirname, '../src/routes'),
    '@models': path.resolve(__dirname, '../src/models'),
    '@layouts': path.resolve(__dirname, '../src/layouts'),
    '@stores': path.resolve(__dirname, '../src/stores'),
};
