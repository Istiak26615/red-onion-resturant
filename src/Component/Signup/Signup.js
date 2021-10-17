import React from 'react';
import './Signup.css';
import logo1 from "../../images/logo2.png";
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';


const Signup = () => {
    const{handleEmail,handlePass,handleSomething}=useFirebase()

    return (
        <div className="signup-bg">
            <img className="signup-logo" src={logo1} alt=""/><br/>
            <form>
            <input className="signup-input-design" type="text " placeholder="Name"></input><br/>
            <input className="signup-input-design" onBlur={handleEmail}  type="email" placeholder="Email"></input><br/>
            <input className="signup-input-design" onBlur={handlePass} type="password" placeholder="Password"></input><br/>
            <input className="signup-input-design" type="password" placeholder="Confirm Password"></input><br/>
            <button onClick={handleSomething} type="password" className="singup-button">Sign in</button><br/>
            </form>
            <Link to="/login"  id="takeToLogin">
            <p>Already Have an account?</p></Link>
        </div>
    );
};

export default Signup;