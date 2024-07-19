/**
 * author : yangbo
 * date : 2024/07/08 15:20:41
 * fileName: index.jsx
 * description :
 **/
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate();
    function login() {
        navigate('/preview');
    }

    return (
        <div>
            <button onClick={login}>登录</button>
        </div>
    );
}

export default Login;
