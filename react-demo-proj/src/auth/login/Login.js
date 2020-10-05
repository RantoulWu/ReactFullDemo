import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {login} from "../../actions/auth.action";

const Login = () => {

    // react hooks that allows functional component to use state
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    // hooks from react-redux
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login(user));
    };
    const handleFormControl = (event) => {
        const newUser = {...user};
        newUser[event.target.id] = event.target.value;
        setUser(newUser);
    };
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="username"
                    value={user.username}
                    onChange={handleFormControl}
                />
                <input
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={handleFormControl}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
export default Login;
