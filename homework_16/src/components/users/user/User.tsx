import React, { ReactNode } from 'react';

import './User.css';
import Hint from "../hint/Hint";

interface State {}

interface Props {
    darkTheme: boolean;
    img?: string;
    img_alt?: string;
    name?: string;
    id?: string;
}

class User extends React.Component<Props, State> {
    render(): ReactNode {
        return (
            <div className={`user ${this.props.darkTheme ? 'user_dark' : ''}`}>
                <div className={`user__img_wrapper ${this.props.darkTheme ? 'user__img_wrapper_dark' : ''}`}>
                    <img className="user__img" src={this.props.img} alt={this.props.img_alt} />
                </div>
                <Hint text={this.props.id || ''}>
                    <div className="user__user_name">{this.props.name}</div>
                </Hint>
            </div>
        );
    }
}

export default User;