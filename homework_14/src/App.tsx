import './App.css';
import React from 'react';
import { Table } from './components/table/Table';
import { Add } from './components/add/Add';

import logo from './logo.svg'

/*  Разработка ToDo-листа (списка дел) на react.
Предусмотреть минимальный функционал, т.е. у пользователя должна быть возможность добавлять и удалять записи.
Записи должны сохраняться при перезагрузке страницы.
 */

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Список дел (ToDo лист) на React</p>

          <Add />

          <div className="keeps">
            <Table text="заметка" id="1"/>
            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
          </div>

        </header>
      </div>
    );
  }
}

export default App;
