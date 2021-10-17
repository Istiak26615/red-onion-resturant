import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="header-img">
                 <input className="input-text center" type="text" placeholder="Search Food Item"></input>
                 <button className="input-button">Search</button>
            </div>
            
        </div>
        
    );
};

export default Banner;