/**
 * author : yangbo
 * date : 2024/07/08 15:25:51
 * fileName: ProtectedRoute.js
 * description :
 **/
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute(props) {
    const { children, isAuthenticated } = props;
    const location = useLocation();

    if (!isAuthenticated) {
        // 用户未认证，重定向到登录页面，同时保存当前路径以便登录后重定向回来
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // 用户已认证，渲染子组件
    return children;
}

export default ProtectedRoute;
