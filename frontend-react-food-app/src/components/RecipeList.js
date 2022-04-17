import React, { useState, useEffect } from "react";
import RequestApi from "../api/RequestApi";
import RecipeCardList from "./RecipeCardList";
import { Link } from "react-router-dom";
import { ListGroupItem } from "reactstrap";


//show list of meals from api
function RecipeList({ meals }) {

    return (
    
    <div>
    {meals.map(m =>(
        <Link to={`/posts/${m.id}`} key={m.id} >
         <ListGroupItem>
         
           {m.meal}   <br></br>  
           <img src={m.image} alt="meal image"/>             
         </ListGroupItem>

        </Link>
        
    ))}
 </div>
 );
}

export default RecipeList;