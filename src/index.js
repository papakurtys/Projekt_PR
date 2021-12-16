import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Naglowek from './komponenty/naglowek';
import Filmy from './komponenty/filmy';
import Stopka from './komponenty/stopka';
import Home from './komponenty/home';
import SignUp from './komponenty/SignUp';
import SignIn from './komponenty/SignIn';
import Details from './komponenty/details';
import Add from './komponenty/add';

ReactDOM.render(
<BrowserRouter>
  <React.StrictMode>
    <Naglowek />
    <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/SignUp' element={<SignUp />} />
           <Route path='/SignIn' element={<SignIn />} />
           <Route path='/details' element={<Details />} />
           <Route path='/add' element={<Add />} />
    </Routes>
     <Stopka />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
