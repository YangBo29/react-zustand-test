/**
 * author : yangbo
 * date : 2022/04/07 16:38:02
 * fileName: routes.js
 * description : 路由配置
 **/

const common = [
    // 根路由
    { path: '/', component: './index' },
    // 404
    { path: '/404', component: './404' },
    // 分享路由
    { path: '/share/:id', component: './share/$id' },
    // 项目管理
    { path: '/manage', component: './manage/index' },
    // 模型工作站
    { path: '/ModelEditor', component: './ModelEditor/index' },
    // 预览
    { path: '/preview/:id', component: './preview/$id' },
    // 编辑
    { path: '/project/:id', component: './project/$id' },
    // 权限配置
    { path: '/authority', redirect: '/authority/characterSet' },
    // 角色权限
    { path: '/authority/characterSet', component: './authority/characterSet/index' },
    // 用户权限
    { path: '/authority/userManage', component: './authority/userManage/index' },
];

const privateRoutes = [
    // 合并共有路由
    ...common,
    { path: '/auth', component: './verify/index' },
    // 日志
    // { path: '/log', component: './Log/index' },
    // 登陆页
    { path: '/login', component: './login/index' },
    // 个人中心
    { path: '/userCenter', redirect: '/userCenter/userInfo' },
    // 私有配置页
    { path: '/authsetting', component: '../pages/authsetting' },
    // 个人信息管理
    { path: '/userCenter/userInfo', component: './userCenter/userInfo/index' },
];

const publicRoutes = [
    // 合并共有路由
    ...common,
    // 案例路由
    { path: '/case/:id', component: './case/$id' },
    // 问卷
    { path: '/apply', component: './apply/index' },
    // 个人中心
    { path: '/userCenter', redirect: '/userCenter/companyManage' },
    // 企业管理管理
    { path: '/userCenter/companyManage', component: './userCenter/companyManage/index' },
    // 桌面端3D资源
    { path: '/desktopsourcemanage', component: './desktopSourceManage/index' },
];

// 本地开发时才会用到的路由
const publicDevRoutes = [{ path: '/login', component: './login/index' }];
const privateDevRoutes = [{ path: '/chart', component: '../pages/chart/index' }];

if (process.env.NODE_ENV === 'development') {
    publicDevRoutes.forEach(r => publicRoutes.push(r));
    privateDevRoutes.forEach(r => privateRoutes.push(r));
}

const authRoutes = [
    // 私有配置页
    { path: '/authsetting', component: '../pages/authsetting' },
    { path: '/', redirect: '/auth' },
    // 404
    { path: '/404', component: './404' },
    // 分享路由
    { path: '/share/:id', component: './share/$id' },
    // 鉴权
    { path: '/auth', component: './verifyAuth/index' },
];

// 导出公有路由
export const layoutPublicRoutes = [
    {
        path: '/',
        component: '../layouts/index',
        routes: publicRoutes,
    },
];

// 导出私有路由
export const layoutPrivateRoutes = [
    {
        path: '/',
        component: '../layouts/private',
        routes: privateRoutes,
    },
];

// 导出环境包路由
export const layoutAuthRoutes = [
    {
        path: '/',
        component: '../layouts/auth',
        routes: authRoutes,
    },
];
