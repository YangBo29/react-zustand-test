/**
 * author : yangbo
 * date : 2024/07/05 17:51:32
 * fileName: index.jsx
 * description :
 **/
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Loading from '@module/Loading';
import ProtectedRoute from './ProtectedRoute';

// import Project from '@pages/project';
// import Preview from '@pages/preview';
// import Manage from '@pages/manage';
// import CharacterSet from '@pages/characterSet';
// import UserManage from '@pages/userManage';
// import NotFound from '@pages/notFound';

const Login = lazy(() => import(/* webpackChunkName: "login" */ '@pages/login'));
const Project = lazy(() => import(/* webpackChunkName: "project" */ '@pages/project'));
const Preview = lazy(() => import(/* webpackChunkName: "preview" */ '@pages/preview'));
const Manage = lazy(() => import(/* webpackChunkName: "manage" */ '@pages/manage'));
const CharacterSet = lazy(() =>
    import(/* webpackChunkName: "characterSet" */ '@pages/characterSet'),
);
const UserManage = lazy(() => import(/* webpackChunkName: "userManage" */ '@pages/userManage'));
const NotFound = lazy(() => import(/* webpackChunkName: "notFound" */ '@pages/notFound'));

function RouteContainer(props) {
    const { isAuthenticated } = props;
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Navigate to="/preview" replace />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/project/:id?"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <Project />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/preview/:id?"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <Preview />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/manage"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <Manage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/authority"
                        element={<Navigate to="/authority/characterSet" replace />}
                    />
                    <Route
                        path="/authority/characterSet"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <CharacterSet />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/authority/userManage"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <UserManage />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default RouteContainer;
