import React from "react";


const IngredientDetail = ({ ingredient }) => {
   

    return (
   
        <div className="col s12">
            <img 
                 src={ ingredient.image }
                 alt ={ ingredient.name } />
            <p>{ ingredient.measure }</p>
            <p>{ ingredient.name }</p>
        </div>
    );
}

export default IngredientDetail;