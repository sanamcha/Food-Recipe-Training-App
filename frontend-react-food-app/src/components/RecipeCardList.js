import React from "react";

import { Link } from "react-router-dom";
import { ListGroupItem } from "reactstrap";

function RecipeCardList({ meals, like }){
    console.debug("RecipeCardList", "meals=", meals);

    return (
        <>
        <div>
           {meals.map(m =>(
               <Link to={`/posts/${m.meal}`} key={m.id} >
                <ListGroupItem>
                  {m.meal}   <br></br>  
                  <img src={m.image} alt="meal image"/>             
                </ListGroupItem>

               </Link>
               
           ))}
        </div>
        </>
    );
}

export default RecipeCardList;