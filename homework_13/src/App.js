import React from "react";
import './App.css';

import {Header} from "./components/header/Header";
import {Product} from "./components/product/Product";
import {Sidebar} from "./components/sidebar/Sidebar";
import {Footer} from "./components/footer/Footer";
import {Banner} from "./components/banner/Banner";

class App extends React.Component {
  render() {
        return (
            <div className="App">
                <Header/>
                <aside className="sidebar">
                    <b>Морская рыба</b>
                    <Sidebar id="shark" name="Акула"/>
                    <Sidebar id="perch" name="Окунь"/>
                    <Sidebar id="turbot" name="Палтус"/>
                    <Sidebar id="cod" name="Треска"/>
                    <b>Пресноводная рыба</b>
                    <Sidebar id="fish1" name="Белоглазка"/>
                    <Sidebar id="fish2" name="Осётр"/>
                    <Sidebar id="fish3" name="Речной угорь"/>
                    <Sidebar id="fish4" name="Налим"/>
                </aside>

                <main className="container">
                    <article>
                        <h2 className="container__article">Рыбы на любой вкус</h2>
                        <h4 className="container__article">Мы продаём рыбов, а не только показываем</h4>
                    </article>

                    <Banner/>

                    <h3 className="fishes__title">Популярные</h3>

                    <section className="fishes">
                        <Product name="Палтус"/>
                        <Product name="Сёмга"/>
                        <Product name="Сом"/>
                        <Product name="Мойва"/>
                        <Product name="Сельдь"/>
                        <Product name="Тунец"/>
                    </section>
                </main>

                <Footer/>
            </div>
        );
    }
}

export default App;
