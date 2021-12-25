import React, { useContext } from "react";

import "./Footer.scss";
import {Theme} from "../theme/Theme";
import ThemeCheckbox from "./themecheckbox/ThemeCheckbox";

const Footer = () => {
    const themeContext = useContext(Theme);
    return (
        <footer className={`footer ${themeContext.darkTheme ? "footer_dark" : ""}`}>
            <div className="footer__copyright">&copy; 2021  Снопко С.И.</div>
            <ThemeCheckbox />
        </footer>
    );
};

export default Footer;