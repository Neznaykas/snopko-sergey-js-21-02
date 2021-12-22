import React, { ReactElement, useContext } from "react";
import { NavLink } from "react-router-dom";

import {Theme} from "../../theme/Theme";
import "./Logo.scss";

const Logo = (): ReactElement => {
    const themeContext = useContext(Theme);
    const Title = "Planet";
    return (
        <NavLink to="/" className="logo" title={Title}>
            <div className="logo__img_wrapper">
                <img className="logo__img" src="/logo.png" alt={Title} title={Title}/>
            </div>
            <p className={`logo__text ${themeContext.darkTheme ? "logo__text_dark" : ""}`} title={Title}>
                Express
            </p>
        </NavLink>
    );
};

export default Logo;