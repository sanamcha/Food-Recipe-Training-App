import React, { useState } from "react";
import Meals from "../components/Meals";
import MealData from "../db";


import "../App.css";

const Homepage = () => {
    
    return (
        <div>
        <div className="center-align">
                <h4>
                     The Best Meal Collection
                </h4>
                <div className="container">
                <div >
                   <div >
                    <Meals meals={ MealData } />
                   </div>
                </div>
                </div> 
            
        </div>    
          
        </div>
    );
}

export default Homepage;
