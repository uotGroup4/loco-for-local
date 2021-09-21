import React from "react";
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';





const Nav = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <ul className="flex-row mobile-view">
            <li className=" mx-2 navActive" >

                <Link to='/'>
                    Home
                    </Link>

            </li>
            <li className=" mx-2 navActive ">
                <Link to='/signup'>
                    Register
                    </Link>
            </li>
            <li className=" mx-2 navActive">
                <Link to='/contact'>
                    Contact
                    </Link>
            </li>
            {Auth.loggedIn() ? (
                <>
                    <li className=" mx-2 navActive">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="mx-2 navActive">
                        <a href="/" onClick={logout}>
                            Logout
                            </a>
                    </li>
                </>
            ) : (
                <li className="mx-2 navActive">
                    <Link to='/login'>
                        Login
                        </Link>
                </li>
            )}
        </ul>



    );
};


export default Nav;