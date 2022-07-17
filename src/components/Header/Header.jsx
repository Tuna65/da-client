import { useState } from 'react';
import { Link } from 'react-router-dom';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.scss';

import img from './../../assets/imgs/banner_left.png';
import avt from './../../assets/imgs/no_avatar.png';
import Tippy from '@tippyjs/react/headless'; // d

function Header() {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    return (
        <div className="Header__wrapper">
            <div className="Header__left">
                <img src={img} alt="" className="Header__left-img" />
            </div>
            <div className="Header__right">
                <div className="Header__right-container">
                    <Tippy
                        interactive
                        placement="bottom"
                        render={(attrs) => (
                            <div className="options" tabIndex="-1" {...attrs}>
                                <Link to="/login">
                                    <span>Đăng xuất</span>
                                </Link>
                                <span>Thông tin cá nhân</span>
                            </div>
                        )}
                        visible={visible}
                        onClickOutside={hide}
                    >
                        <div className="Header__right-container-info" onClick={visible ? hide : show}>
                            <img src={avt} alt="" />
                            <span>Phạm Anh Tuấn</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                    </Tippy>
                </div>
            </div>
        </div>
    );
}

export default Header;
