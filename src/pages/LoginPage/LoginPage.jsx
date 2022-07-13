import React from 'react';
import './LoginPage.scss';
import Login from '../../components/Login/Login';

function LoginPage() {
    return (
        <div className="LoginPage__wrapper ">
            <div className="LoginPage__left"></div>
            <div className="LoginPage__right">
                <Login />
            </div>
        </div>
    );
}

export default LoginPage;
