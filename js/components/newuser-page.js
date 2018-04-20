import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function NewuserPage(props) {
    return (
        <main className="js-newuser-page">
        <form action="#" className="js-newuser-form">
        <h2><img src="assets/images/logo.jpeg" className="logo" alt="" />Register as New User</h2>
        <div className="container">
        <div className="row">
        <div className="col-25">
        <label htmlFor="fname">First Name</label>
        </div>
        <div className="col-75">
        <input type="text" id="fname" name="firstname" placeholder="First Name" />
        </div>
        </div>
        <div className="row">
        <div className="col-25">
        <label htmlFor="lname">Last Name</label>
        </div>
        <div className="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Last Name" />
        </div>
        </div>
        <div className="row">
        <div className="col-25">
        <label htmlFor="email">Email address</label>
        </div>
        <div className="col-75">
        <input type="text" id="email" name="email" placeholder="Email Address" />
        </div>
        </div>
        <div className="row">
        <div className="row">
        <div className="col-25">
        <label htmlFor="npassword">New Password</label>
        </div>
        <div className="col-75">
        <input type="text" id="npassword" name="npassword" placeholder="New Password" />
        </div>
        </div>
        <div className="row">
        <div className="row">
        <div className="col-25">
        <label htmlFor="cpassword">Confirm Password</label>
        </div>
        <div className="col-75">
        <input type="text" id="cpassword" name="cpassword" placeholder="Confirm Password" />
        </div>
        </div>
        <div className="row">
        <button type="submit" className="registerbtn">Register</button>
        </div>
        </div>
        </div>
        </div>
        <div className="newuser-box">

        <span className="sign-in-trigger">Already Registered? <a href="#" className="signinlink">Sign In</a></span>

        </div>
        </form>
        </main>

    )
}
