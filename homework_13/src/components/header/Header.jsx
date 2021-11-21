import React from 'react'
import './Header.css'
import {change__theme} from "../../themer";

export class Header extends React.Component {

    changeTheme() {
        change__theme();
    }

    render() {
        return <header className="header">
            <h1>Интернет магазин "Не только красивое"</h1>
            <div className="header__loader">
                <img src="img/fish.svg" alt="Загрузка..."/>
            </div>
            <div className="header__loader2">
                <img src="img/fish.svg" alt="Загрузка..."/>
            </div>
            <div className="header__theme">
                <input type="checkbox" id="header__theme__input" onClick={ change__theme }/>
                    <label className="header__theme__label" htmlFor="header__theme__input">Тёмная тема</label>
            </div>
        </header>
    }
}