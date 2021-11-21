import React from "react";
import logo from './logo.svg';
import './App.css';

import {Header} from "./components/header/Header";
import {Product} from "./components/product/Product";
import {Sidebar} from "./components/sidebar/Sidebar";

class App extends React.Component {
  render() {
        return (
            <div className="App">
                <Header/>

                <aside className="sidebar">
                    <b>Морская рыба</b>
                    <Sidebar id="shark" name="Акула"/>
                    <Sidebar id="perch" name="Окунь"/>
                    <Sidebar id="turbot" name="Акула"/>
                    <Sidebar id="cod" name="Акула"/>
                    <b>Пресноводная рыба</b>
                    <Sidebar id="fish1" name="Акула"/>
                    <Sidebar id="fish2" name="Акула"/>
                    <Sidebar id="fish3" name="Речной угорь"/>
                </aside>

                <main className="container">
                    <img src={logo} className="App-logo" alt="logo"/>
                </main>


                <Product name="Палтус"/>
                <Product name="Сёмга"/>
                <Product name="Сом"/>
                <Product name="Мойва"/>
                <Product name="Сельдь"/>
                <Product name="Тунец"/>
            </div>
        );
    }
}

export default App;
