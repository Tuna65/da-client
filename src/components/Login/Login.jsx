import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.scss';

import img from './../../assets/imgs/thienan.png';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function Login() {
    return (
        <div className="Login__wrapper">
            <form action="" className="Login__form">
                <div className="Login__form-header">
                    <img src={img} alt="" />
                    <h1>Cổng thông tin đánh giá</h1>
                </div>
                <div className="Login__form-user">
                    <label htmlFor="username" className="label-name">
                        <FontAwesomeIcon icon={faUser} />
                        Tài khoản
                    </label>
                    <input type="text" name="username" id="username" placeholder="Nhập tên tài khoản" />
                </div>
                <div className="Login__form-password">
                    <label htmlFor="password" className="label-name">
                        <FontAwesomeIcon icon={faKey} />
                        Mật khẩu
                    </label>
                    <input type="password" name="password" id="password" placeholder="Nhập mật khẩu" />
                </div>
                <button className="Login__form-btn">Đăng nhập</button>
            </form>
            <span>Quên mật khẩu?</span>
        </div>
    );
}

export default Login;
