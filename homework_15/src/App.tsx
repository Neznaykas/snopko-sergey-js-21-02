import './App.css';
import React from 'react';
import Users from './components/users/Users';

export interface Keep
{
  text: string
}

interface Props {
  keeps: Keep[];
}

interface State {
  keeps: Keep[];
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.remove = this.remove.bind(this);

    this.state = {keeps: this.props.keeps}
  }

  remove(id:number)
  {
    this.state.keeps.splice(id, 1);

    this.setState({
      keeps: this.state.keeps
    })

    localStorage.setItem("text", JSON.stringify(this.state.keeps));
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
            {this.state.keeps?.map((e,index)=>
                <Users key={index} id={index+1} text={e.text}/>)}
          </div>

        </header>
      </div>
    );
  }
}

export default App;
