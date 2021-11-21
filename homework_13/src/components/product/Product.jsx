import React from 'react'
import './Product.css'


export class Product extends React.Component {
    render(){
        return <div className="comment">
            {console.log('I`m alive') /*Этот код будет выполнен*/}
            <div className="comment__user-name">{this.props.name/*Все переданные пропсы находятся в this.props*/}</div>
            <div className="comment__text">{this.props.text}</div>
        </div>
    }
}