import React from 'react'
import './Footer.css'

export class Footer extends React.Component {
    render() {
        return <footer className="footer">
            <div className="footer__item_contact">Контакты</div>
            <div className="footer__item">@2021 ИП Рыбов О.А.</div>
        </footer>
    }
}