import React, { useState } from 'react';
import { useParams } from 'react-router';
import foodsData from '../../data/data';
import './FoodDetails.css'

const FoodDetails = () => {
    const[totalnumber, setTotalNumber]=useState(1)
    let { id } = useParams();
    const food=foodsData.find(fd=>fd.id===id)
    
    const increase=()=>{
        setTotalNumber  (totalnumber+1)
    }
    const decrease=()=>{
        if(totalnumber>1)
        {
            setTotalNumber  (totalnumber-1)
        }
    }

    const totalPrice=(food.price)*totalnumber;
    
    return (
        <div className="row mt-5 align-items-center">
            <div className="col-md-6 details-body">
               <div>
               <h1>{food.name}</h1>
               <p>{food.details}</p>
               <h3>${totalPrice}</h3>
               
               </div>
               <div className="d-flex inc-dec-Number align-items-center mx-50">
               <i onClick={decrease}className="fas fa-minus"></i>
               <h3>{totalnumber}</h3>
               <i onClick={increase} className="fas fa-plus"></i>
               </div>
               <div >
               <i className="fas fa-cart-plus add-to-cart"/>
               </div>
            </div>
            <div className="col-md-6 food-details-image">
            <img src={food.image} alt=""/>
            </div>
            
            
        </div>
    );
};

export default FoodDetails;