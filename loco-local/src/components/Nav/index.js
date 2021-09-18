import React from "react";

function Nav(props) {
    const { currentTab, setCurrentTab } = props;

    return (
        <nav>

            <ul className="flex-row mobile-view">
                <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab("search")}>Search</span>
                </li>

                <li className={currentTab === "register" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab("register")}>Register</span>
                </li>
                <li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab("contact")}>Contact</span>
                </li>
                <li className={currentTab === "profile" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab("profile")}>Profile</span>
                </li>
                <li className={currentTab === "login" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab("login")}>Login</span>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;