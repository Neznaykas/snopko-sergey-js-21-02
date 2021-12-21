import React from 'react';

import './User.css';
import Hint from "../hint/Hint";

interface Props {
    darkTheme: boolean;
    img?: string;
    img_alt?: string;
    name?: string;
    id?: string;
}

const User = function (props: Props) {
        return (
            <div className={`user ${props.darkTheme ? 'user_dark' : ''}`}>
                <div className={`user__img_wrapper ${props.darkTheme ? 'user__img_wrapper_dark' : ''}`}>
                    <img className="user__img" src={props.img} alt={props.img_alt} />
                </div>
                <Hint text={props.id || ''}>
                    <div className="user__user_name">{props.name}</div>
                </Hint>
            </div>
        )
}

export default User;