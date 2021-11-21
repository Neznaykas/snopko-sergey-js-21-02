import React from 'react'
import './Table.css'

export class Table extends React.Component {
    render() {
        return <section className="container__item">
            <div className="container__item__item">
                <a href="#" className="App-link">Заголовок</a>
                <p className="container__item__text">Описание дела</p>
            </div>
        </section>
    }
}