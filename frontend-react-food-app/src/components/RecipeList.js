import React, { useState, useEffect } from "react";
import RequestApi from "../api/RequestApi";
import RecipeCardList from "./RecipeCardList";




//show list of meals from api
function RecipeList() {

    const [meals, setMeals] = useState([]);
  
    useEffect(function getAllMeals() {
      console.debug("getAllMeals=", getAllMeals)
      result();
    }, []);

    async function result() {
        let meals = await RequestApi.getMeals();
        setMeals(meals);
}

    return (
    <div className="RecipeList">
      
        {meals.length ? 
        <RecipeCardList meals={meals} />
            : <p className="lead"> No results found.......</p>
        }
      </div>
 );
}

export default RecipeList;