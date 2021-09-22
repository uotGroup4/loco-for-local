import React from "react";
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import locologo from '../assets/icon/lfl_greenTransp.png';





const Nav = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <div class="top-container">
            <span class="locologo">
                <a href="/">
                    <img src={locologo} height="200" width="200" alt="text here" class="locologo" /></a>
            </span>
            <div class="row-container">
                <ul className="flex-row">

                    <li className=" mx-2" >

                        <Link to='/'>
                            Home
                    </Link>

                    </li>
                    <li className=" mx-2">
                        <Link to='/signup'>
                            Register
                    </Link>
                    </li>
                    <li className=" mx-2">
                        <Link to='/about'>
                            About
                    </Link>
                    </li>
                    {Auth.loggedIn() ? (
                        <>
                            <li className=" mx-2">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="mx-2">
                                <a href="/" onClick={logout}>
                                    Logout
                            </a>
                            </li>
                        </>
                    ) : (
                        <li className="mx-2">
                            <Link to='/login'>
                                Login
                        </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>



    );
};


export default Nav;