import { createContext } from "react";

export const WhiteList = ['^[/]+$', '\\*', 'Apple', 'Banana', 'Admin/login'];
const initialState = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null,
    permissionList: WhiteList
};

const AuthContext = createContext({
    state: initialState,
    login: () => {},
    logout: () => {},
});
export default AuthContext;
export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;