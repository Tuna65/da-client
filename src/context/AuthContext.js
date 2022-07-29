import { createContext, useReducer } from 'react';
import { AuthReducer } from '../reducer/authReducer';
import axios from 'axios';
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from './constants';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(AuthReducer, {
        authenticated: false,
        user: null,
    });

    const loginUser = async (userForm) => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, userForm);
            // if (response.data.success) {
            //     localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken);
            // }
            return response.data;
        } catch (error) {
            if (error) console.log('error!!!');
        }
    };

    const contextData = { loginUser };

    return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
