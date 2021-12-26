import React, { useContext } from 'react';
import {Theme} from "../../theme/Theme";
import {Switch, Tag} from "antd";

const ThemeCheckbox = () => {
    const themeContext = useContext(Theme);

    function onChange(checked: boolean)
    {
        themeContext.toggleTheme && themeContext.toggleTheme(!checked);
        console.log(`switch to ${!checked}`);
    }

    return (
        <div className="theme-checkbox">
            <Tag closable>
                Сторона луны
            </Tag>
            <Switch checkedChildren="Светлая" unCheckedChildren="Тёмная" defaultChecked onChange={onChange}/>
            {/* <input className="theme-checkbox__input" checked={themeContext.darkTheme} type="checkbox"
                onChange={(e: ChangeEvent<HTMLInputElement>) => themeContext.toggleTheme && themeContext.toggleTheme(e.target.checked)}
        />*/}
        </div>
    );
};

export default ThemeCheckbox;