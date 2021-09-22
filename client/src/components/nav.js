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
        <section className="top-container">
            <div className="navlogo">
                <span className="locologo">
                    <a href="/">
                        <img src={locologo} height="150" width="200" alt="text here" className="locologo" /></a>
                </span>
            </div>
            <div className="row-container">
                <ul className="flex-row">
                    {Auth.loggedIn() ? (
                        <>
                            <li className=" mx-2" >
                                <Link to='/'>
                                    Home
                                </Link>
                            </li>
                            <li className=" mx-2">
                                <Link to='/about'>
                                    About
                                </Link>
                            </li>
                            <li className=" mx-2">
                                <Link to="/dashboard">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="mx-2">
                                <a href="/" onClick={logout}>
                                    Logout
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className=" mx-2" >
                                <Link to='/'>
                                    Home
                                </Link>
                            </li>
                            <li className=" mx-2">
                                <Link to='/about'>
                                    About
                                </Link>
                            </li>
                            <li className=" mx-2">
                                <Link to='/signup'>
                                    Register
                                </Link>
                            </li>
                            <li className="mx-2">
                                <Link to='/login'>
                                    Login
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </section >



    );
};


export default Nav;