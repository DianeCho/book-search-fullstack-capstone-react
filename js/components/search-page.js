import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function SearchPage(props) {
    return (
        <main className="js-search-page">
            <form action="#" className="js-search-form">
                <h2><img src="assets/images/logo.jpeg" className="logo" alt="" />Search Books</h2>
                    <div className="container">
                    <div className="searchColumn">
        <label htmlFor="query"></label>
            <input type="text" className="js-query" placeholder="Find Adventures Here!" />
            <input value="" type="hidden" className="js-query-username" />
                    </div>
                    <div className="searchColumn searchWrapper">
            <button type="submit" id="findIt" className="searchbtn">Search</button>
                    </div>
                    </div>
            </form>
        </main>
    )
}
