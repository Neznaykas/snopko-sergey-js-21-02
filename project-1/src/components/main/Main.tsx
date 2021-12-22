import React, {useContext, useEffect, useState} from "react";

import {Theme} from "../theme/Theme";
import Users from "../users/Users";
import Pager from "./pager/Pager";
import {getUsersList} from "../../api/dumMyApi";
import {UsersType} from "../../types/dumMyApiResponses";

import 'antd/dist/antd.css';
import { Pagination } from 'antd';

interface State {
    page: number;
    limit: number;
    total:number;
    data: Array<UsersType>;
}

const Main = () => {
    const context = useContext(Theme);

    const [state, setState]= useState<State>({
        data: [],
        page:0,
        limit: 6,
        total: 99,
    });

    useEffect(() => {
        setNewPage(state.page);
    }, []); //state.page

    const setNewPage = (page: number) =>
    {
        getUsersList(page, state.limit, (response) => {

            setState({
                data: response.data,
                limit: response.limit,
                total: response.total,
                page: response.page
            })
            console.log(response)
        }).catch(function () {})
    }

    const AllPages: Array<number> = [];

    for (let i = 1; i <= (state.total + 1) / state.limit; i += 1) {
        AllPages.push(i);
    }

    if ((state.total + 1) % state.limit > 0) {
        AllPages.push(AllPages.length + 1);
    }

    return (
        <div>
            <Users darkTheme={context.darkTheme || false} ListUsers={state.data}/>
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