import RegisterForm from '../../components/register/RegisterForm';

import './RegisterPage.scss';

function RegisterPage() {
    return (
        <div className="RegisterPage__wrapper ">
            <div className="RegisterPage__left"></div>
            <div className="RegisterPage__right">
                <RegisterForm />
            </div>
        </div>
    );
}

export default RegisterPage;
