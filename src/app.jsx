/**
 * author : yangbo
 * date : 2023/09/15 17:07:23
 * fileName: app.jsx
 * description : 根路由
 **/
import React, { useState, useEffect } from 'react';
import RouteContainer from '@routes';
import Auth from '@layouts/auth';
import Public from '@layouts/index';
import Private from '@layouts/private';

function App(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    // useEffect(() => {
    //     // 模拟权限检查，可以替换为实际的检查逻辑
    //     const checkAuth = async () => {
    //         // 假设这里是一个异步的权限检查
    //         const authStatus = await fakeAuthCheck();
    //         setIsAuthenticated(authStatus);
    //     };

    //     checkAuth();
    // }, []);

    // const fakeAuthCheck = async () => {
    //     // 模拟的异步权限检查逻辑
    //     return new Promise(resolve => setTimeout(() => resolve(true), 1000));
    // };

    console.log('App', props, process.env);

    switch (process.env.DEPLOY) {
        case 'private':
            return (
                <Private>
                    <RouteContainer isAuthenticated={isAuthenticated} />
                </Private>
            );
        case 'auth':
            return (
                <Auth>
                    <RouteContainer isAuthenticated={isAuthenticated} />
                </Auth>
            );
        default:
            return (
                <Public>
                    <RouteContainer isAuthenticated={isAuthenticated} />
                </Public>
            );
    }
}

export default App;
