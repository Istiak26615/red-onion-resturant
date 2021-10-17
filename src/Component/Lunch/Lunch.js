import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Lunch = () => {
    const [lunch, setLunch]=useState([])
    useEffect(()=>{
        fetch('./foods.json')
        .then(res=>res.json())
        .then(data=>setLunch(data.slice(6,12)))
    },[])
    return (
        <div className="container">
           <div className="row justify-content-center">
               {
                   lunch.map(food=><Food key={food.id} food={food}></Food>)
                   
               }
               </div> 
        </div>
    );
};

export default Lunch;