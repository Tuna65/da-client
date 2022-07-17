import React from 'react';
import { faKey } from '@fortawesome/free-solid-svg-icons';

import './LoginPage.scss';
import LoginForm from '../../components/Login/LoginForm';

function LoginPage({ ...item }) {
    return (
        <div className="LoginPage__wrapper ">
            <div className="LoginPage__left"></div>
            <div className="LoginPage__right">
                <LoginForm
                    type={'Mật khẩu'}
                    btnType={'đăng nhập'}
                    inputType={'password'}
                    nav={'Quên mật khẩu'}
                    icon={faKey}
                    link={'/register'}
                />
            </div>
        </div>
    );
}

export default LoginPage;
