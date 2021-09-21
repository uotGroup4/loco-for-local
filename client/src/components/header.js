import React from "react";
import Nav from "./nav";
import locologo from '../assets/icon/lfl_greenTransp.png'



function Header(props) {
    const { currentTab, setCurrentTab } = props;

    return (
        <header>
            <div>

                <img
                    src={locologo}
                    alt="locologo"

                    id="loco-logo"
                />
            </div>
            <div>
                <Nav
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                ></Nav>
            </div>
        </header >
    );
}
export default Header;

