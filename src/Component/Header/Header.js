import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from "../../images/logo2.png";
import './Header.css'

const Header = () => {
    return (
        <div className="MenuBar-container menubar mt-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-2">
            
              <div className="logo-img">
              <Link to="/">
                <img className="w-75" src={logo1} alt="" />
                </Link>
              </div>
              
            </div>
            <div className="col-md-10">
              <div className="menu-container ">
                <ul className="d-flex align-items-end justify-content-end ">
                  
                  <Link to="/order" className="items">
                    <li><i class="fas fa-cart-plus"></i></li>
                  </Link>
                  <Link to="/login" className="items">
                    <li>Login</li>
                  </Link>
                  <Link to="/signup" className="items join-button">
                    <li className="signup">Sign Up</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;