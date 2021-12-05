import './App.css';
import React from 'react';
import Users from './components/users/Users';
import {getUsersList} from "./api/dumMyApi";
import {Theme, ThemeContextState, ThemeContext} from "./components/theme/Theme";
import ThemeCheckbox from "./components/form/themecheckbox/ThemeCheckbox";

export interface save_data
{
  text: string
}

interface Props {
  data: save_data[];
}

interface State {
  data: save_data[];
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.remove = this.remove.bind(this);

    this.state = {data: this.props.data}
  }

  componentDidMount() { // Выполняется третьим при монтировании
    // Можем выполнять AJAX-запросы
    // Не вызываем setState

    getUsersList(1,10,function (data) { console.log(data)}).catch(function () {

    })

    console.log('Я смонтирован');
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): void { // Вызывается после перерисовки компонента (после монтирования не вызывается)
    console.log('Я перерисовался');
    // Делаем AJAX-запросы
    // Не делаем setState
  }

  remove(id:number)
  {
    this.state.data.splice(id, 1);

    this.setState({
      data: this.state.data
    })

    localStorage.setItem("text", JSON.stringify(this.state.data));
  }

  /*add(keep: Keep)
  {
    this.state.keeps.push(keep)

    this.setState({
      keeps: this.state.keeps
    })

    localStorage.setItem("text", JSON.stringify(this.props.keeps));
  }*/

  render() {
    return (
          <ThemeContext>
            <Theme.Consumer>
            {
              (context: Partial<ThemeContextState>) => (
                  <div className={`App ${context.darkTheme && 'app__dark'}`}>
                  <header className="App-header">
                  <h2>Пользователи</h2>

                  <div className="users">
                    {this.state.data?.map((e,index)=>
                      <Users key={index} id={index+1} text={e.text}/>)}
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
