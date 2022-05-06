import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import RequestApi from"../api/RequestApi";
import ReviewCardList from "../reviewMeal/ReviewCardList";
import ReactPlayer from "react-player/youtube";
import LikeMeal from "../components/LikeMeal";

function PostMealDetail(){
    const { id } = useParams();
    console.debug("PostMealDetail", "id=",id);

    const[meal, setMeal] = useState(null)

    useEffect(function getMealAndReview() {
        async function getMeal(){
            const meal = await RequestApi.getMealById(id);
            setMeal(meal.meals);
        }
        getMeal();
    }, [id]);

    if(!meal) return <h2> Loading.....</h2>

    return (
        <div className="PostMealDetail col-md-8 offset-md-2">
            
            {/* <h4> {meal.id}</h4> */}
            <p><b>{meal.meal}</b></p>
            <p><b>{meal.category}</b></p>
            <p><b>Instructions:</b> {meal.instructions}</p>
            <p><b>{meal.area}</b></p>
           
           
             <img src ={meal.image}
                    alt = {meal} />
                    <hr></hr>
             <LikeMeal />       
             <div className="row center-align">
                <div className="col s12">
                    <h4>Demo Video :</h4>
                       <div className="player-wrapper">
                       <ReactPlayer 
                           className = "react-player"
                           url = { meal.youtube }
                           width="100%"
                           height="100%"
                           pip={true}
                           stopOnUnmount={false}
                       />
                       </div>
                   </div>
               </div>
            
         <hr></hr><br></br>
         
            <div>
            <Link to={`/meals/${meal.id}/add`}><button className="btn btn-info">Add Review</button></Link>
            <hr></hr>
            <ReviewCardList reviews={meal.reviews} />
            </div>

        </div>
        
    )
}

export default PostMealDetail;