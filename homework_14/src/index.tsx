import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Keep} from "./App";

let keeps: [{ text: string }] = [{text: "123"}]

keeps = localStorage.getItem("text") ?
    JSON.parse(String(localStorage.getItem("text"))) : [];

ReactDOM.render( // Отрендерить компонент
  <React.StrictMode>
    {/* Какой компонент */}
    <App keeps={keeps} />
  </React.StrictMode>,
  document.getElementById('root'), // Куда поместить
);
