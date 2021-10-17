import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Food.css';


const Food = (props) => {
    const{id,name, image ,price,details}=props.food
    console.log(image, name)
    return (
        
        <div className="col-md-3 service justify-content-center m-4">
              
              <Link to={`/details/${id}`} className="detailsLink">  
            <div className="border-0 rounded food-card">
             <img src={image} alt=""/><br/>
             <small>{name}</small><br/>
             <small>{details}</small><br/>
             <h5>${price}</h5>
             
            
            </div>
            </Link>
                
            </div>
            
    );
};

export default Food;