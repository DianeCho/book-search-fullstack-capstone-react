import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function LoginPage(props) {
    return (
        <main className="js-login-page">
            <form action="#" className="js-login-form">
                <h2><img src="assets/images/logo.jpeg" className="logo" alt="" />Login Form</h2>
                <div className="container">
                <p>For demo account use demo@domain.com and password 123</p>
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" id="sign-in-username" placeholder="Enter Username" name="uname" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" id="sign-in-password" placeholder="Enter Password" name="psw" required />
                    <button type="submit" className="login">Login</button>
                </div>

                <div className="newuser-box">
                    <span className="newuser">Register as <a href="#" className="newuserlink">new user?</a></span>
                </div>
            </form>
        </main>
    )
}
