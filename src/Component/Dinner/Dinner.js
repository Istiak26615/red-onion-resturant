import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Dinner = () => {
    const [dinner, setDinner]=useState([])
    useEffect(()=>{
        fetch('./foods.json')
        .then(res=>res.json())
        .then(data=>setDinner(data.slice(12,18)))
    },[])
    return (
        <div className="container">
           <div className="row justify-content-center">
               {
                   dinner.map(food=><Food key={food.id} food={food}></Food>)
                   
               }
               </div> 
        </div>
    );
};

export default Dinner;