import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {
    Provider
} from 'react-redux';

// import '../assets/css/main.css';

import MainPage from '../js/components/main-page';


document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render( <MainPage /> ,
                           document.getElementById('reactMainPage'));
});
