import React from "react";
import { Link } from "react-router-dom";

function PostMealCard({ id, meal, category, area, instructions, image, youtube }) {
    console.debug("PostMealCard=",PostMealCard);

    return(
        <Link className="PostMealCard card" to={`/meals/${id}`}>
            <div className="card-body">
                <h6 className="card-title">{meal} </h6>
                <img src={image}
                    alt={meal} /> 
                
                    <p>{category}</p>
                    <p>{area}</p>
                    
                    {/* <p>{instructions}</p> */}
                    {/* <p>{youtube}</p> */}

            </div>
        </Link>
    );

}

export default PostMealCard;