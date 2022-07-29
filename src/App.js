import { Routes, Route, Navigate } from 'react-router';

import './App.scss';
import './assets/grid/grid.scss';

import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MainPage from './pages/student/MainPage/MainPage';

import FormStrudent from './pages/teach/FormStudent/FormStudent';
import ListStudentPage from './pages/teach/ListStudenPage/ListStudenPage';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigate replace to='/login'/>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/student/form" element={<MainPage />}></Route>
                <Route path="/teach/form" element={<FormStrudent />}></Route>
                <Route path="/teach/list" element={<ListStudentPage />}></Route>
            </Routes>
        </div>
    );
}

export default App;
