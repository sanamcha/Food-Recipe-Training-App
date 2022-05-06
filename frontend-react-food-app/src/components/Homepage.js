import React from "react";
import  { useContext } from 'react';
import { Link } from "react-router-dom";
import UserContext from "../users/UserContext";
import Home from "../routes/Home";
import MealData from "../api/db";
import Meals from "./Meals";


function Homepage(){
    const { currentUser } = useContext(UserContext);

    
    return (
        <div className="Homepage">
            <div className="container text-center">
            <h1>Best Chef Training Center</h1>
          
            { currentUser ?
            <h3>Welcome back, {currentUser.firstName || currentUser.username }</h3> : (
            <div>
                <p>
                <Link className="btn btn-success mr-3" to="/login">Log in </Link>
                
                <Link className="btn btn-success" to="/signup">Sign Up</Link>
            </p>
            
                <hr></hr>
            <p>
                <Link className="btn btn-primary mr-3" to="/guestlogin">Guest-Login </Link>
            
            </p>
            
            {/* <hr></hr> */}
            {/* <div >
                    <Meals meals={ MealData } />
                   </div> */}
        
            </div>
            
           
            )}
           
            </div>
            
        </div>
        
    );
}

export default Homepage;