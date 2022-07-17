import './MainPage.scss';

import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Form from '../../../components/Form/From';
import { useState } from 'react';

function MainPage() {
    const [isShowForm, setIsShowForm] = useState(false);
    const [isShowBtn, setIsShowBtn] = useState(true);
    const [isMessage, setIsMessage] = useState(false);

    return (
        <div className="MainPage__wrapper">
            <Header />

            <button
                className="btn-send"
                style={isShowBtn ? { display: 'block' } : { display: 'none' }}
                onClick={() => {
                    setIsShowForm(!isShowForm);
                    setIsShowBtn(!isShowBtn);
                }}
            >
                Đánh giá nhanh
            </button>
            <div style={isShowForm ? { display: 'block' } : { display: 'none' }}>
                <Form func={setIsMessage} isShow={isMessage} type="student" />
            </div>

            <h1 style={isMessage ? { display: 'block' } : { display: 'none' }}>Bạn đã đánh giá cho kỳ này!!!</h1>
            <Footer />
        </div>
    );
}

export default MainPage;
