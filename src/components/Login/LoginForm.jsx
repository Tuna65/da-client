// eslint-disable-next-line no-unused-vars
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.scss';

import img from './../../assets/imgs/thienan.png';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useState, useContext } from 'react';
import { AuthContext } from './../../context/AuthContext';
import Warning from '../Warning/Warning';

function LoginForm() {
    //useContext
    const { loginUser } = useContext(AuthContext);
    const [loginForm, setLoginForm] = useState({ username: '', password: '' });
    const { username, password } = loginForm;

    // state warning
    const [showWarning, setShowWarning] = useState(false);
    const [message, setMessage] = useState('');

    //handle change input
    const onChangeLoginForm = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    };

    //handle submit form
    const history = useNavigate();
    const login = async (e) => {
        e.preventDefault();
        try {
            const loginData = await loginUser(loginForm);

            if (loginData.success) {
                setShowWarning(false);
                if (loginData.title === 'student') {
                    history('/student/form');
                } else history('/teach/list');
            } else {
                setShowWarning(true);
                setMessage(loginData.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="Login__wrapper">
            <form action="" className="Login__form" onSubmit={login}>
                <div className="Login__form-header">
                    <img src={img} alt="" />
                    <h1>Cổng thông tin đánh giá</h1>
                </div>
                {showWarning && <Warning message={message} />}
                <div className="Login__form-input">
                    <label htmlFor="username" className="label-name">
                        <FontAwesomeIcon icon={faUser} />
                        Tài khoản
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Nhập tên tài khoản"
                        value={username}
                        onChange={onChangeLoginForm}
                        
                    />
                </div>
                <div className="Login__form-input">
                    <label htmlFor="password" className="label-name">
                        <FontAwesomeIcon icon={faKey} />
                        Mật khẩu
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Nhập mật khẩu"
                        value={password}
                        onChange={onChangeLoginForm}
                        
                    />
                </div>
                <button
                    className="Login__form-btn"
                    type="submit"
                
                >
                    Đăng nhập
                </button>
            </form>
            <Link to="/register">
                <span>Quên mật khẩu</span>
            </Link>
        </div>
    );
}

export default LoginForm;
