// eslint-disable-next-line no-unused-vars
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './LoginForm.scss';

import img from './../../assets/imgs/thienan.png';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useRef, useState } from 'react';

function LoginForm({ ...item }) {
    const [userValue, setUserValue] = useState('');
    const [otherValue, setOtherValue] = useState('');
    const [isBorderUser, setIsBorderUser] = useState(false);
    const [isBorderotherValue, setIsBorderotherValue] = useState(false);

    const warning = useRef();

    const checkValue = (value, message) => {
        if (value === '') {
            warning.current.innerText = `${message}`;
        }
    };

    const checkBorder = (value, func) => {
        if (value === '') {
            func(true);
        } else func(false);
    };

    const deleteWarning = (userValue, otherValue) => {
        if (userValue !== '' && otherValue !== '') {
            warning.current.innerText = '';
        }
    };

    const handleSubmit = (e) => {
        deleteWarning();

        checkValue(otherValue, `You must Enter ${item.inputType}`);
        checkValue(userValue, 'You must Enter userName');

        checkBorder(userValue, setIsBorderUser);
        checkBorder(otherValue, setIsBorderotherValue);
        e.preventDefault();
    };

    return (
        <div className="Login__wrapper">
            <form action="" className="Login__form" method="GET">
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
                        onChange={(e) => {
                            setUserValue(e.target.value);
                            setIsBorderUser(false);
                        }}
                        value={userValue}
                        className={isBorderUser ? 'warning' : ''}
                    />
                </div>
                <div className="Login__form-input">
                    <label htmlFor={item.inputType} className="label-name">
                        <FontAwesomeIcon icon={item.icon} />
                        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                        {item.type}
                    </label>
                    <input
                        type={item.inputType}
                        name={item.inputType}
                        id={item.inputType}
                        placeholder={`Nhập ${item.type}`}
                        onChange={(e) => {
                            setOtherValue(e.target.value);
                            setIsBorderotherValue(false);
                        }}
                        value={otherValue}
                        className={isBorderotherValue ? 'warning' : ''}
                    />
                </div>
                <span className="warning-message" ref={warning}></span>
                <button className="Login__form-btn" type="submit" onClick={handleSubmit}>
                    {item.btnType}
                </button>
            </form>
            <Link to={item.link}>
                <span>{item.nav}</span>
            </Link>
        </div>
    );
}

export default LoginForm;
