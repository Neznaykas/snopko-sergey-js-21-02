import React from 'react';
import './Users.css';
import {UsersType} from "../../types/dumMyApiResponses";
import User from "./user/User";

interface Props { // Объявление интерфейса пропсов
    darkTheme: boolean;
    ListUsers: Array<UsersType>;
}

const Users = function (props: Props) {
    return (
        <div className="users">
            { props.ListUsers.map((e) => (
                <User
                    key={e.id}
                    id={e.id}
                    img={e.picture}
                    img_alt={`${e.title}. ${e.firstName} ${e.lastName}`}
                    name={`${e.title}. ${e.firstName} ${e.lastName}`}
                    darkTheme={props.darkTheme ? props.darkTheme : false}
                />
            ))}
        </div>
    )
}

export default Users;
