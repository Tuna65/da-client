import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import './RegisterForm.scss';

import img from './../../assets/imgs/thienan.png';

function RegisterForm() {
    return (
        <>
            <div className="Login__wrapper">
                <form action="" className="Login__form">
                    <div className="Login__form-header">
                        <img src={img} alt="" />
                        <h1>Cổng thông tin đánh giá</h1>
                    </div>
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
                            // value={username}
                            // onChange={onChangeLoginForm}
                            // onChange={(e) => {
                        />
                    </div>
                    <div className="Login__form-input">
                        <label htmlFor="email" className="label-name">
                            <FontAwesomeIcon icon={faEnvelope} />
                            Mật khẩu
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Nhập mật khẩu"
                            // value={password}
                            // onChange={onChangeLoginForm}
                        />
                    </div>
                    <span
                        className="warning-message"
                        // ref={warning}
                    ></span>
                    <button
                        className="Login__form-btn"
                        type="submit"
                        // onClick={handleSubmit}
                    >
                        Lấy mật khẩu
                    </button>
                </form>
                <Link to="/login">
                    <span>Trở lại trang đăng nhập</span>
                </Link>
            </div>
        </>
    );
}

export default RegisterForm;
