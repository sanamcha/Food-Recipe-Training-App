import React from "react";
import IngredientDetail from "./IngredientDetail";


const Ingredients =({ingredients}) => {
    
    return (
        <div>
            <h1>Ingredients</h1>
         
          {ingredients.map((ingredient, i) => 
            (
                <IngredientDetail key={i} ingredient ={ ingredient } />
            )
            )}
        </div>
    )
}

export default Ingredients;