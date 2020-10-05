import React from 'react';
import {NavLink} from "react-router-dom";
import {appConstant} from "../constants/constant";
import './Header.css';
import {useDispatch, useSelector} from "react-redux";

const Header = () => {

    // a hook from react-redux
    const user = useSelector(({user}) => user);
    const dispatch = useDispatch();

    const logout = () => {
        const logoutPromise = fetch(
            `${process.env.REACT_APP_API_URL}/logout`,
            {
                credentials: 'include'
            }
        ).then(res => res.json());
        dispatch({
            type: appConstant.LOGOUT,
            payload: logoutPromise
        });
    };

    return (
        <header>
            <nav className="my-nav">
                <ul>
                    <li>
                        <NavLink to={appConstant.namesRoute}>Names</NavLink>
                    </li>
                    <li>
                        <NavLink to={appConstant.addNameRoute}>Add Name</NavLink>
                    </li>
                    <li>
                        <NavLink to={appConstant.productsRoute}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to={appConstant.addProductRoute}>Add Product</NavLink>
                    </li>
                    <li style={ {marginLeft: "auto"} }>
                        {
                            user ?
                                <NavLink to={appConstant.loginRoute} onClick={logout}>Logout</NavLink> :
                                <NavLink to={appConstant.loginRoute}>Login</NavLink>
                        }
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
