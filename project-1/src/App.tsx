import './App.css';
import React, {useEffect, useState} from 'react';
import Users from './components/users/Users';
import {getUsersList} from "./api/dumMyApi";
import {Theme, ThemeContextState, ThemeContext} from "./components/theme/Theme";
import ThemeCheckbox from "./components/form/themecheckbox/ThemeCheckbox";
import {UsersType} from "./types/dumMyApiResponses";
import Pager from "./components/pager/Pager";

interface Props {}

interface State {
  page: number;
  limit: number;
  total:number;
  data: Array<UsersType>;
}

const App = function (props: Props)
{
  const [state, setState]= useState<State>({
      data: [],
      page:0,
      limit: 15,
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
          <ThemeContext>
            <Theme.Consumer>
            {
              (context: Partial<ThemeContextState>) => (
                  <div className={`App ${context.darkTheme && 'app__dark'}`}>
                  <header className="App-header">
                  <h2>Пользователи</h2>

                  <Users darkTheme={context.darkTheme || false} ListUsers={state.data}  />

                   <div className="paginator">
                      {AllPages.map((e) => (
                        <Pager darkTheme={context.darkTheme || false} page={e} limit={state.limit} total={state.total} key={e}
                          setNewPage={setNewPage} active={e === state.page + 1} />
                      ))}
                  </div>

                    <ThemeCheckbox/>
                  </header>
              </div>
              )
            }
            </Theme.Consumer>
          </ThemeContext>
    );
}

export default App;
