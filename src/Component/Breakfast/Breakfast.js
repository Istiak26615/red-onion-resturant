import React from 'react';
import { useEffect, useState } from "react";
import Food from '../Food/Food';


const Breakfast = () => {
    const[breakfast, setBreakFast]=useState([])

    useEffect(()=>{
        fetch('./foods.json')
        .then(res=>res.json())
        .then(data=>setBreakFast(data.slice(0,6)))
    },[])
    return (
        <div className="container">
           <div className="row justify-content-center">
               {
                   breakfast.map(food=><Food key={food.id} food={food}></Food>)
                   
               }
               </div> 
        </div>
    );
};

export default Breakfast;