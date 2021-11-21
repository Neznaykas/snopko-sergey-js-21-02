import React from 'react'
import './Banner.css'

export class Banner extends React.Component {
    render() {
        return <section className="container__banner">
            <div className="container__banner__item">
                <a href="#">Замороженные рыбы</a>
                <p className="container__banner__item__text">Мы заморозили рыбов для вас</p>
            </div>
            <div className="container__banner__item">
                <a href="#">Живые рыбы</a>
                <p className="container__banner__item__text">На кухню или разведение</p>
            </div>
        </section>
    }
}