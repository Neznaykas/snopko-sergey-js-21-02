import React, { ChangeEvent, useContext } from 'react';
import {Theme} from "../../theme/Theme";

const ThemeCheckbox = () => {
    const themeContext = useContext(Theme);

    return (
        <div className="theme-checkbox">
            Тёмная тема
    <input
    className="theme-checkbox__input"
    checked={themeContext.darkTheme}
    type="checkbox"
    onChange={(e: ChangeEvent<HTMLInputElement>) => themeContext.toggleTheme && themeContext.toggleTheme(e.target.checked)}
    />
    </div>
);
};

export default ThemeCheckbox;