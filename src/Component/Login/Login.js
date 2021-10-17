import React from 'react';
import './Login.css'
import logo1 from "../../images/logo2.png";

const Login = () => {
    return (
        <div className="login-bg">
            <img className="login-logo" src={logo1} alt=""/><br/>
            <input className="login-input-design" type="text" placeholder="Email"></input><br/>
            <input className="login-input-design" type="password" placeholder="Password"></input><br/>
            <button className="login-button">Login</button>
        </div>
    );
};

export default Login;