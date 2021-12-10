import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let data = localStorage.getItem("text") ?
    JSON.parse(String(localStorage.getItem("text"))) : [];

ReactDOM.render( // Отрендерить компонент
  <React.StrictMode>
    {/* Какой компонент */}
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root'), // Куда поместить
);
