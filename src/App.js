import { Routes, Route } from 'react-router';

import './App.scss';
import './assets/grid/grid.scss';

import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MainPage from './pages/student/MainPage/MainPage';

import FormStrudent from './pages/teach/FormStudent/FormStudent';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/student/form" element={<MainPage />}></Route>
                <Route path="/teach/form" element={<FormStrudent />}></Route>
            </Routes>
        </div>
    );
}

export default App;
