import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function MainPage(props) {
    return (
        <main id='intro' className='js-main-page'>
            <h1><img src="assets/images/logo.jpeg" className="logo" alt="" />Bookworms Welcome!</h1>
            <p className="heading">Search for books that you will like to read!</p>
            <ol className="instructions">
                <li>You can search for books based on a title or an author.</li>
                <li>Select the book you are interested in reading or have read</li>
                <li>Save the book selected or if you read the book, you can also review the book.</li>
                <li>Save your list of books to keep track and what you have read.</li>
            </ol>
            <button type="submit" className="enter">Enter</button>
        </main>
    )
}
