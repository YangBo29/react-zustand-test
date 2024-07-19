/**
 * author : yangbo
 * date : 2024/07/12 17:29:17
 * fileName: open.js
 * description :
 **/

const isReachable = require('is-reachable');
const port = process.argv[2] ?? 8080;

(async () => {
    const open = (await import('open')).default;

    const url = `http://localhost:${port}`; // 替换为你的开发服务器地址
    console.log(await isReachable(url), '-----------------');
    if (await isReachable(url)) {
        // 如果页面已经打开，聚焦现有的浏览器窗口
        // 目前没有跨浏览器的标准方法聚焦到已打开的窗口，但可以提示用户
        console.log(`The page is already open at ${url}. Please check your browser.`);
    } else {
        // 如果页面没有打开，则新开一个浏览器窗口
        open(url);
    }
})();
