import React, {ReactElement, useContext, useState, SyntheticEvent} from "react";
import "./Menu.scss";
import { Menu } from "antd";

import { IdcardOutlined, TeamOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import {Theme} from "../../theme/Theme";

interface TypeClickEvent {
    item: any;
    key: string;
    keyPath: Array<string>;
    domEvent: SyntheticEvent;
}

const MainMenu = (): ReactElement => {
    const [path, setPath] = useState("");

    const handleClick = (e: TypeClickEvent) => {
        setPath(e.key);
    };

    const themeContext = useContext(Theme);
    return (
        <Menu className="menu" theme={themeContext.darkTheme ? "dark" : "light"}  mode="horizontal"
            selectedKeys={[path]}
            onClick={handleClick}>

    <Menu.Item key="users" icon={<TeamOutlined />}>
    <Link to="/users">Пользователи</Link>
        </Menu.Item>
        <Menu.Item key="posts" icon={<IdcardOutlined />}>
    <Link to="/posts">Посты</Link>
        </Menu.Item>
        </Menu>
);
};

export default MainMenu;