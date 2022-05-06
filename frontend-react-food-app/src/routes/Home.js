import React, { useState } from "react";
import Meals from "../components/Meals";
import MealData from "../api/db";
import "../App.css";

const Home = () => {
    
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

export default Home;
