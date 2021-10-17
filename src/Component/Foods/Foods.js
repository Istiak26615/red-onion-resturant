import React from 'react';
import { useEffect, useState } from "react";
import Food from '../Food/Food';
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';
import Dinner from '../Dinner/Dinner';
import { Link } from 'react-router-dom';
import './Foods.css'



const Foods = () => {
    const [foods, setFoods]=useState([])

    const callBreakfast=()=>{
       const bringFoods= setFoods(<Breakfast></Breakfast>)  
    }

    return (
        <div className="container">

               <div className="col-md-10">
              <div className="menu-container ">
                <ul className="d-flex align-items-center justify-content-center">
                  
                  <div className=" d-flex">
                  <li onClick={callBreakfast} className="foodTime">Breakfast</li>
                  <li className="foodTime">Lunch</li>
                  <li className="foodTime">Dinner</li></div>  
                </ul>
                <div>
                  <Breakfast></Breakfast>
                  <Lunch></Lunch>
                  <Dinner></Dinner>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Foods;