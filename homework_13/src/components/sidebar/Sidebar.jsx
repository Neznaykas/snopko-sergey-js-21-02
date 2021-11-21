import React from 'react'
import './Sidebar.css'


export class Sidebar extends React.Component {
    render() {
        return <div className="sidebar__item">
            <input type="checkbox" id="{this.props.id}"/>
            <label htmlFor="{this.props.id}">{this.props.name}</label>
        </div>
    }
}