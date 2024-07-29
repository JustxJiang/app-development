import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbars from './pages/navbars'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
const App = function(){

    return(
      <>
        <BrowserRouter>
        <Navbars />
            <Routes>
            <Route path = '/' element = {<Home/>}/>
            <Route path = '/about' element = {<About/>}/>
             <Route path = '/contact' element = {<Contact/>}/>
            </Routes>
        </BrowserRouter>
      </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

