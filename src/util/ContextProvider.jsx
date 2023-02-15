import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import AuthContext, { AuthProvider, WhiteList } from './AuthContext';

// fake login
const fetchLogin = (email, password, callback) => {
  setTimeout(() => {
    // TODO fetch from db
    const rtnArr = ['/Admin/DashBoard', '', '/main', '/course'];
    if (email === 'admin' && password === 'admin') {
      return callback(rtnArr, null);
    }
    return callback(rtnArr, new Error('Invalid email and password'));
  }, 500);
};

function ContextProvider({ children }) {
  const { state: ContextState } = useContext(AuthContext);
  const [state, setState] = useState(ContextState);
  const login = (email, password) => {
    setState((prevState) => ({
      // object that we want to update
      // keep all other key-value pairs
      ...prevState, 
      // update the value of specific key
      isLoginPending: true, 
      isLoginSuccess: false,
      loginError: null, 
    }));

    fetchLogin(email, password, (authArr, error) => {
      const success = !error;      
      const Authority = success ? [].concat(WhiteList, authArr) : WhiteList;
      setState((prevState) => ({
        ...prevState,
        isLoginPending: false,
        isLoginSuccess: success,
        permissionList: Authority,
        error,
      }));
    });
  };

  const logout = () => {
    setState((prevState) => ({
      ...prevState,
      isLoginPending: false,
      isLoginSuccess: false,
      loginError: null,
      permissionList: WhiteList,
    }));
  };

  return <AuthProvider value={{ state, login, logout }}>{children}</AuthProvider>;
}

ContextProvider.propTypes = {
  children: PropTypes.node
}

ContextProvider.defaultProps = {
  children:null
}

export default ContextProvider;
