import React  from "react";
import { Link } from "react-router-dom";
// import Rating from "react-rating";



const MealDetail = ({ meal }) => {

    return (
        <div className="col s12 ">
            <div className="card small hoverable">
            <div className="card-image">
            <img className="responsive-img "
            src = { meal.strMealThumb }
                alt = { meal.strMeal } />
            </div>

            <div >
                <Link
                to={`/meal/${meal.idMeal}`}><strong>View Details</strong> </Link>
            </div>
            <div>
                <span>{meal.strMeal}</span>
                <p><strong>Category:</strong>{ meal.strCategory }</p>
                <p>
                    <strong>Area: </strong>{ meal.strArea }
                </p>
                <p>
                    <strong>Tags:</strong>{meal.strTags}
                </p>
                
                {/* <Rating className="rating" 
                emptySymbol="far fa-star design"
                fullSymbol="fas fa-star design"            
                initialRating={3}/> */}
            </div>
            </div>
        </div>
    )
}

export default MealDetail;