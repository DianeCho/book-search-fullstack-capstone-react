import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function BooksPage(props) {
    return (
        <main className="js-books-page">
        <h2><img src="assets/images/logo.jpeg" className="logo" alt="" />Books</h2>
        <div className="container-box">
        <ul className="goodreads-search-results">
        </ul>
        <div className="container continueBtnWrapper">
        <label htmlFor="query"></label>
        <button type="button" className='optionbutton1' id="returnbtn">Return to Search</button>
        <button type="submit" id="continue" className="continuebtn">Continue</button>
        </div>
        </div>
        </main>
    )
}
