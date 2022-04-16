import React , { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";
import Meals from "../components/Meals";
import { isEmpty } from "../common/Helper";
import { getIngredient, getIngredientImage, getFilterByIngredient } from "../api/Api";


const IngredientId = () => {
    const [ meals, setMeals ] = useState([]);
    const [ ingredient, setIngredient ] = useState({});
    let { id } = useParams();
  
    useEffect(() => {
        ingredientsList();
    }, [id, ingredient]);

    const ingredientsList = async () => {
        let res = await getIngredient();
        setIngredient(res[id]);
        filterMealsByIngredient();
       
    }

    const filterMealsByIngredient = async () => {
        let res = await getFilterByIngredient(ingredient.strIngredient);
        return setMeals(res);
    }

    return (
    <div className="container mb-3">
      <hr></hr>
        {/* <MoreLinks /> */}
   
      
         
      <Link to={`/ingredients/${1 * id - 1}`}>
          <button className="btn btn-info ">Previous</button></Link>
        <Link to={`/ingredients/${1 * id + 1}`}>
          <button className="btn btn-success">Next</button></Link>

        <div className="margin-tb row mb-3">
        {!isEmpty(ingredient) ? (
          <div>
            <div className="col s12 m4 mb-3">
              <h4 className="center-align">
                <span>{ingredient.strIngredient}</span>
              </h4>
              <img
                src={getIngredientImage(ingredient.strIngredient)}
                alt={`${ingredient.strIngredient} meal`}
              />

            </div>
            <div className="col s6">
              <h4 className="center-align ">
                <span>Description</span>
              </h4>
              <p>
                <span>{ingredient.strDescription}</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="center-align">
            <LoadingSpinner />
          </div>
        )}
      </div>
      <div className="row">
        <div className="col s12">
          <h4 className="center-align">
            <span>Meals</span>
          </h4>
          <div>
            {!isEmpty(meals) ? <Meals meals={meals} /> : <LoadingSpinner />}
          </div>
        </div>

      </div>
    </div>
  );
};

export default IngredientId;
