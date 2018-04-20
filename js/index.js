import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {
    Provider
} from 'react-redux';

// import '../assets/css/main.css';

import MainPage from '../js/components/main-page';
import LoginPage from '../js/components/login-page';
import SearchPage from '../js/components/search-page';
import BooksPage from '../js/components/books-page';
import FooterPage from '../js/components/footer-page';


document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render( <MainPage /> ,
                           document.getElementById('reactMainPage'));
});
document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render( <LoginPage /> ,
                           document.getElementById('reactLoginPage'));
});
document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render( <SearchPage /> ,
                           document.getElementById('reactSearchPage'));
});
document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render( <BooksPage /> ,
                           document.getElementById('reactBooksPage'));
});
document.addEventListener('DOMContentLoaded', () => {
    return ReactDOM.render( <FooterPage /> ,
                           document.getElementById('reactFooterPage'));
});
