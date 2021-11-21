import logo from './logo.svg';
import './App.css';

import {Header} from "./components/header/Header";
import {Product} from "./components/product/Product";

function App() {
  return (
    <div className="App">
      <Header/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

            <Product name="Палтус"/>
            <Product name="Сёмга"/>
            <Product name="Сом"/>
            <Product name="Мойва"/>
            <Product name="Сельдь"/>
            <Product name="Тунец"/>
      </header>
    </div>
  );
}

export default App;
