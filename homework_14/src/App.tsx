import './App.css';
import React from 'react';
import { Table } from './components/table/Table';
import { Add } from './components/add/Add';

import logo from './logo.svg'

/*  Разработка ToDo-листа (списка дел) на react.
Предусмотреть минимальный функционал, т.е. у пользователя должна быть возможность добавлять и удалять записи.
Записи должны сохраняться при перезагрузке страницы.
 */

export interface Keep
{
  text: string
}

interface Props {
  keeps: Keep[];
}

class App extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
    this.remove = this.remove.bind(this);
  }

  remove(id:number)
  {
    this.props.keeps.splice(id, 1);
    localStorage.setItem("text", JSON.stringify(this.props.keeps));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Список дел (ToDo лист) на React</p>

          <Add tables={this.props.keeps}/>

          <div className="keeps">
            {this.props.keeps?.map((e,index)=>
                <Table key={index} id={index} text={e.text} remove={this.remove}/>)}

            {/*  <Table text="заметка" id={1} remove={this.remove}/>
            <Table text="заметка2" id={2} remove={this.remove}/> */}
          </div>

        </header>
      </div>
    );
  }
}

export default App;
