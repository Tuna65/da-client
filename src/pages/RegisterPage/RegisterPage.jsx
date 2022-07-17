import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import LoginForm from '../../components/Login/LoginForm';

import './RegisterPage.scss';

function RegisterPage() {
    return (
        <div className="RegisterPage__wrapper ">
            <div className="RegisterPage__left"></div>
            <div className="RegisterPage__right">
                <LoginForm
                    type={'Email'}
                    btnType={'lấy lại mật khẩu'}
                    inputType={'email'}
                    nav={'Đăng nhập'}
                    icon={faEnvelope}
                    link={'/login'}
                />
            </div>
        </div>
    );
}

export default RegisterPage;
