import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Naglowek from './komponenty/naglowek';
import Filmy from './komponenty/filmy';
import Stopka from './komponenty/stopka';

ReactDOM.render(
  <React.StrictMode>
    <Naglowek />
    <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap", backgroundColor: "#DCDCDC"}}> <Filmy />  <Filmy />  <Filmy />  <Filmy />  <Filmy />  <Filmy /><Filmy /><Filmy /> </div>
    <Stopka />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
