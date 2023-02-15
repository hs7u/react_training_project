import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../util/AuthContext';

const initialState = {
    email: '',
    password: '',
};

function LoginForm() {
    const { state: ContextState, login } = useContext(AuthContext);
    const { isLoginPending, isLoginSuccess, loginError } = ContextState;
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault()
        const { email, password } = state
        login(email, password)
    }

    const onChange = (key, e) => {
        setState((prevState) => ({
            ...prevState,
            [key]: e.target.value,
        }))
    }

    return (
        <form name="loginForm" onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm-3 col-md-6">
                    <label htmlFor="email">Username</label>
                </div>

                <div className="col-sm-9 col-md-6">
                    <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={(e) => onChange('email', e)}
                        value={state.email}
                        placeholder="admin"
                    />
                </div>

                <div className="col-sm-3 col-md-6">
                    <label htmlFor="password">Password</label>
                </div>
                <div className="col-sm-9 col-md-6">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => onChange('password', e)}
                        value={state.password}
                        placeholder="admin"
                    />
                </div>

                <div className="col-sm-3 col-md-6" />
                <div className="col-sm-9 col-md-6">
                    <input className="primary" type="submit" value="Login" />
                </div>
            </div>

            {isLoginPending && !isLoginSuccess ? (
                <div>Please wait...</div>
            ) : null}
            {isLoginSuccess && !isLoginPending ? (
                <div>
                    Success.
                    <button
                        onClick={() =>
                            navigate('/Admin/DashBoard', { replace: true })
                        }
                        type="button"
                    >
                        to DashBoard
                    </button>
                </div>
            ) : null}
            {loginError ? <div>{loginError.message}</div> : null}
        </form>
    )
}

export default LoginForm
