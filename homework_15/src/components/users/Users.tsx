import React, {useState} from 'react';
import './Users.css';
import {number, string} from "prop-types";

interface Props { // Объявление интерфейса пропсов
  id: number;
  text: string;
}

const Users = function (props: Props) {
    const [id, text] = useState([{ id: number, text: string}]);

    return (
            <section className="container__item">
                <div className="container__title">
                    <div className="container__title__id">{props.id}</div>
                </div>
                <div className="container__item__item">
                    <p className="container__item__text">{ props.text != null ? props.text : 'ваш текст заметки' }</p>
                </div>
            </section>
    )
}

export default Users;
