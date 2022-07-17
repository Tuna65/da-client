import './Footer.scss';
import img from './../../assets/imgs/logo_thienan.jpg';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function Footer() {
    return (
        <div className="Footer__wrapper">
            <div className="Footer__inner">
                <div className="Footer__inner-left">
                    <img src={img} alt="" />
                </div>
                <div className="Footer__inner-between">
                    <span>
                        Made by
                        <Tippy content="Connect with me on FaceBook!!" placement="bottom">
                            <a href="https://www.facebook.com/tuan6597/" alt="">
                                Phạm Anh Tuấn
                            </a>
                        </Tippy>
                    </span>
                </div>
                <div className="Footer__inner-right">
                    <span>Sinh viên Online: 1</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
