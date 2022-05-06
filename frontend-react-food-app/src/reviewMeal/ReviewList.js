import React, { useState, useEffect } from "react";
// import {Link} from "react-router-dom";
import RequestApi from "../api/RequestApi";
import ReviewCardList from "./ReviewCardList";

 

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    // useEffect(function getReviewsOnLoad() {
      
    //     revResult();
 
    // }, []);

    // async function revResult(meal_id) {
    //     const reviews = await RequestApi.getReviews(meal_id);
    //     setReviews(reviews);
    // }
    useEffect(() => {
        async function getReviewById(id){
          let reviews = await RequestApi.getReviews(id);
          setReviews(reviews);
        }
        getReviewById();
      }, []);


    return (
    <div className="ReviewList">
       
       {reviews.length ?
       <ReviewCardList reviews={reviews} /> 
        : <p>No Reviews found......</p>
       }
          {/* {reviews.map(r => (
            <ReviewDetails
            key={r.id}
            meal_id={r.meal_id}
            review={r.review}
            username={r.username}
            />
       
           ))} */}

    </div>
     );
}

export default ReviewList;