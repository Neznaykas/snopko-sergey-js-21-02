import './App.css';
import logo from "./logo.svg";
import {Table} from "./components/table/Table";

/*  Разработка ToDo-листа (списка дел) на react.
Предусмотреть минимальный функционал, т.е. у пользователя должна быть возможность добавлять и удалять записи.
Записи должны сохраняться при перезагрузке страницы.
 */

 function App() {
          return (
          <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
          <p>Список дел (ToDo лист) на React</p>

          <div className="keeps">
              <Table/>
              <Table/>
              <Table/>
              <Table/>
              <Table/>
          </div>

          </header>
          </div>
          );
      }

export default App;
