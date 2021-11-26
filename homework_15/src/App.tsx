import './App.css';
import React from 'react';
import Users from './components/users/Users';
import {getUsersList} from "./api/dumMyApi";
import Theme from "./components/theme/Theme";

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

    console.log(getUsersList(1,10,function (data) { console.log(data)}))
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
      <div className="App">
        <header className="App-header">
          <h2>Пользователи</h2>
          <div className="users">
            {this.state.data?.map((e,index)=>
                <Users key={index} id={index+1} text={e.text}/>)}
          </div>

        </header>
        <Theme/>
      </div>
    );
  }
}

export default App;
