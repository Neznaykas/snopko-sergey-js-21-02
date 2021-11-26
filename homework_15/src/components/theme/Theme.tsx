import React, {Component} from 'react';

class Theme extends Component {
    render() {
        return (
            <div>
                <input name="theme" type="checkbox"/>
                <label>Тёмная тема</label>
            </div>
        );
    }
}

export default Theme