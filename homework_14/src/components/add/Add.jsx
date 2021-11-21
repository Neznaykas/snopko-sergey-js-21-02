import React from 'react'
import './Add.css'

export class Add extends React.Component {
    render() {
        return <section className="container__item">
            <div className="container__append">
                <textarea>Заметка</textarea>
                <input type="button" value="Добавить"/>
            </div>
        </section>
    }
}