import React, {ReactElement, useContext} from 'react';

import './Header.scss';
import {Theme} from "../theme/Theme";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";

const Header = (): ReactElement => {
    const themeContext = useContext(Theme);

    return (
        <header className={`header ${themeContext.darkTheme ? "header_dark" : ""}`}>
            <div className="header__logo">
                <Logo/>
            </div>
            <div className="header__menu">
              <Menu/>
            </div>
            <div className="header__user_menu">

            </div>
        </header>
    );
};

export default Header;