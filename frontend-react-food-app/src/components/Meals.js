import React from "react";
import MealDetail from "./MealDetail";


const Meals = ({ meals }) => {
    return (
        <div className="row">
            {meals.map((meal => (
                <MealDetail key={ meal.idMeal } meal={meal} />
            )))}
           
        </div>
    );
}

export default Meals;