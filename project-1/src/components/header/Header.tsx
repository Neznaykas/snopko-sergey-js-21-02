import React, {ReactElement, useContext} from 'react';

import './Header.css';
import {Theme} from "../theme/Theme";
import Logo from "./logo/Logo";

const Header = (): ReactElement => {
    const themeContext = useContext(Theme);

    return (
        <header className={`header ${themeContext.darkTheme ? "header_dark" : ""}`}>
            <div className="header__logo">
                <Logo/>
            </div>
            <div className="header__menu">

            </div>
            <div className="header__user_menu">

            </div>
        </header>
    );
};

export default Header;