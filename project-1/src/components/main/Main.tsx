import React, {useContext, useEffect, useState} from "react";

import {Theme} from "../theme/Theme";
import Users from "../users/Users";
import Pager from "./pager/Pager";
import {getUsersList} from "../../api/dumMyApi";
import {UsersType} from "../../types/dumMyApiResponses";

import 'antd/dist/antd.css';
import './Main.scss'

import { Pagination } from 'antd';
import { Spin } from 'antd';

interface State {
    page: number;
    limit: number;
    total:number;
    data: Array<UsersType>;
    load: boolean
}

const Main = () => {
    const context = useContext(Theme);

    const [state, setState]= useState<State>({
        data: [],
        page: 1,
        limit: 6,
        total: 99,
        load: false,
    });

    useEffect(() => {
        setNewPage(state.page);
    }, []); //state.page

    const setNewPage = (page: number) =>
    {
        setState({...state,load:false});

        getUsersList(page, state.limit, (response) => {

            setState({
                data: response.data,
                limit: response.limit,
                total: response.total,
                page: response.page,
                load: true
            })
            console.log(response)
        }).catch(function () {})
    }

    /*const AllPages: Array<number> = [];

    for (let i = 1; i <= (state.total + 1) / state.limit; i += 1) {
        AllPages.push(i);
    }

    if ((state.total + 1) % state.limit > 0) {
        AllPages.push(AllPages.length + 1);
    }*/

    return (
        <div className={"users__wrapper"}>
            <Spin className={"spinner"} spinning={!state.load} delay={100} tip="Загрузка...">
                <Users darkTheme={context.darkTheme || false} ListUsers={state.data}/>
            </Spin>
            {/* <div className="paginator">
                {AllPages.map((e) => (
                    <Pager darkTheme={context.darkTheme || false} page={e} limit={state.limit} total={state.total}
                           key={e}
                           setNewPage={setNewPage} active={e === state.page + 1}/>
                ))}
            </div> */}
            <Pagination defaultCurrent={1} current={state.page} onChange={setNewPage}  total={state.total} /> {/* theme={context.darkTheme ? "dark" : "light"} */}
        </div>
    );
};

export default Main;