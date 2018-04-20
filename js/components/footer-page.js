import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function FooterPage(props) {
    return (
        <footer>
        <p>&copy;2018 Diane Cho</p>
        <ul>

        <li>
        <a href="https://github.com/DianeCho"><img src="assets/images/github-logo.png" alt="Git Hub Logo" /></a>
        </li>
        <li>
        <a href='mailto:diane.kim.cho@gmail.com'><img src="assets/images/email-logo.jpeg" alt="Email Logo" /></a>
        </li>
        <li>
        <a href='https://www.linkedin.com/in/dianecho/'><img src="assets/images/linkedin-logo.png" alt="linked in  Logo" /></a>
        </li>
        </ul>


        </footer>
    )
}
