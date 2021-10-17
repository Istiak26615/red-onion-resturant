import React from 'react';
import './Footer.css'
import logo1 from '../../images/logo2.png'

const Footer = () => {
    return (
         <div className="footer">
        <div className="row ">
            <div className="col-md-6 justify-content-start">
                <img className="w-25" src={logo1} alt=""/>
                
            </div>
            <div className="col-md-3">
            <a>About online food</a><br/>
            <a>Read our blog</a><br/>
            <a>Signup to deliver</a><br/>
            <a>Add your resturant</a><br/>
            </div>
            <div className="col-md-3">
            <a>Get Help</a><br/>
            <a>Read Faq</a><br/>
            <a>View all cities</a><br/>
            <a>Resturants near me</a><br/>
            </div>
            
        </div>
        <div className="row justify-content-end footer2">
            <div className="col-md-6">
            <p>copyright 2021 online food</p>
            </div>
            <div className="col-md-2">
             <p>Privacy Policy</p>
            </div>
            <div className="col-md-2">
            <p>terms of use</p>
            </div>
            <div className="col-md-2">
            <p>Pricing</p>
            </div>
        </div>
        </div>
    );
};

export default Footer;