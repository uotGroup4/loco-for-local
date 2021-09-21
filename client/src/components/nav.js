import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul className="flex-row mobile-view">
                <li className="mx-2 navActive">
                    <Link to='/'>
                        Search
                    </Link>
                </li>
                <li className="mx-2 navActive">
                    <Link to='/signup'>
                        Register
                    </Link>
                </li>
                <li className="mx-2 navActive">
                    <Link to='/contact'>
                        Contact
                    </Link>
                </li>
                <li className="mx-2 navActive">
                    <Link to='/dashboard'>
                        Dashboard
                    </Link>
                </li>
                <li className="mx-2 navActive">
                    <Link to='/login'>
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;