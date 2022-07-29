import React from 'react';

import './LoginPage.scss';
import LoginForm from '../../components/Login/LoginForm';

function LoginPage() {
    return (
        <div className="LoginPage__wrapper ">
            <div className="LoginPage__left"></div>
            <div className="LoginPage__right">
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginPage;
