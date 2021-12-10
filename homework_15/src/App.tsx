import './App.css';
import React from 'react';
import Users from './components/users/Users';
import {getUsersList} from "./api/dumMyApi";
import {Theme, ThemeContextState, ThemeContext} from "./components/theme/Theme";
import ThemeCheckbox from "./components/form/themecheckbox/ThemeCheckbox";
import {UsersType} from "./types/dumMyApiResponses";
import Pager from "./components/pager/Pager";

export interface save_data
{
  text: string
}

interface Props {
  data: save_data[];
}

interface State {
  page: number;
  limit: number;
  total:number;
  data: Array<UsersType>;
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.remove = this.remove.bind(this);
    this.setNewPage = this.setNewPage.bind(this);

    this.state = {data: [],
      page:0,
      limit: 20,
      total: 99,
    }
  }

  componentDidMount() { // Выполняется третьим при монтировании
    // Можем выполнять AJAX-запросы
    // Не вызываем setState

    getUsersList(this.state.page,15, (response) => {

      this.setState({
        data: response.data,
        limit: response.limit,
        total: response.total,
        page: response.page
      })

      console.log(response)

    }).catch(function () {})

    //console.log('Я смонтирован');
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): void { // Вызывается после перерисовки компонента (после монтирования не вызывается)
    //console.log('Я перерисовался');
    // Делаем AJAX-запросы
    // Не делаем setState
  }

  remove (id:number)
  {
    this.state.data.splice(id, 1);

    this.setState({
      data: this.state.data
    })

    localStorage.setItem("text", JSON.stringify(this.state.data));
  }

  setNewPage(page: number): void
  {
   // this.setState({ page: page });

    getUsersList(page,15, (response) => {

      this.setState({
        data: response.data,
        limit: response.limit,
        total: response.total,
        page: response.page
      })
      console.log(response)
    }).catch(function () {})
  }

  render() {

    const AllPages: Array<number> = [];

    for (let i = 1; i <= (this.state.total + 1) / this.state.limit; i += 1) {
      AllPages.push(i);
    }

    if ((this.state.total + 1) % this.state.limit > 0) {
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

                  <Users darkTheme={context.darkTheme || false} ListUsers={this.state.data}  />

                   <div className="paginator">
                      {AllPages.map((e) => (
                        <Pager darkTheme={context.darkTheme || false} page={e} limit={this.state.limit} total={this.state.total} key={e}
                          setNewPage={this.setNewPage} active={e === this.state.page + 1} />
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
}

export default App;
