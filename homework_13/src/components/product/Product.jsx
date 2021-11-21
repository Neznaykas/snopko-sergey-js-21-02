import React from 'react'
import './Product.css'


export class Product extends React.Component {
    render() {
        return <div className="fishes__item">
            <img className="fishes__item__image" src="img/fish.svg" alt="{this.props.name}"/>
                <div className="desc">
                    <div className="link">
                        <a href="#">{this.props.name}</a>
                    </div>
                    <input type="button" value="Купить"/>
                </div>
        </div>
    }
}