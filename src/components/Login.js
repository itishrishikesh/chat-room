import React from 'react';

import "../css/login.css"

export default function Login() {
    return (
        <div className="login-container">
            <input name="username" type="text" placeholder="Username"></input>
            <input name="password" type="password" placeholder="Password"></input>
            <div className="button-container">
                <a name="login">login</a> 
                <i className="fa fa-line"></i>
                <a name="signup">signup</a>
            </div>
        </div>
    );
}
